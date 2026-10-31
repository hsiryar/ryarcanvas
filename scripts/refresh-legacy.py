"""Regenerate existing brand/service HTML fragments after changing legacy content or packages.
Uses a temporary directory; the public Next.js build never requires Python at runtime.
"""
from pathlib import Path
import json, re, shutil, subprocess, tempfile, html
web=Path(__file__).resolve().parents[1]
paths=['index.html','services/website-development.html','services/ecommerce-development.html','services/digital-marketing.html','coming-soon/ai-calling-agent.html','coming-soon/automated-lead-generation.html','coming-soon/academy.html','privacy.html','terms.html']
with tempfile.TemporaryDirectory() as td:
    root=Path(td)
    shutil.copy(web/'content/legacy-build-site.py',root/'build_site.py')
    shutil.copy(web/'content/legacy-packages.json',root/'content.json')
    (root/'services').mkdir();(root/'coming-soon').mkdir()
    subprocess.run(['python3',str(root/'build_site.py')],check=True)
    result={}
    for path in paths:
        s=(root/path).read_text()
        def get(pattern):return re.search(pattern,s,re.S).group(1)
        body=get(r'<body>(.*?)</body>');prefix='../' if '/' in path else ''
        nav=re.search(r'<nav id="primary-nav"[\s\S]*?</nav>',body).group()
        updated=nav.replace(f'<a href="{prefix}index.html#contact">Contact</a>',f'<a href="{prefix}blog.html">Blog</a><a href="{prefix}contact.html">Contact</a>')
        body=body.replace(nav,updated,1)
        footer=re.search(r'<footer id="contact"[\s\S]*?</footer>',body).group()
        updated=footer.replace(f'<a href="{prefix}index.html#portfolio">Portfolio</a>',f'<a href="{prefix}index.html#portfolio">Portfolio</a><a href="{prefix}blog.html">Blog</a>')
        updated=updated.replace(f'<a href="{prefix}index.html#contact">Contact</a>',f'<a href="{prefix}contact.html">Contact</a>')
        body=body.replace(footer,updated,1)
        if path=='privacy.html':
            body=body.replace('<h2>WhatsApp and Instagram</h2>','<h2>Contact form</h2><p>When connected, the contact form sends your name, email, message and optional service interest to the agency through its configured backend and email provider so we can respond. Do not include sensitive information. The backend hosting provider and email provider process these details; retention and data-controller details must be confirmed by the business.</p><h2>WhatsApp and Instagram</h2>')
        result[path]={'title':html.unescape(get(r'<title>(.*?)</title>')),'description':html.unescape(get(r'<meta name="description" content="(.*?)">')),'body':body}
    (web/'content/legacy-pages.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
    print('Regenerated legacy page fragments.')
