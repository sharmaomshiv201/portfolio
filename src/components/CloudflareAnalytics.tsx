import Script from "next/script";
import { site } from "@/content/site";

/** Cloudflare Web Analytics — privacy-friendly, no cookies. Renders
 *  nothing until `site.cloudflareToken` is set. */
export function CloudflareAnalytics() {
  if (!site.cloudflareToken) return null;

  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      strategy="afterInteractive"
      data-cf-beacon={JSON.stringify({ token: site.cloudflareToken })}
    />
  );
}
