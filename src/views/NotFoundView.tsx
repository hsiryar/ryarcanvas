import React from "react";
import { NavView } from "../components/Header";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "../utils/whatsapp";
import { Home, MessageSquare } from "lucide-react";

interface NotFoundViewProps {
  onNavigateHome: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onNavigateHome }) => {
  const whatsappUrl = buildWhatsAppUrl(WHATSAPP_MESSAGES.general());

  return (
    <div className="max-w-2xl mx-auto px-4 py-24 sm:py-32 text-center space-y-6">
      <div className="text-6xl sm:text-7xl font-extrabold brand-gradient-text">
        404
      </div>
      <h1 className="text-2xl sm:text-3xl font-extrabold text-[#181D28]">
        Page Not Found
      </h1>
      <p className="text-sm text-[#5B6275] max-w-md mx-auto leading-relaxed">
        The page you are looking for doesn't exist or may have been moved. Return to the homepage or connect with us directly on WhatsApp.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#324BB0] hover:bg-[#293E96] text-white font-semibold text-sm transition-colors w-full sm:w-auto"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#E2E8F0] hover:bg-slate-50 text-[#181D28] font-semibold text-sm transition-colors w-full sm:w-auto"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600" />
          <span>Contact on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
