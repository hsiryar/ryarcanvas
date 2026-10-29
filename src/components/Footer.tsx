import React from "react";
import { BRAND } from "../data/config";
import { NavView } from "./Header";
import { MessageSquare, Instagram, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onNavigate: (view: NavView, hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (view: NavView, hash?: string) => {
    onNavigate(view, hash);
    if (hash && view === "home") {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column (spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav("home")}
              className="inline-block p-1 bg-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white text-left"
              aria-label="RYAR Canvas Home"
            >
              <img
                src={BRAND.logoPath}
                alt="RYAR Canvas Logo"
                className="h-9 w-auto object-contain"
                loading="lazy"
              />
            </button>
            <p className="text-sm font-semibold text-slate-200">
              "{BRAND.tagline}"
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              RYAR Canvas is a modern digital agency committed to transparency, technical excellence, and tailored digital experiences. From high-performance websites to custom online stores and focused social advertising.
            </p>
            <div className="pt-2 text-xs text-slate-400">
              Official custom domain:{" "}
              <span className="text-slate-200 font-mono font-medium">
                {BRAND.domain}
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => handleNav("service-web")}
                  className="hover:text-white transition-colors text-left"
                >
                  Website Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("service-ecommerce")}
                  className="hover:text-white transition-colors text-left"
                >
                  E-commerce + Custom Admin Panel
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("service-marketing")}
                  className="hover:text-white transition-colors text-left"
                >
                  Digital Marketing (Meta & TikTok)
                </button>
              </li>
            </ul>
          </div>

          {/* Explore Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => handleNav("home")}
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("home", "portfolio")}
                  className="hover:text-white transition-colors text-left"
                >
                  Portfolio (Our Work)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("home", "coming-soon")}
                  className="hover:text-white transition-colors text-left"
                >
                  Coming Soon Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("home", "process")}
                  className="hover:text-white transition-colors text-left"
                >
                  Working Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("home", "faq")}
                  className="hover:text-white transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Legal Column */}
          <div className="space-y-6">
            {/* Connect Section - STRICT SOCIAL NAME DISPLAY ONLY */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Connect
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href={BRAND.whatsappBaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                    aria-label="Connect with RYAR Canvas on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>{BRAND.whatsappLabel}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </li>
                <li>
                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-pink-400 transition-colors"
                    aria-label="Follow RYAR Canvas on Instagram"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span>{BRAND.instagramLabel}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Legal
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>
                  <button
                    onClick={() => handleNav("privacy-policy")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("terms-of-service")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} RYAR Canvas. All rights reserved.</p>
          <p className="text-slate-400">
            Official Agency Website · Powered by Static GitHub Pages & Custom Domain
          </p>
        </div>
      </div>
    </footer>
  );
};
