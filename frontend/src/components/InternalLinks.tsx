import React from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

type InternalLinkLayout = "cards" | "list" | "chips";

interface SpeshwayInternalLinkPage {
  url: string;
  name: string;
  slug: string;
  anchors: string[];
  isTopVerified?: boolean;
}

const SPESHWAY_INTERNAL_LINK_PAGES: SpeshwayInternalLinkPage[] = [
  {
    url: "/is-speshway-real-or-fake",
    name: "Is Speshway Real or Fake?",
    slug: "is-speshway-real-or-fake",
    anchors: [
      "Is Speshway Solutions real or fake? Full 2026 check",
      "Verify whether Speshway is a genuine or fake company",
      "Read the truth on whether Speshway is real or a scam"
    ],
    isTopVerified: true
  },
  {
    url: "/speshway-solutions-review-2026",
    name: "Speshway Review 2026",
    slug: "speshway-solutions-review-2026",
    anchors: [
      "Read the latest 2026 Speshway Solutions reviews",
      "Deep-dive 2026 review of Speshway Solutions Pvt Ltd",
      "See detailed Speshway Solutions performance review"
    ]
  },
  {
    url: "/speshway-job-scam-truth",
    name: "Speshway Job Scam Truth",
    slug: "speshway-job-scam-truth",
    anchors: [
      "Understand the real truth about Speshway job scams",
      "Learn how to avoid fake Speshway job scam offers",
      "Complete guide to Speshway job scam warnings"
    ]
  },
  {
    url: "/is-speshway-legit-company",
    name: "Is Speshway Legit Company?",
    slug: "is-speshway-legit-company",
    anchors: [
      "Check if Speshway is a legit registered company",
      "Is Speshway a legitimate IT company in Hyderabad?",
      "Explore legal verification for Speshway Solutions"
    ]
  },
  {
    url: "/speshway-hyderabad-company-review",
    name: "Speshway Hyderabad Company Review",
    slug: "speshway-hyderabad-company-review",
    anchors: [
      "Read detailed Hyderabad company review of Speshway",
      "Check authentic reviews of Speshway in Hyderabad",
      "Explore Hyderabad-focused review of Speshway Solutions"
    ]
  },
  {
    url: "/speshway-career-review",
    name: "Speshway Career Review",
    slug: "speshway-career-review",
    anchors: [
      "See Speshway career and job growth reviews",
      "Read employee-backed Speshway career review",
      "Check how it is to build a career at Speshway"
    ]
  },
  {
    url: "/speshway-solutions-trust-score",
    name: "Speshway Trust Score",
    slug: "speshway-solutions-trust-score",
    anchors: [
      "Check the verified Speshway Solutions trust score",
      "See how Speshway scores on trust and reliability",
      "View 2026 trust score for Speshway Solutions"
    ]
  },
  {
    url: "/speshway-client-testimonials",
    name: "Speshway Client Testimonials",
    slug: "speshway-client-testimonials",
    anchors: [
      "Read genuine Speshway client testimonials",
      "See what Speshway clients say about their projects",
      "Explore verified Speshway Solutions client stories"
    ]
  },
  {
    url: "/speshway-employee-feedback",
    name: "Speshway Employee Feedback",
    slug: "speshway-employee-feedback",
    anchors: [
      "Check honest Speshway employee feedback",
      "Read transparent reviews from Speshway employees",
      "See culture and work-life feedback from Speshway staff"
    ]
  },
  {
    url: "/speshway-company-verification",
    name: "Speshway Company Verification",
    slug: "speshway-company-verification",
    anchors: [
      "Verify Speshway company details and registration",
      "Run a quick background check on Speshway Solutions",
      "Use this page for official Speshway company verification"
    ]
  },
  {
    url: "/top-10-ways-to-identify-fake-job-offers-india",
    name: "Identify Fake Job Offers India",
    slug: "top-10-ways-to-identify-fake-job-offers-india",
    anchors: [
      "Top 10 ways to identify fake job offers in India",
      "How to spot fraudulent job recruiters in India",
      "Essential guide to avoiding job scams in India 2026"
    ]
  },
  {
    url: "/speshway-solutions-vs-fake-recruiters-full-guide",
    name: "Speshway vs Fake Recruiters",
    slug: "speshway-solutions-vs-fake-recruiters-full-guide",
    anchors: [
      "Speshway Solutions vs Fake Recruiters – Full Guide",
      "How to tell the difference between Speshway and scammers",
      "Verify if your recruiter is actually from Speshway"
    ]
  },
  {
    url: "/why-people-search-speshway-scam-explained",
    name: "Why Search Speshway Scam?",
    slug: "why-people-search-speshway-scam-explained",
    anchors: [
      "Why people search ‘Speshway scam’ (Explained)",
      "Understanding the truth behind Speshway scam searches",
      "Is Speshway a scam? We explain the search results"
    ]
  },
  {
    url: "/how-scammers-misuse-company-names",
    name: "Scammers Misusing Names",
    slug: "how-scammers-misuse-company-names",
    anchors: [
      "How scammers misuse company names like Speshway",
      "Learn how fraudsters impersonate real IT companies",
      "Protect yourself from company impersonation scams"
    ]
  }
];

interface InternalLinksProps {
  currentPath?: string;
  title?: string;
  layout?: InternalLinkLayout;
  limit?: number;
  showNextRecommended?: boolean;
  showTopVerified?: boolean;
  className?: string;
}

const hashString = (value: string) => {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

const createPrng = (seed: number) => {
  let t = seed >>> 0;
  return () => {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
};

const pickAnchor = (page: SpeshwayInternalLinkPage, seedKey: string) => {
  const options = page.anchors.length ? page.anchors : [page.name];
  const index = hashString(`${seedKey}:${page.url}`) % options.length;
  return options[index];
};

const InternalLinks: React.FC<InternalLinksProps> = ({
  currentPath,
  title = "People also search for",
  layout = "cards",
  limit = 6,
  showNextRecommended = true,
  showTopVerified = true,
  className
}) => {
  const location = useLocation();
  const path = currentPath ?? location.pathname;

  const { nextRecommended, topVerified, links } = React.useMemo(() => {
    const filtered = SPESHWAY_INTERNAL_LINK_PAGES.filter((page) => page.url !== path);

    if (!filtered.length) {
      return {
        nextRecommended: undefined,
        topVerified: undefined,
        links: [] as SpeshwayInternalLinkPage[]
      };
    }

    const shuffled = [...filtered];
    const prng = createPrng(hashString(path));
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(prng() * (i + 1));
      const temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }

    const next = showNextRecommended ? shuffled[0] : undefined;
    const remainingAfterNext = next ? shuffled.slice(1) : shuffled;

    const top = showTopVerified
      ? remainingAfterNext.find((page) => page.isTopVerified)
      : undefined;

    const excluded = new Set<string>();
    if (next) excluded.add(next.url);
    if (top) excluded.add(top.url);

    const remaining = shuffled.filter((page) => !excluded.has(page.url));

    const maxLinks = Math.min(limit, remaining.length);
    const links = remaining.slice(0, maxLinks);

    return {
      nextRecommended: next,
      topVerified: top,
      links
    };
  }, [path, limit, showNextRecommended, showTopVerified]);

  const renderLink = (page: SpeshwayInternalLinkPage, variant?: "next" | "top") => {
    const anchorText = pickAnchor(page, path);

    if (layout === "list") {
      return (
        <li key={`${variant}-${page.url}`} className="leading-relaxed">
          <a
            href={page.url}
            title={anchorText}
            className="text-primary font-semibold hover:underline underline-offset-4"
          >
            {anchorText}
          </a>
        </li>
      );
    }

    if (layout === "chips") {
      return (
        <a
          key={`${variant}-${page.url}`}
          href={page.url}
          title={anchorText}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-background text-xs md:text-sm hover:bg-primary/5 hover:border-primary transition-colors"
        >
          <span>{anchorText}</span>
        </a>
      );
    }

    return (
      <a
        key={`${variant}-${page.url}`}
        href={page.url}
        title={anchorText}
        className="flex items-center justify-between p-4 rounded-xl border bg-card hover:bg-accent hover:border-primary transition-all group"
      >
        <span className="font-medium text-sm md:text-base">{anchorText}</span>
        <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    );
  };

  if (!nextRecommended && !topVerified && !links.length) {
    return null;
  }

  return (
    <section className={cn("space-y-5", className)} aria-label="Related searches about Speshway">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Related Searches About Speshway
        </p>
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
      </div>

      <div className="space-y-4">
        {nextRecommended && (
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4 md:p-5 flex flex-col gap-2">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] bg-primary text-primary-foreground">
                  Next Recommended Page
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-primary hidden sm:block" />
            </div>
            <div className="mt-1">
              {renderLink(nextRecommended, "next")}
            </div>
          </div>
        )}

        {topVerified && (
          <div className="rounded-2xl border border-emerald-300 bg-emerald-50/60 dark:bg-emerald-950/40 p-4 md:p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
                Top Verified Page
              </span>
            </div>
            <div className="mt-1">
              {renderLink(topVerified, "top")}
            </div>
          </div>
        )}

        {links.length > 0 && (
          <div
            className={cn(
              layout === "cards" && "grid grid-cols-1 md:grid-cols-2 gap-3",
              layout === "list" && "pl-4",
              layout === "chips" && "flex flex-wrap gap-2"
            )}
          >
            {layout === "list" ? (
              <ul className="space-y-2">
                {links.map((page) => renderLink(page))}
              </ul>
            ) : (
              links.map((page) => renderLink(page))
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export const buildSpeshwaySiteNavigationSchema = (siteUrl: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: SPESHWAY_INTERNAL_LINK_PAGES.map((page) => page.name),
    url: SPESHWAY_INTERNAL_LINK_PAGES.map((page) => `${siteUrl}${page.url}`)
  };
};

export default InternalLinks;
