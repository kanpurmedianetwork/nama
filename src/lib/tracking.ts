/**
 * GTM and GA4 Event Tracking Utility
 * Pushes events to dataLayer and window.gtag without breaking existing setups.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, any>[];
    gtag?: (...args: any[]) => void;
  }
}

export function pushDataLayerEvent(event: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...params,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}

export function trackWhatsAppClick(customParams: Record<string, any> = {}) {
  const pagePath = typeof window !== "undefined" ? window.location.pathname : "";
  const pageTitle = typeof document !== "undefined" ? document.title : "";

  pushDataLayerEvent("whatsapp_click", {
    page_path: pagePath,
    page_title: pageTitle,
    ...customParams,
  });
}

export function trackPhoneClick(phoneNumber = "+91-9161881100") {
  const pagePath = typeof window !== "undefined" ? window.location.pathname : "";

  pushDataLayerEvent("phone_click", {
    page_path: pagePath,
    phone_number: phoneNumber,
  });
}

export function trackFormSubmit(businessType: string, mainGoal: string, monthlyBudget?: string) {
  const pagePath = typeof window !== "undefined" ? window.location.pathname : "";

  pushDataLayerEvent("form_submit", {
    page_path: pagePath,
    business_type: businessType,
    main_goal: mainGoal,
    monthly_budget: monthlyBudget || "not_specified",
  });
}

/**
 * Builds prefilled WhatsApp URL with page context & UTM parameters
 * e.g. "Hi, I'm interested in [page title] (Page: /solutions/ads-not-generating-leads | utm_source=google)"
 */
export function getPrefilledWhatsAppUrl(customGreeting?: string): string {
  if (typeof window === "undefined") {
    return "https://wa.me/919161881100";
  }

  const path = window.location.pathname;
  const title = document.title.split("|")[0].trim() || "Lead Generation Marketing";
  const searchParams = new URLSearchParams(window.location.search);
  
  const utmParts: string[] = [];
  ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((key) => {
    const val = searchParams.get(key);
    if (val) utmParts.push(`${key}=${val}`);
  });

  const utmString = utmParts.length > 0 ? ` [Ref: ${utmParts.join(", ")}]` : "";
  const greeting = customGreeting || `Hi Nexudyam, I'm interested in ${title} (Page: ${path}${utmString}). I'd like to get a free 5-point lead audit.`;

  return `https://wa.me/919161881100?text=${encodeURIComponent(greeting)}`;
}
