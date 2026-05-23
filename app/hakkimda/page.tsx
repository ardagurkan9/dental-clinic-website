import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ReviewsSection from "@/components/ReviewsSection";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Hakkımızda | Diş Kliniği",
  description: "Uzman kadromuz ve modern teknolojimizle sağlıklı gülüşler için güvenilir hizmet.",
};

const advantages = [
  "Modern Teknoloji",
  "Uzman Kadro",
  "Hijyenik Ortam",
  "Hasta Memnuniyeti",
];

export default function HakkimizdaPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen font-outfit">
      <PageHero
        title="Hakkımızda"
        crumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "Hakkımızda" }]}
      />

      {/* Main */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#8B7355]" />
                <span className="text-[#8B7355] text-[11px] tracking-[0.22em] uppercase font-medium">Hakkımızda</span>
              </div>

              <h2 className="font-cormorant text-4xl sm:text-5xl leading-tight mb-6">
                <span className="font-light italic text-[#1C1A15]">Sağlıklı Gülüşler İçin </span>
                <span className="font-bold text-[#1C1A15]">Güvenilir Hizmet</span>
              </h2>

              <p className="text-[#6B5F4E] leading-relaxed mb-4 text-[15px]">
                Kliniğimiz, diş sağlığı alanında yılların getirdiği deneyim ve sürekli güncellenen teknolojik altyapısıyla hastalarına en yüksek standartlarda hizmet sunmaktadır. Her tedavi sürecini bireysel ihtiyaçlar doğrultusunda özenle planlıyoruz.
              </p>
              <p className="text-[#6B5F4E] leading-relaxed mb-8 text-[15px]">
                Uzman ekibimiz; tanıdan tedaviye kadar her aşamada hasta konforunu ön planda tutarak, güvenilir ve şeffaf bir yaklaşımla yanınızda olmayı ilke edinmiştir.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {advantages.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#6B5F4E] text-sm">
                    <span className="text-[#8B7355] shrink-0 text-base leading-none">◈</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/902121234567?text=Merhaba%2C%20randevu%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-[#1C1A15] text-[#FAF7F2] font-medium px-7 py-4 text-sm tracking-wide hover:bg-[#2A261E] transition-colors duration-300"
                >
                  Randevu Al
                </a>
                <a
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border border-[#DDD0B8] text-[#1C1A15] font-medium px-7 py-4 text-sm tracking-wide hover:border-[#8B7355] hover:text-[#8B7355] transition-all duration-300"
                >
                  İletişim
                </a>
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
                  <svg className="w-14 h-14 mx-auto mb-3 text-[#B8966A]/40" fill="none" stroke="currentColor" strokeWidth={0.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#B8966A]/60">Doktor / Klinik Görseli</p>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#1C1A15] px-7 py-5 shadow-2xl z-20">
                <p className="font-cormorant text-5xl font-bold text-[#B8966A] leading-none">15+</p>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#FAF7F2]/50 mt-1.5">Yıl Deneyim</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#1C1A15]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#2A261E]">
            {[
              { value: "15+", label: "Yıl Deneyim" },
              { value: "5.000+", label: "Mutlu Hasta" },
              { value: "%98", label: "Memnuniyet" },
              { value: "JCI", label: "Akreditasyonu" },
            ].map(({ value, label }) => (
              <div key={label} className="py-8 px-6 text-center">
                <p className="font-cormorant text-4xl sm:text-5xl font-bold text-[#B8966A]">{value}</p>
                <p className="text-[#9B8E7D] text-[11px] tracking-[0.18em] uppercase mt-2 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />
      <SiteFooter />
    </div>
  );
}
