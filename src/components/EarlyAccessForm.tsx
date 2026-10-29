import React, { useState } from "react";
import { BRAND } from "../data/config";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "../utils/whatsapp";
import { Send, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";

interface EarlyAccessFormProps {
  serviceName: string;
  onNavigatePolicy?: () => void;
}

export const EarlyAccessForm: React.FC<EarlyAccessFormProps> = ({
  serviceName,
  onNavigatePolicy,
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "endpoint_unconfigured" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Check if endpoint is configured
    if (!BRAND.formEndpoint || BRAND.formEndpoint.trim() === "") {
      // Static site without backend endpoint configured
      setStatus("endpoint_unconfigured");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(BRAND.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          service: serviceName,
          email,
          name: name || undefined,
          interest: interest || undefined,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage("Unable to submit registration. Please contact us via WhatsApp.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please contact us via WhatsApp instead.");
    }
  };

  const whatsappInquiryUrl = buildWhatsAppUrl(
    WHATSAPP_MESSAGES.comingSoon(serviceName)
  );

  return (
    <div className="w-full max-w-xl mx-auto bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#181D28]">
          Register for Early Access
        </h3>
        <p className="text-sm text-[#5B6275] mt-1">
          Be notified as soon as {serviceName} is ready for client onboarding.
        </p>
      </div>

      {status === "success" ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
          <h4 className="font-semibold text-emerald-900 text-base">
            Registration Confirmed
          </h4>
          <p className="text-sm text-emerald-700 mt-1">
            Thank you for your interest! We will notify you at{" "}
            <span className="font-medium text-emerald-900">{email}</span> as soon as this service is open.
          </p>
          <button
            onClick={() => {
              setStatus("idle");
              setEmail("");
              setName("");
              setInterest("");
            }}
            className="mt-4 text-xs font-semibold text-emerald-800 underline hover:text-emerald-950"
          >
            Register another contact
          </button>
        </div>
      ) : status === "endpoint_unconfigured" ? (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#324BB0] shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold text-[#181D28]">
                Direct Registration Channel Available
              </p>
              <p className="text-[#5B6275] mt-1 leading-relaxed">
                Automated email registration for this upcoming service is currently being connected. In the meantime, you can express interest directly with our team via WhatsApp to secure priority early notification.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium text-sm brand-gradient hover:opacity-95 transition-opacity"
                >
                  <MessageSquare className="w-4 h-4" />
                  Express Interest on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="px-4 py-2 text-xs font-medium text-[#5B6275] hover:text-[#181D28] underline"
                >
                  Back to form
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div>
            <label
              htmlFor="email-input"
              className="block text-xs font-semibold text-[#181D28] mb-1 uppercase tracking-wider"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email-input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full px-4 py-2.5 text-sm bg-white border border-[#E2E8F0] rounded-lg text-[#181D28] placeholder-[#5B6275]/60 focus:outline-none focus:ring-2 focus:ring-[#324BB0]/40 focus:border-[#324BB0]"
            />
          </div>

          <div>
            <label
              htmlFor="name-input"
              className="block text-xs font-semibold text-[#181D28] mb-1 uppercase tracking-wider"
            >
              Your Name <span className="text-[#5B6275] font-normal lowercase">(optional)</span>
            </label>
            <input
              id="name-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              className="w-full px-4 py-2.5 text-sm bg-white border border-[#E2E8F0] rounded-lg text-[#181D28] placeholder-[#5B6275]/60 focus:outline-none focus:ring-2 focus:ring-[#324BB0]/40 focus:border-[#324BB0]"
            />
          </div>

          <div>
            <label
              htmlFor="interest-input"
              className="block text-xs font-semibold text-[#181D28] mb-1 uppercase tracking-wider"
            >
              Specific Use Case or Need <span className="text-[#5B6275] font-normal lowercase">(optional)</span>
            </label>
            <input
              id="interest-input"
              type="text"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              placeholder="e.g., Customer inquiry routing, eCommerce pipeline..."
              className="w-full px-4 py-2.5 text-sm bg-white border border-[#E2E8F0] rounded-lg text-[#181D28] placeholder-[#5B6275]/60 focus:outline-none focus:ring-2 focus:ring-[#324BB0]/40 focus:border-[#324BB0]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm brand-gradient hover:opacity-95 transition-opacity disabled:opacity-60"
            >
              {status === "submitting" ? (
                "Submitting Registration..."
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Join Early Access List
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-[#5B6275] pt-1 leading-relaxed">
            By submitting, you agree to receive email updates regarding {serviceName}. We respect your privacy and will never sell or share your data. Read our{" "}
            <button
              type="button"
              onClick={onNavigatePolicy}
              className="text-[#324BB0] underline hover:text-[#7E33B8] font-medium"
            >
              Privacy Policy
            </button>
            .
          </p>
        </form>
      )}
    </div>
  );
};
