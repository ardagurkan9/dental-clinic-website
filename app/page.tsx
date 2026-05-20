import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ana Sayfa | Diş Kliniği",
  description: "Modern diş hekimliği hizmetleri ile sağlıklı gülüşler için doğru adres.",
};

const stats = [
  { value: "15+", label: "Yıl Deneyim" },
  { value: "5000+", label: "Mutlu Hasta" },
  { value: "10+", label: "Uzman Hekim" },
  { value: "9", label: "Tedavi Dalı" },
];

const features = [
  {
    title: "Modern Ekipman",
    desc: "Son teknoloji cihazlar ve dijital görüntüleme sistemleriyle hassas tanı ve tedavi.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    title: "Uzman Kadro",
    desc: "Alanında uzmanlaşmış, deneyimli hekimlerimizle güvenli ve etkili tedavi.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
    ),
  },
  {
    title: "Kolay Randevu",
    desc: "Online form ya da telefonla dakikalar içinde randevu oluşturun.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    ),
  },
  {
    title: "Hasta Konforu",
    desc: "Sıcak ve hijyenik ortamda, stressiz bir tedavi deneyimi sunuyoruz.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    ),
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-[#075985] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {[240, 380, 520, 660].map((size) => (
            <div
              key={size}
              className="absolute rounded-full border border-white/10"
              style={{
                width: size,
                height: size,
                right: -size / 3,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-[#BAE6FD] text-xs font-semibold tracking-widest uppercase mb-5">
              Diş Kliniği · Kadıköy, İstanbul
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Sağlıklı Gülüşler
              <br />
              <span className="text-[#7DD3FC]">İçin Doğru Adres</span>
            </h1>
            <p className="text-[#BAE6FD] text-lg leading-relaxed mb-10 max-w-xl">
              Modern ekipman ve uzman kadromuzla diş sağlığınızı en üst düzeyde koruyoruz.
              Konforlu bir tedavi deneyimi için randevunuzu şimdi oluşturun.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/randevu"
                className="inline-flex items-center gap-2 bg-[#0EA5E9] hover:bg-[#0369A1] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-[#0EA5E9]/30 text-sm"
              >
                Randevu Oluştur
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/hakkimda"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors border border-white/20 text-sm"
              >
                Hakkımızda
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-white/10 bg-[#0c6ea3]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {stats.map(({ value, label }) => (
                <div key={label} className="py-6 px-4 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-white">{value}</p>
                  <p className="text-[#BAE6FD] text-xs mt-1 font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0EA5E9] mb-2">
            Neden Biz?
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827]">Fark Yaratan Hizmet</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc, icon }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-full bg-[#E0F2FE] flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-[#0EA5E9]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {icon}
                </svg>
              </div>
              <h3 className="font-semibold text-[#111827] mb-2">{title}</h3>
              <p className="text-[#4B5563] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
