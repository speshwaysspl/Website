import { Helmet } from "react-helmet-async";

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
  keywords?: string;
  schema?: any[]; // For custom JSON-LD schemas
  faqSchema?: FAQItem[];
  breadcrumbSchema?: { name: string; item: string }[];
}

const SEO = ({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = "https://speshway.com/logo.png",
  twitterCard = "summary_large_image",
  keywords,
  schema = [],
  faqSchema = [],
  breadcrumbSchema = [],
}: SEOProps) => {
  const siteUrl = "https://speshway.com";
  const fullCanonical = canonical ? (canonical.startsWith("http") ? canonical : `${siteUrl}${canonical}`) : siteUrl;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Speshway Solutions",
    "alternateName": "Speshway",
    "url": siteUrl,
    "logo": "https://speshway.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 8143431333",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61584485021568",
      "https://www.instagram.com/speshwaysolutionsofficial/",
      "https://www.linkedin.com/company/speshway-solutions-pvt-ltd/",
      "https://x.com/SpeshwayM56509"
    ]
  };

  const jsonLdSchemas = [...schema, organizationSchema];

  if (faqSchema.length > 0) {
    jsonLdSchemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqSchema.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    });
  }

  if (breadcrumbSchema.length > 0) {
    jsonLdSchemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbSchema.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.item.startsWith("http") ? item.item : `${siteUrl}${item.item}`,
      })),
    });
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {jsonLdSchemas.map((s, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
