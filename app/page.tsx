import Script from "next/script";
import { siteMarkup } from "./site-markup";

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: siteMarkup }} />
      <Script src="/site.js" strategy="afterInteractive" />
    </>
  );
}
