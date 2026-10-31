// Optional analytics integration: define window.ryarAnalytics(eventName) before this file.
// Do not send names, emails, message text, or other personal information.
(function(){
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#primary-nav');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.setAttribute('aria-label',open?'Open navigation':'Close navigation');nav.classList.toggle('is-open',!open)});nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation')}});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');toggle.focus()}})}
 document.querySelectorAll('.faq-question').forEach(button=>{const answer=document.getElementById(button.getAttribute('aria-controls'));if(!answer)return;answer.hidden=true;button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));answer.hidden=open;button.querySelector('.faq-plus').textContent=open?'+':'−'})});
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 document.addEventListener('click',e=>{const a=e.target.closest('[data-event]');if(a&&typeof window.ryarAnalytics==='function')window.ryarAnalytics(a.dataset.event)});
 if(location.pathname.includes('/services/')&&typeof window.ryarAnalytics==='function')window.ryarAnalytics('service_page_visit');
})();
