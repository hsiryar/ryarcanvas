import React, { useState, useEffect, useRef } from "react";
import { BRAND } from "../data/config";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "../utils/whatsapp";
import {
  ChevronDown,
  Menu,
  X,
  Globe,
  ShoppingBag,
  TrendingUp,
  Sparkles,
  Bot,
  Layers,
  GraduationCap,
  MessageCircle,
} from "lucide-react";

export type NavView =
  | "home"
  | "service-web"
  | "service-ecommerce"
  | "service-marketing"
  | "coming-soon-ai"
  | "coming-soon-leads"
  | "coming-soon-academy"
  | "privacy-policy"
  | "terms-of-service";

interface HeaderProps {
  currentView: NavView;
  onNavigate: (view: NavView) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [comingSoonDropdownOpen, setComingSoonDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const comingSoonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (comingSoonRef.current && !comingSoonRef.current.contains(event.target as Node)) {
        setComingSoonDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (view: NavView, hash?: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setComingSoonDropdownOpen(false);
    if (hash && view === "home") {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const quoteWhatsAppUrl = buildWhatsAppUrl(WHATSAPP_MESSAGES.heroQuote());

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md ${
        isScrolled
          ? "border-b border-[#E2E8F0] shadow-sm py-2.5"
          : "border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#324BB0] rounded-lg p-1 group text-left"
            aria-label="RYAR Canvas Home"
          >
            <img
              src={BRAND.logoPath}
              alt="RYAR Canvas Official Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              loading="eager"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#181D28]">
            <button
              onClick={() => handleNavClick("home")}
              className={`hover:text-[#324BB0] transition-colors ${
                currentView === "home" ? "text-[#324BB0] font-semibold" : ""
              }`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => {
                  setServicesDropdownOpen(!servicesDropdownOpen);
                  setComingSoonDropdownOpen(false);
                }}
                className={`flex items-center gap-1.5 hover:text-[#324BB0] transition-colors py-1 ${
                  currentView.startsWith("service-")
                    ? "text-[#324BB0] font-semibold"
                    : ""
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-[#324BB0]" : ""
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-[#E2E8F0] rounded-xl shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNavClick("service-web")}
                    className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors text-left group"
                  >
                    <div className="p-2 rounded-lg bg-blue-50 text-[#324BB0] group-hover:bg-[#324BB0] group-hover:text-white transition-colors">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#181D28]">
                        Website Development
                      </div>
                      <div className="text-xs text-[#5B6275] mt-0.5">
                        Blogging & content sites with 12 to 48 months hosting
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick("service-ecommerce")}
                    className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors text-left group"
                  >
                    <div className="p-2 rounded-lg bg-purple-50 text-[#7E33B8] group-hover:bg-[#7E33B8] group-hover:text-white transition-colors">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#181D28]">
                        E-commerce + Admin Panel
                      </div>
                      <div className="text-xs text-[#5B6275] mt-0.5">
                        One-time payment, no mandatory monthly Shopify fees
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick("service-marketing")}
                    className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors text-left group"
                  >
                    <div className="p-2 rounded-lg bg-indigo-50 text-[#4E73F8] group-hover:bg-[#4E73F8] group-hover:text-white transition-colors">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#181D28]">
                        Digital Marketing
                      </div>
                      <div className="text-xs text-[#5B6275] mt-0.5">
                        Targeted Meta Ads (FB & IG) and TikTok advertising
                      </div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Portfolio Link */}
            <button
              onClick={() => handleNavClick("home", "portfolio")}
              className="hover:text-[#324BB0] transition-colors"
            >
              Portfolio
            </button>

            {/* Coming Soon Dropdown */}
            <div className="relative" ref={comingSoonRef}>
              <button
                onClick={() => {
                  setComingSoonDropdownOpen(!comingSoonDropdownOpen);
                  setServicesDropdownOpen(false);
                }}
                className={`flex items-center gap-1.5 hover:text-[#324BB0] transition-colors py-1 ${
                  currentView.startsWith("coming-soon-")
                    ? "text-[#324BB0] font-semibold"
                    : ""
                }`}
                aria-expanded={comingSoonDropdownOpen}
                aria-haspopup="true"
              >
                Coming Soon
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    comingSoonDropdownOpen ? "rotate-180 text-[#324BB0]" : ""
                  }`}
                />
              </button>

              {comingSoonDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-76 bg-white border border-[#E2E8F0] rounded-xl shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNavClick("coming-soon-ai")}
                    className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors text-left group"
                  >
                    <div className="p-2 rounded-lg bg-purple-50 text-[#7E33B8]">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#181D28]">
                        AI Calling Agent
                      </div>
                      <div className="text-xs text-[#5B6275] mt-0.5">
                        Voice workflows for client engagement
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick("coming-soon-leads")}
                    className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors text-left group"
                  >
                    <div className="p-2 rounded-lg bg-blue-50 text-[#324BB0]">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#181D28]">
                        Automated Lead Gen
                      </div>
                      <div className="text-xs text-[#5B6275] mt-0.5">
                        Systematic discovery & qualification
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick("coming-soon-academy")}
                    className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors text-left group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-50 text-[#16865C]">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#181D28]">
                        Ryar Canvas Academy
                      </div>
                      <div className="text-xs text-[#5B6275] mt-0.5">
                        Practical digital skills education
                      </div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Contact Link */}
            <button
              onClick={() => handleNavClick("home", "contact")}
              className="hover:text-[#324BB0] transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Header Action: Get a Quote */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={quoteWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-semibold text-sm brand-gradient hover:opacity-95 shadow-sm transition-opacity"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get a Quote</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={quoteWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white font-medium text-xs brand-gradient"
              aria-label="Get a Quote via WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Quote</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#181D28] hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#324BB0]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[#E2E8F0] pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="space-y-1">
              <button
                onClick={() => handleNavClick("home")}
                className="w-full text-left px-3 py-2 text-base font-semibold text-[#181D28] rounded-md hover:bg-slate-50"
              >
                Home
              </button>

              <div className="pt-2 pb-1 px-3 text-xs font-semibold uppercase tracking-wider text-[#5B6275]">
                Services
              </div>
              <button
                onClick={() => handleNavClick("service-web")}
                className="w-full text-left px-4 py-2 text-sm text-[#181D28] rounded-md hover:bg-slate-50 flex items-center gap-2"
              >
                <Globe className="w-4 h-4 text-[#324BB0]" />
                Website Development
              </button>
              <button
                onClick={() => handleNavClick("service-ecommerce")}
                className="w-full text-left px-4 py-2 text-sm text-[#181D28] rounded-md hover:bg-slate-50 flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-[#7E33B8]" />
                E-commerce Website + Custom Admin Panel
              </button>
              <button
                onClick={() => handleNavClick("service-marketing")}
                className="w-full text-left px-4 py-2 text-sm text-[#181D28] rounded-md hover:bg-slate-50 flex items-center gap-2"
              >
                <TrendingUp className="w-4 h-4 text-[#4E73F8]" />
                Digital Marketing (Meta & TikTok Ads)
              </button>

              <div className="pt-3 pb-1 px-3 text-xs font-semibold uppercase tracking-wider text-[#5B6275]">
                Coming Soon
              </div>
              <button
                onClick={() => handleNavClick("coming-soon-ai")}
                className="w-full text-left px-4 py-2 text-sm text-[#181D28] rounded-md hover:bg-slate-50 flex items-center gap-2"
              >
                <Bot className="w-4 h-4 text-[#7E33B8]" />
                AI Calling Agent
              </button>
              <button
                onClick={() => handleNavClick("coming-soon-leads")}
                className="w-full text-left px-4 py-2 text-sm text-[#181D28] rounded-md hover:bg-slate-50 flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-[#324BB0]" />
                Automated Lead Gen Pipeline
              </button>
              <button
                onClick={() => handleNavClick("coming-soon-academy")}
                className="w-full text-left px-4 py-2 text-sm text-[#181D28] rounded-md hover:bg-slate-50 flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-[#16865C]" />
                Ryar Canvas Academy
              </button>

              <div className="pt-3 border-t border-[#E2E8F0]/60">
                <button
                  onClick={() => handleNavClick("home", "portfolio")}
                  className="w-full text-left px-3 py-2 text-base font-semibold text-[#181D28] rounded-md hover:bg-slate-50"
                >
                  Portfolio (Our Work)
                </button>
                <button
                  onClick={() => handleNavClick("home", "faq")}
                  className="w-full text-left px-3 py-2 text-base font-semibold text-[#181D28] rounded-md hover:bg-slate-50"
                >
                  FAQ
                </button>
                <button
                  onClick={() => handleNavClick("home", "contact")}
                  className="w-full text-left px-3 py-2 text-base font-semibold text-[#181D28] rounded-md hover:bg-slate-50"
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={quoteWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-white font-semibold text-sm brand-gradient"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get a Quote on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
