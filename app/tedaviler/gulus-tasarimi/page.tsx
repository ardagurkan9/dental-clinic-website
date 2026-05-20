import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gülüş Tasarımı | Diş Kliniği",
  description: "Dijital gülüş tasarımı ile hayalinizdeki gülüşe kavuşun.",
};

const benefits = [
  "Dijital fotoğraf ve video analizi",
  "3D simülasyon ile önizleme",
  "Diş rengi ve şekli optimizasyonu",
  "Dişeti estetiği planlaması",
  "Laminat, veneer ve bonding",
  "Bireyselleştirilmiş tedavi planı",
];

export default function GulusTaskarimiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <section className="bg-[#075985] pt-10 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-[#0c6ea3] px-8 py-12 text-center shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              Gülüş Tasarımı
            </h1>
            <p className="text-sm text-[#BAE6FD]">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <span className="mx-2 text-[#7DD3FC]">/</span>
              <Link href="/tedaviler/gulus-tasarimi" className="hover:text-white transition-colors">Tedavilerimiz</Link>
              <span className="mx-2 text-[#7DD3FC]">/</span>
              <span className="text-white font-medium">Gülüş Tasarımı</span>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-16 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-[#0EA5E9]">
              Estetik Diş Hekimliği
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] leading-tight mb-6">
              Hayalinizdeki<br className="hidden sm:block" /> Gülüşe Kavuşun
            </h2>
            <p className="text-[#4B5563] leading-relaxed mb-4">
              Gülüş tasarımı, yüz hatlarınıza ve kişisel tercihlerinize uygun ideal gülüşü
              dijital teknoloji yardımıyla planlayan, çok disiplinli bir estetik tedavi
              yaklaşımıdır.
            </p>
            <p className="text-[#4B5563] leading-relaxed mb-8">
              Tedavi başlamadan önce sonucu dijital ortamda görmenizi sağlayan simülasyon
              teknolojimiz sayesinde beklentilerinize tam uygun bir sonuç elde edersiniz.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "#E0F2FE" }}>
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="2 6 5 9 10 3" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-[#111827]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-96 lg:h-[440px] bg-[#0c3f5f]">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              {[160, 240, 320, 400].map((size) => (
                <div key={size} className="absolute rounded-full border border-white" style={{ width: size, height: size }} />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#012e48]/80 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-[#BAE6FD] text-sm font-medium opacity-60">Tedavi Görseli</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
