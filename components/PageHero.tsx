import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  crumbs: Crumb[];
}

export default function PageHero({ title, crumbs }: PageHeroProps) {
  return (
    <section className="bg-[#1C1A15] pt-14 pb-16 px-6 relative overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #FAF7F2 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      {/* Decorative rings */}
      <div className="absolute right-[-80px] top-[-80px] w-[340px] h-[340px] rounded-full border border-[#FAF7F2]/[0.04] pointer-events-none" />
      <div className="absolute right-[-20px] top-[-20px] w-[220px] h-[220px] rounded-full border border-[#FAF7F2]/[0.06] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="font-cormorant text-4xl sm:text-5xl font-light text-[#FAF7F2] mb-4 leading-tight">
          {title}
        </h1>
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-sm">
          {crumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-[#8B7355]/60">·</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="text-[#9B8E7D] hover:text-[#B8966A] transition-colors duration-200">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#B8966A] font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
