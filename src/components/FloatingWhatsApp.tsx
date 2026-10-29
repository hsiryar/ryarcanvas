import React, { useState } from "react";
import { BRAND } from "../data/config";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "../utils/whatsapp";
import { MessageSquare, X } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = buildWhatsAppUrl(WHATSAPP_MESSAGES.general());

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Optional dismissible tooltip prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs px-3 py-2 rounded-xl border border-slate-200 shadow-lg animate-in fade-in slide-in-from-right-3">
          <span>Chat directly with our team on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="flex items-center justify-center w-13 h-13 rounded-full text-white shadow-xl bg-emerald-600 hover:bg-emerald-700 transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50"
        aria-label="Chat with RYAR Canvas on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
};
