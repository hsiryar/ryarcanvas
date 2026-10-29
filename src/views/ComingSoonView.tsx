import React from "react";
import { EarlyAccessForm } from "../components/EarlyAccessForm";
import { NavView } from "../components/Header";
import { Bot, Layers, GraduationCap, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

interface ComingSoonViewProps {
  type: "ai" | "leads" | "academy";
  onNavigate: (view: NavView) => void;
}

export const ComingSoonView: React.FC<ComingSoonViewProps> = ({
  type,
  onNavigate,
}) => {
  const configs = {
    ai: {
      badge: "In Development",
      icon: Bot,
      color: "text-[#7E33B8]",
      bg: "bg-purple-50",
      title: "AI Calling Agent",
      headline: "Smarter Conversations. More Efficient Workflows.",
      description:
        "RYAR Canvas is preparing an AI Calling Agent solution designed to explore how automated voice interactions can support business communication and customer workflows.",
      useCasesHeading: "Potential Future Exploration Areas",
      useCases: [
        "Inbound appointment verification and scheduling support",
        "After-hours client inquiry reception and structured intake",
        "Automated fulfillment order status updates for customer queries",
        "Intelligent call routing to relevant human representatives",
      ],
      disclaimer:
        "Note: Potential use cases represent explored product directions currently in engineering and are not yet released features.",
    },
    leads: {
      badge: "In Development",
      icon: Layers,
      color: "text-[#324BB0]",
      bg: "bg-blue-50",
      title: "Automated Lead Gen Pipeline",
      headline: "Build Better Lead Workflows.",
      description:
        "We're developing a future-focused lead generation solution designed to help businesses explore more organized approaches to discovering, qualifying, and managing potential customers.",
      useCasesHeading: "Potential Future Workflow Objectives",
      useCases: [
        "Structured multi-step lead qualification forms and scoring",
        "Automated notification triggers to your team via messaging channels",
        "Systematic lead tracking without bulky expensive CRM complexity",
        "Integration pipelines between advertising destinations and intake queues",
      ],
      disclaimer:
        "Note: Inclusions and integrations will be specified upon public release. No guaranteed lead volume or specific tool integrations are promised prior to launch.",
    },
    academy: {
      badge: "In Preparation",
      icon: GraduationCap,
      color: "text-[#16865C]",
      bg: "bg-emerald-50",
      title: "Ryar Canvas Academy",
      headline: "Learn Digital Skills. Build Your Future.",
      description:
        "Ryar Canvas Academy is an upcoming learning initiative focused on practical digital skills, creative work, and online business opportunities.",
      useCasesHeading: "Curriculum Areas Under Development",
      useCases: [
        "Modern responsive web development fundamentals",
        "Practical paid social campaign mechanics (Meta & TikTok)",
        "E-commerce storefront operations and catalog management",
        "Client scoping, contract transparency, and digital agency principles",
      ],
      disclaimer:
        "Note: Course schedules, syllabi, and enrollment dates will be announced to early-access list members first.",
    },
  };

  const current = configs[type];
  const Icon = current.icon;

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12">
      {/* Hero Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7E33B8]">
          <div className={`p-1.5 rounded-lg ${current.bg} ${current.color}`}>
            <Icon className="w-4 h-4" />
          </div>
          <span>{current.title} · {current.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#181D28] tracking-tight">
          {current.headline}
        </h1>

        <p className="text-base sm:text-lg text-[#5B6275] max-w-2xl mx-auto leading-relaxed">
          {current.description}
        </p>
      </section>

      {/* Exploration Cards / Use Cases */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#181D28]">
            {current.useCasesHeading}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {current.useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-[#E2E8F0] flex items-start gap-3"
              >
                <CheckCircle2 className={`w-4 h-4 ${current.color} shrink-0 mt-0.5`} />
                <span className="text-xs text-[#181D28] leading-relaxed">
                  {useCase}
                </span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-[#5B6275] pt-2 border-t border-[#E2E8F0]">
            {current.disclaimer}
          </p>
        </div>
      </section>

      {/* Early Access Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <EarlyAccessForm
          serviceName={current.title}
          onNavigatePolicy={() => onNavigate("privacy-policy")}
        />
      </section>

      {/* Other Upcoming Initiatives */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-[#E2E8F0]">
        <div className="text-center mb-6">
          <span className="text-xs font-semibold text-[#5B6275] uppercase tracking-wider">
            Explore Other Upcoming Initiatives
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {type !== "ai" && (
            <button
              onClick={() => onNavigate("coming-soon-ai")}
              className="p-4 bg-white border border-[#E2E8F0] rounded-xl hover:border-[#324BB0] text-left transition-colors flex items-center justify-between"
            >
              <div>
                <div className="text-xs font-bold text-[#181D28]">
                  AI Calling Agent
                </div>
                <div className="text-[11px] text-[#5B6275]">
                  Automated voice workflows
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#5B6275]" />
            </button>
          )}

          {type !== "leads" && (
            <button
              onClick={() => onNavigate("coming-soon-leads")}
              className="p-4 bg-white border border-[#E2E8F0] rounded-xl hover:border-[#324BB0] text-left transition-colors flex items-center justify-between"
            >
              <div>
                <div className="text-xs font-bold text-[#181D28]">
                  Automated Lead Gen Pipeline
                </div>
                <div className="text-[11px] text-[#5B6275]">
                  Discovery & qualification
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#5B6275]" />
            </button>
          )}

          {type !== "academy" && (
            <button
              onClick={() => onNavigate("coming-soon-academy")}
              className="p-4 bg-white border border-[#E2E8F0] rounded-xl hover:border-[#324BB0] text-left transition-colors flex items-center justify-between"
            >
              <div>
                <div className="text-xs font-bold text-[#181D28]">
                  Ryar Canvas Academy
                </div>
                <div className="text-[11px] text-[#5B6275]">
                  Digital skills education
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#5B6275]" />
            </button>
          )}
        </div>
      </section>
    </div>
  );
};
