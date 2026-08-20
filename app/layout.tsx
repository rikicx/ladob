import type { Metadata } from "next";
import { DM_Mono, Inter_Tight, Manrope } from "next/font/google";
import "./globals.css";

const bodyFont = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const monoFont = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lado B CK — Estúdio de Beleza | Jardim Vila Mariana, São Paulo",
  description:
    "Lado B CK é um estúdio de beleza em São Paulo onde coloração, cortes, unhas, cílios e dia da noiva são tratados como direção de arte.",
  openGraph: {
    title: "Lado B CK — Estúdio de Beleza",
    description: "Existe um lado seu que ainda não foi revelado.",
    type: "website",
    locale: "pt_BR",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Lado B CK I Salão de Beleza",
  alternateName: ["Lado B CK Estúdio", "Lado B Estudio"],
  description:
    "Estúdio de beleza em São Paulo: coloração, cortes, escovas, mega hair, unhas, cílios, sobrancelhas, maquiagem e dia da noiva.",
  url: "https://ladobck.com.br/",
  image: "https://ladobck.com.br/images/hero-cobre.jpg",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Pedro Pomponazzi, 71",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "04115-000",
    addressCountry: "BR",
  },
  areaServed: "São Paulo",
  sameAs: ["https://www.instagram.com/ladobck/"],
  telephone: "+55 11 96854-2734",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "317",
    bestRating: "5",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
