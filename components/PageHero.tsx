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
    <section className="pt-14 pb-20 px-6 relative overflow-hidden" style={{ background: "#0F1E35" }}>
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(184,146,42,0.07) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* Ambient gold glow */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(184,146,42,0.07) 0%, transparent 65%)" }} />
      <div className="absolute left-0 bottom-0 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(184,146,42,0.05) 0%, transparent 65%)" }} />

      {/* Thin gold line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(184,146,42,0.3), transparent)" }} />

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Overline */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-10" style={{ background: "rgba(201,168,76,0.4)" }} />
          <span className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{ color: "#C9A84C" }}>
            Diş Kliniği
          </span>
          <div className="h-px w-10" style={{ background: "rgba(201,168,76,0.4)" }} />
        </div>

        <h1 className="font-cormorant text-5xl sm:text-6xl font-light leading-tight mb-6"
          style={{ color: "#F0EBE0" }}>
          {title}
        </h1>

        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-sm">
          {crumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span style={{ color: "rgba(201,168,76,0.3)" }}>·</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="crumb-link">
                  {crumb.label}
                </Link>
              ) : (
                <span style={{ color: "#C9A84C" }} className="font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
