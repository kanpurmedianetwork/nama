"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Phone, Sparkles } from "lucide-react";
import { TRUST_SIGNAL_BUSINESSES, TRUST_SIGNAL_RESPONSE_TIME } from "@/lib/constants";
import { trackFormSubmit } from "@/lib/tracking";

export function LeadForm() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [mainGoal, setMainGoal] = useState("");
  const [monthlyBudget, setMonthlyBudget] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim() || !businessType || !mainGoal) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields (Name, WhatsApp, Business Type, Main Goal).");
      return;
    }

    // Basic WhatsApp validation (digits and optional plus/hyphens, minimum 10 digits)
    const digits = whatsapp.replace(/\D/g, "");
    if (digits.length < 10) {
      setStatus("error");
      setErrorMessage("Please enter a valid 10-digit WhatsApp number.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const pagePath = typeof window !== "undefined" ? window.location.pathname : "/";

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          name, 
          whatsapp, 
          businessType, 
          mainGoal, 
          monthlyBudget,
          pagePath 
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Push GTM and GA4 event
        trackFormSubmit(businessType, mainGoal, monthlyBudget);

        setStatus("success");
        setName("");
        setWhatsapp("");
        setBusinessType("");
        setMainGoal("");
        setMonthlyBudget("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm text-left">
      <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-wider mb-2">
        <Sparkles size={14} />
        <span>Actionable Growth Plan</span>
      </div>
      <h3 className="font-display text-2xl font-bold text-foreground mb-2">
        Get a Free 5-Point Lead Audit
      </h3>
      <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
        Enter your details below. Our strategy team will analyze your ad funnel, website conversion flow, and search rankings, and share a 5-point action plan.
      </p>

      {status === "success" ? (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl flex flex-col items-center text-center">
          <CheckCircle2 size={36} className="text-emerald-600 mb-3" />
          <p className="font-bold text-base mb-1">Audit Request Received!</p>
          <p className="text-xs text-emerald-700 leading-relaxed">
            Thank you! Our strategist will analyze your digital footprint and reach out via WhatsApp or phone within 4 hours.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-xs font-bold text-emerald-800 underline hover:opacity-75 cursor-pointer"
          >
            Submit another query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="lead-name" className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="lead-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Akash Kumar"
              disabled={status === "loading"}
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white focus:outline-none focus:border-foreground text-sm disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="lead-whatsapp" className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
              WhatsApp Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm font-medium">
                +91
              </span>
              <input
                id="lead-whatsapp"
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="9161881100"
                disabled={status === "loading"}
                className="w-full pl-14 pr-4 py-3 rounded-lg border border-neutral-300 bg-white focus:outline-none focus:border-foreground text-sm disabled:opacity-50"
              />
            </div>
          </div>

          {/* Business Type Select */}
          <div>
            <label htmlFor="lead-business-type" className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
              Business Type <span className="text-red-500">*</span>
            </label>
            <select
              id="lead-business-type"
              required
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              disabled={status === "loading"}
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white focus:outline-none focus:border-foreground text-sm disabled:opacity-50"
            >
              <option value="">Select your business type</option>
              <option value="Clinics & Healthcare">Clinics &amp; Healthcare</option>
              <option value="D2C & Retail Brand">D2C &amp; Retail Brand</option>
              <option value="Coaching & Education">Coaching &amp; Education</option>
              <option value="B2B & Manufacturing">B2B &amp; Manufacturing</option>
              <option value="Salons & Wellness">Salons &amp; Wellness</option>
              <option value="Real Estate & Construction">Real Estate &amp; Construction</option>
              <option value="Restaurants & Food">Restaurants &amp; Food</option>
              <option value="Home & Local Services">Home &amp; Local Services</option>
              <option value="Creators & Media">Creators &amp; Media</option>
              <option value="Other MSME / Startup">Other MSME / Startup</option>
            </select>
          </div>

          {/* Main Goal Select */}
          <div>
            <label htmlFor="lead-main-goal" className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
              Main Goal <span className="text-red-500">*</span>
            </label>
            <select
              id="lead-main-goal"
              required
              value={mainGoal}
              onChange={(e) => setMainGoal(e.target.value)}
              disabled={status === "loading"}
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white focus:outline-none focus:border-foreground text-sm disabled:opacity-50"
            >
              <option value="">Select your primary goal</option>
              <option value="more leads">Get More Qualified Leads</option>
              <option value="sell online">Sell Online (Shopify / E-commerce)</option>
              <option value="launch">Launch a Brand or New Product</option>
              <option value="get found on Google">Get Found on Google &amp; Maps (3-Pack)</option>
            </select>
          </div>

          {/* Monthly Budget Select (Optional) */}
          <div>
            <label htmlFor="lead-budget" className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
              Monthly Budget (Optional)
            </label>
            <select
              id="lead-budget"
              value={monthlyBudget}
              onChange={(e) => setMonthlyBudget(e.target.value)}
              disabled={status === "loading"}
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white focus:outline-none focus:border-foreground text-sm disabled:opacity-50"
            >
              <option value="">Select budget range (flexible)</option>
              <option value="Under ₹10,000/mo">Under ₹10,000/month</option>
              <option value="₹10,000 - ₹25,000/mo">₹10,000 - ₹25,000/month</option>
              <option value="₹25,000 - ₹50,000/mo">₹25,000 - ₹50,000/month</option>
              <option value="₹50,000+/mo">₹50,000+/month</option>
            </select>
          </div>

          {status === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-800 p-3.5 rounded-lg flex items-start gap-2.5 text-xs">
              <AlertCircle size={16} className="text-red-600 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-foreground text-white py-3.5 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors disabled:opacity-50 shadow-md cursor-pointer text-sm"
          >
            <Send size={16} />
            {status === "loading" ? "Submitting..." : "Get a Free 5-Point Lead Audit"}
          </button>
        </form>
      )}

      {/* Trust Signals Strip */}
      <div className="mt-6 pt-5 border-t border-neutral-200 flex justify-between text-[11px] text-neutral-500 font-mono">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={12} className="text-emerald-600" /> {TRUST_SIGNAL_BUSINESSES}
        </span>
        <span className="flex items-center gap-1.5">
          <Phone size={12} className="text-emerald-600" /> {TRUST_SIGNAL_RESPONSE_TIME}
        </span>
      </div>
    </div>
  );
}
