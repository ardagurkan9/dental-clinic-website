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
    <div className="min-h-screen font-outfit" style={{ background: "#FAF8F5" }}>
      <PageHero
        title="Hakkımızda"
        crumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "Hakkımızda" }]}
      />

      {/* Main */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8" style={{ background: "#B8922A" }} />
                <span className="text-[10px] tracking-[0.28em] uppercase font-medium" style={{ color: "#B8922A" }}>Hakkımızda</span>
              </div>

              <h2 className="font-cormorant text-4xl sm:text-5xl leading-tight mb-8">
                <span className="font-light italic" style={{ color: "#0F1E35" }}>Sağlıklı Gülüşler İçin </span>
                <span className="font-bold italic" style={{ color: "#B8922A" }}>Güvenilir Hizmet</span>
              </h2>

              <p className="leading-relaxed mb-4 text-[15px]" style={{ color: "#8A7E70" }}>
                Kliniğimiz, diş sağlığı alanında yılların getirdiği deneyim ve sürekli güncellenen teknolojik altyapısıyla hastalarına en yüksek standartlarda hizmet sunmaktadır. Her tedavi sürecini bireysel ihtiyaçlar doğrultusunda özenle planlıyoruz.
              </p>
              <p className="leading-relaxed mb-10 text-[15px]" style={{ color: "#8A7E70" }}>
                Uzman ekibimiz; tanıdan tedaviye kadar her aşamada hasta konforunu ön planda tutarak, güvenilir ve şeffaf bir yaklaşımla yanınızda olmayı ilke edinmiştir.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-12">
                {advantages.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "#8A7E70" }}>
                    <span className="shrink-0 text-base leading-none" style={{ color: "#B8922A" }}>◈</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/902121234567?text=Merhaba%2C%20randevu%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-semibold px-8 py-4 text-sm tracking-wide text-white btn-navy"
                >
                  Randevu Al
                </a>
                <a
                  href="/iletisim"
                  className="inline-flex items-center gap-2 font-medium px-8 py-4 text-sm tracking-wide btn-outline-gold"
                >
                  İletişim
                </a>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative">
              <div className="absolute inset-6 pointer-events-none z-10"
                style={{ border: "1px solid rgba(184,146,42,0.2)" }} />
              <div className="aspect-[4/3] flex items-center justify-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #F5F0EA 0%, #EDE5D8 100%)" }}>
                <div className="absolute top-0 left-0 w-12 h-12 border-t border-l" style={{ borderColor: "rgba(184,146,42,0.45)" }} />
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r" style={{ borderColor: "rgba(184,146,42,0.45)" }} />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l" style={{ borderColor: "rgba(184,146,42,0.45)" }} />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r" style={{ borderColor: "rgba(184,146,42,0.45)" }} />
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={0.8} viewBox="0 0 24 24"
                    style={{ color: "rgba(184,146,42,0.35)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <p className="text-[11px] tracking-[0.22em] uppercase" style={{ color: "rgba(184,146,42,0.5)" }}>Doktor / Klinik Görseli</p>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 px-8 py-5 z-20 text-white"
                style={{ background: "#0F1E35", boxShadow: "0 12px 40px rgba(15,30,53,0.2)" }}>
                <p className="font-cormorant text-5xl font-bold leading-none">
                  15<span style={{ color: "#C9A84C" }}>+</span>
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase opacity-55 mt-1.5">Yıl Deneyim</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ background: "#0F1E35" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderBottom: "1px solid rgba(184,146,42,0.08)" }}>
            {[
              { value: "15+", label: "Yıl Deneyim" },
              { value: "5.000+", label: "Mutlu Hasta" },
              { value: "%98", label: "Memnuniyet" },
              { value: "JCI", label: "Akreditasyonu" },
            ].map(({ value, label }, i) => (
              <div key={label} className="py-10 px-6 text-center"
                style={{ borderRight: i < 3 ? "1px solid rgba(184,146,42,0.08)" : undefined }}>
                <p className="font-cormorant text-5xl font-bold" style={{ color: "#C9A84C" }}>{value}</p>
                <div className="h-px w-8 mx-auto my-3" style={{ background: "rgba(201,168,76,0.3)" }} />
                <p className="text-[11px] tracking-[0.2em] uppercase font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>{label}</p>
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
