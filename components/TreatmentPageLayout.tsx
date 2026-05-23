import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";

const WA_LINK = "https://wa.me/902121234567?text=Merhaba%2C%20randevu%20almak%20istiyorum.";

interface TreatmentPageProps {
  title: string;
  crumbLabel: string;
  crumbHref: string;
  overline: string;
  heading: string;
  paragraphs: string[];
  benefits: string[];
}

export default function TreatmentPageLayout({
  title,
  crumbLabel,
  crumbHref,
  overline,
  heading,
  paragraphs,
  benefits,
}: TreatmentPageProps) {
  return (
    <div className="bg-[#FAF7F2] min-h-screen font-outfit">
      <PageHero
        title={title}
        crumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Tedavilerimiz", href: crumbHref },
          { label: crumbLabel },
        ]}
      />

      {/* Main content */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#8B7355]" />
                <span className="text-[#8B7355] text-[11px] tracking-[0.22em] uppercase font-medium">{overline}</span>
              </div>

              <h2 className="font-cormorant text-4xl sm:text-5xl leading-tight mb-6">
                <span className="font-light italic text-[#1C1A15]">{heading}</span>
              </h2>

              {paragraphs.map((p, i) => (
                <p key={i} className="text-[#6B5F4E] leading-relaxed mb-4 text-[15px] last:mb-8">{p}</p>
              ))}

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#6B5F4E] text-sm">
                    <span className="text-[#8B7355] mt-0.5 shrink-0 text-base leading-none">◈</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-[#1C1A15] text-[#FAF7F2] font-medium px-7 py-4 text-sm tracking-wide hover:bg-[#2A261E] transition-colors duration-300"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Randevu Al
                </a>
                <Link
                  href="/tedaviler/implant"
                  className="inline-flex items-center gap-2 border border-[#DDD0B8] text-[#1C1A15] font-medium px-7 py-4 text-sm tracking-wide hover:border-[#8B7355] hover:text-[#8B7355] transition-all duration-300"
                >
                  Diğer Tedaviler
                </Link>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative">
              <div className="absolute inset-5 border border-[#B8966A]/20 pointer-events-none z-10" />
              <div className="aspect-[4/3] bg-gradient-to-br from-[#F2ECE0] to-[#EDE0C8] flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-[#B8966A]/50" />
                <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-[#B8966A]/50" />
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-[#B8966A]/50" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-[#B8966A]/50" />
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-3 text-[#B8966A]/40" fill="none" stroke="currentColor" strokeWidth={0.8} viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="0" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#B8966A]/60">Tedavi Görseli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
