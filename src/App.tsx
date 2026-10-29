import React, { useState, useEffect } from "react";
import { Header, NavView } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { HomeView } from "./views/HomeView";
import { WebsiteDevelopmentView } from "./views/WebsiteDevelopmentView";
import { EcommerceDevelopmentView } from "./views/EcommerceDevelopmentView";
import { DigitalMarketingView } from "./views/DigitalMarketingView";
import { ComingSoonView } from "./views/ComingSoonView";
import { PrivacyPolicyView } from "./views/PrivacyPolicyView";
import { TermsOfServiceView } from "./views/TermsOfServiceView";

function getViewFromPath(pathname: string): NavView {
  const clean = pathname.toLowerCase().replace(/\/+$/, "");
  if (clean.includes("website-development")) return "service-web";
  if (clean.includes("ecommerce-development")) return "service-ecommerce";
  if (clean.includes("digital-marketing")) return "service-marketing";
  if (clean.includes("ai-calling-agent")) return "coming-soon-ai";
  if (clean.includes("automated-lead-generation")) return "coming-soon-leads";
  if (clean.includes("academy")) return "coming-soon-academy";
  if (clean.includes("privacy-policy")) return "privacy-policy";
  if (clean.includes("terms-of-service")) return "terms-of-service";
  return "home";
}

function getPathFromView(view: NavView): string {
  switch (view) {
    case "service-web":
      return "/services/website-development";
    case "service-ecommerce":
      return "/services/ecommerce-development";
    case "service-marketing":
      return "/services/digital-marketing";
    case "coming-soon-ai":
      return "/coming-soon/ai-calling-agent";
    case "coming-soon-leads":
      return "/coming-soon/automated-lead-generation";
    case "coming-soon-academy":
      return "/coming-soon/academy";
    case "privacy-policy":
      return "/privacy-policy";
    case "terms-of-service":
      return "/terms-of-service";
    case "home":
    default:
      return "/";
  }
}

export default function App() {
  const [currentView, setCurrentView] = useState<NavView>(() =>
    getViewFromPath(window.location.pathname)
  );

  // Synchronize browser history and popstate
  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(getViewFromPath(window.location.pathname));
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Update document title and metadata dynamically per view
  useEffect(() => {
    let title = "RYAR Canvas | Website Development, E-commerce & Digital Marketing";
    let desc =
      "RYAR Canvas helps businesses build professional websites, custom e-commerce stores, and targeted Meta and TikTok advertising campaigns.";

    switch (currentView) {
      case "service-web":
        title = "Website Development Packages | RYAR Canvas";
        desc =
          "Launch your professional blog or content website with 12 to 48 months hosting, domain setup, and advertising-code guidance.";
        break;
      case "service-ecommerce":
        title = "E-commerce Website Development | RYAR Canvas";
        desc =
          "Custom e-commerce store with custom administration panel. One-time website development pricing with no mandatory monthly Shopify fees.";
        break;
      case "service-marketing":
        title = "Meta Ads & TikTok Advertising | RYAR Canvas";
        desc =
          "Targeted paid advertising campaigns across Facebook, Instagram, and TikTok to grow your audience and qualified leads.";
        break;
      case "coming-soon-ai":
        title = "AI Calling Agent — Coming Soon | RYAR Canvas";
        desc =
          "Smarter conversations and voice workflows designed to support customer interactions and business operations.";
        break;
      case "coming-soon-leads":
        title = "Automated Lead Gen Pipeline — Coming Soon | RYAR Canvas";
        desc =
          "Next-generation lead generation and qualification workflows designed for modern businesses.";
        break;
      case "coming-soon-academy":
        title = "Ryar Canvas Academy — Coming Soon | RYAR Canvas";
        desc =
          "Practical digital skills education, creative design, and online business fundamentals.";
        break;
      case "privacy-policy":
        title = "Privacy Policy | RYAR Canvas";
        desc = "Official privacy policy and transparency statement for RYAR Canvas.";
        break;
      case "terms-of-service":
        title = "Terms of Service | RYAR Canvas";
        desc = "Official terms of service and commercial scope guidelines for RYAR Canvas.";
        break;
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", desc);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", desc);
  }, [currentView]);

  const handleNavigate = (view: NavView, hash?: string) => {
    setCurrentView(view);
    const newPath = getPathFromView(view);
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, "", newPath);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#181D28] font-sans">
      <Header currentView={currentView} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentView === "home" && <HomeView onNavigate={handleNavigate} />}

        {currentView === "service-web" && <WebsiteDevelopmentView />}

        {currentView === "service-ecommerce" && <EcommerceDevelopmentView />}

        {currentView === "service-marketing" && <DigitalMarketingView />}

        {currentView === "coming-soon-ai" && (
          <ComingSoonView type="ai" onNavigate={handleNavigate} />
        )}

        {currentView === "coming-soon-leads" && (
          <ComingSoonView type="leads" onNavigate={handleNavigate} />
        )}

        {currentView === "coming-soon-academy" && (
          <ComingSoonView type="academy" onNavigate={handleNavigate} />
        )}

        {currentView === "privacy-policy" && <PrivacyPolicyView />}

        {currentView === "terms-of-service" && <TermsOfServiceView />}
      </main>

      <Footer onNavigate={handleNavigate} />
      <FloatingWhatsApp />
    </div>
  );
}
