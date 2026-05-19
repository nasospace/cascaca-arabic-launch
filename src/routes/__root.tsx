import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { LanguageProvider } from "@/lib/i18n";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CASCATA | Waterproofing & Structural Protection Services in UAE" },
      {
        name: "description",
        content:
          "CASCATA provides certified waterproofing, thermal insulation, concrete repair, injection, flooring, tank lining, and structural protection systems across the UAE.",
      },
      { property: "og:title", content: "CASCATA | Structural Protection & Waterproofing UAE" },
      {
        property: "og:description",
        content:
          "Certified waterproofing, insulation, concrete repair, and long-term protection systems for residential, commercial, and industrial projects across the UAE.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "CASCATA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#637eb5" },
      { name: "keywords", content: "Waterproofing UAE, Structural protection UAE, Roof waterproofing, Thermal insulation UAE, Concrete repair, Concrete injection, Tank lining UAE, Epoxy flooring UAE, عزل مائي, عزل حراري, ترميم الخرسانة" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800;900&family=Tajawal:wght@400;500;700;800;900&display=swap",
      },
      { rel: "alternate", hrefLang: "en", href: "/" },
      { rel: "alternate", hrefLang: "ar", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "CASCATA",
          alternateName: "CASCATA Waterproofing",
          description:
            "Certified waterproofing, thermal insulation, concrete repair, and structural protection services across the UAE.",
          url: "/",
          logo: "/logo-cascata.png",
          image: "/logo-cascata.png",
          telephone: "+971555309240",
          email: "Operation@cascata.ae",
          address: {
            "@type": "PostalAddress",
            streetAddress: "OFC-M01, Mezzanine Floor, Bldg No. C203, Shabiya 12, MBZ City",
            postalCode: "137547",
            addressLocality: "Abu Dhabi",
            addressCountry: "AE",
          },
          areaServed: { "@type": "Country", name: "United Arab Emirates" },
          slogan: "Protection Builds Trust",
          sameAs: [],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-black text-foreground font-display">404</h1>
        <p className="mt-4 text-muted-foreground">Page not found</p>
        <a href="/" className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-white">Home</a>
      </div>
    </div>
  ),
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}
