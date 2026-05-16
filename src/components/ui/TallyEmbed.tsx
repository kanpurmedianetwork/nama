"use client";

import { useEffect } from "react";
import Script from "next/script";

export function TallyPopup() {
  return (
    <Script
      src="https://tally.so/widgets/embed.js"
      strategy="lazyOnload"
    />
  );
}

export function TallyPopupButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      data-tally-open="rjJPER"
      data-tally-emoji-text="👋"
      data-tally-emoji-animation="wave"
      className={className}
    >
      {children}
    </button>
  );
}
