"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Phone } from "lucide-react";
import { TRUST_SIGNAL_BUSINESSES, TRUST_SIGNAL_RESPONSE_TIME } from "@/lib/constants";

export function LeadForm() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all fields.");
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

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, whatsapp }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setName("");
        setWhatsapp("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl border border-border shadow-sm text-left">
      <h3 className="font-display text-2xl font-bold text-foreground mb-2">
        Get a Free Marketing Audit
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Enter your details below. We will analyze your search rankings, website, and ads, and call you back.
      </p>

      {status === "success" ? (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl flex flex-col items-center text-center">
          <CheckCircle2 size={36} className="text-emerald-600 mb-3" />
          <p className="font-bold mb-1">Audit Claimed Successfully!</p>
          <p className="text-xs text-emerald-700">
            Thank you! Our strategist will analyze your digital footprint and reach out to you within 4 hours.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-xs font-bold text-emerald-800 underline hover:opacity-75"
          >
            Submit another query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="lead-name" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
              Full Name
            </label>
            <input
              id="lead-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Akash Kumar"
              disabled={status === "loading"}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-brand text-sm disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="lead-whatsapp" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
              WhatsApp Number
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-medium">
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
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-brand text-sm disabled:opacity-50"
              />
            </div>
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
            className="w-full bg-brand text-white py-3.5 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-brand-dark transition-colors disabled:opacity-50 shadow-md"
          >
            <Send size={16} />
            {status === "loading" ? "Submitting..." : "Submit Audit Request"}
          </button>
        </form>
      )}

      {/* Trust Signals Strip */}
      <div className="mt-6 pt-5 border-t border-border flex justify-between text-[11px] text-muted-foreground font-mono">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={12} className="text-brand" /> {TRUST_SIGNAL_BUSINESSES}
        </span>
        <span className="flex items-center gap-1.5">
          <Phone size={12} className="text-brand" /> {TRUST_SIGNAL_RESPONSE_TIME}
        </span>
      </div>
    </div>
  );
}
