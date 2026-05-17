import type { Metadata } from "next";
import Link from "next/link";
import ReviewsSection from "@/components/ReviewsSection";

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
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <section className="bg-[#075985] pt-10 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-[#0c6ea3] px-8 py-12 text-center shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              Hakkımızda
            </h1>
            <p className="text-sm text-[#BAE6FD]">
              <Link href="/" className="hover:text-white transition-colors">
                Ana Sayfa
              </Link>
              <span className="mx-2 text-[#7DD3FC]">/</span>
              <span className="text-white font-medium">Hakkımızda</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-16 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-[#0EA5E9]">
              Hakkımızda
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] leading-tight mb-6">
              Sağlıklı Gülüşler İçin <br className="hidden sm:block" />
              Güvenilir Hizmet
            </h2>

            <p className="text-[#4B5563] leading-relaxed mb-4">
              Kliniğimiz, diş sağlığı alanında yılların getirdiği deneyim ve
              sürekli güncellenen teknolojik altyapısıyla hastalarına en yüksek
              standartlarda hizmet sunmaktadır. Her tedavi sürecini bireysel
              ihtiyaçlar doğrultusunda özenle planlıyoruz.
            </p>
            <p className="text-[#4B5563] leading-relaxed mb-8">
              Uzman ekibimiz; tanıdan tedaviye kadar her aşamada hasta
              konforunu ön planda tutarak, güvenilir ve şeffaf bir yaklaşımla
              yanınızda olmayı ilke edinmiştir.
            </p>

            {/* Advantages */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {advantages.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#E0F2FE" }}
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="#0EA5E9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="2 6 5 9 10 3" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-[#111827]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Image placeholder */}
          <div className="relative rounded-2xl overflow-hidden h-96 lg:h-[460px] bg-[#0c3f5f]">
            {/* Subtle concentric rings */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              {[160, 240, 320, 400].map((size) => (
                <div
                  key={size}
                  className="absolute rounded-full border border-white"
                  style={{ width: size, height: size }}
                />
              ))}
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#012e48]/80 via-transparent to-transparent" />

            {/* Center placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-14 h-14 text-[#7DD3FC] mx-auto mb-3 opacity-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <p className="text-[#BAE6FD] text-sm font-medium opacity-60">Doktor / Klinik Görseli</p>
              </div>
            </div>

            {/* Bottom badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/20">
                <p className="text-white text-sm font-semibold">Diş Kliniği</p>
                <p className="text-[#BAE6FD] text-xs mt-0.5">Uzman Diş Hekimleri Ekibi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />
    </div>
  );
}
