import React from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight, Star, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { SPESHWAY_INTERNAL_LINK_PAGES, type SpeshwayInternalLinkPage } from "@/lib/seo-utils";

type InternalLinkLayout = "cards" | "list" | "chips";
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
          <Link
            to={page.url}
            title={anchorText}
            className="text-indigo-400 font-bold hover:underline underline-offset-4 transition-colors hover:text-indigo-300"
          >
            {anchorText}
          </Link>
        </li>
      );
    }

    if (layout === "chips") {
      return (
        <Link
          key={`${variant}-${page.url}`}
          to={page.url}
          title={anchorText}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-xs md:text-sm text-gray-300 font-bold hover:bg-indigo-500/5 hover:border-indigo-500/30 hover:text-white transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
        >
          <span>{anchorText}</span>
        </Link>
      );
    }

    return (
      <Link
        key={`${variant}-${page.url}`}
        to={page.url}
        title={anchorText}
        className="flex items-center justify-between p-5 rounded-2xl border border-white/5 bg-gray-950/40 hover:bg-gray-950/60 hover:border-indigo-500/30 transition-all duration-300 group shadow-md"
      >
        <span className="font-semibold text-sm md:text-base text-gray-200 group-hover:text-indigo-400 transition-colors">{anchorText}</span>
        <div className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-all">
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
        </div>
      </Link>
    );
  };

  if (!nextRecommended && !topVerified && !links.length) {
    return null;
  }

  return (
    <section className={cn("space-y-8", className)} aria-label="Related searches about Speshway">
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-400/80">
          Related Searches About Speshway
        </p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {nextRecommended && (
          <Link
            to={nextRecommended.url}
            title={pickAnchor(nextRecommended, path)}
            className="group block relative rounded-[2rem] border border-indigo-500/20 bg-indigo-950/10 hover:bg-indigo-950/20 p-6 md:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-indigo-500/40 shadow-lg overflow-hidden"
          >
            {/* Glowing accent orb */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-all pointer-events-none" />
            <div className="flex flex-col h-full justify-between gap-6 relative z-10">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em] bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
                  <Compass className="w-3.5 h-3.5" />
                  Next Recommended Page
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-100 group-hover:text-indigo-400 transition-colors leading-tight">
                  {pickAnchor(nextRecommended, path)}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-indigo-400 group-hover:text-indigo-300 font-bold text-sm shrink-0 mt-2">
                <span>Explore Page</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        )}

        {topVerified && (
          <Link
            to={topVerified.url}
            title={pickAnchor(topVerified, path)}
            className="group block relative rounded-[2rem] border border-emerald-500/20 bg-emerald-950/10 hover:bg-emerald-950/20 p-6 md:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-500/40 shadow-lg overflow-hidden"
          >
            {/* Glowing accent orb */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50/5 dark:bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all pointer-events-none" />
            <div className="flex flex-col h-full justify-between gap-6 relative z-10">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em] bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">
                  <Star className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                  Top Verified Page
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-100 group-hover:text-emerald-400 transition-colors leading-tight">
                  {pickAnchor(topVerified, path)}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 font-bold text-sm shrink-0 mt-2">
                <span>Verify Trust</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        )}
      </div>

      {links.length > 0 && (
        <div className="pt-4">
          <div
            className={cn(
              layout === "cards" && "grid grid-cols-1 md:grid-cols-2 gap-4",
              layout === "list" && "pl-4",
              layout === "chips" && "flex flex-wrap gap-3 justify-center md:justify-start"
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
        </div>
      )}
    </section>
  );
};

export default InternalLinks;
