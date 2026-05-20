import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kanal Tedavisi | Diş Kliniği",
  description: "Ağrısız ve modern kanal tedavisi ile dişinizi kurtarın.",
};

const benefits = [
  "Lokal anestezi ile ağrısız işlem",
  "Tek seansta kanal tedavisi",
  "Nikel-titanyum rotary aletler",
  "Apikal cerrahisi (gerektiğinde)",
  "Mikroskop destekli endodonti",
  "Yüksek başarı oranı",
];

export default function KanalTedavisiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <section className="bg-[#075985] pt-10 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-[#0c6ea3] px-8 py-12 text-center shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              Kanal Tedavisi
            </h1>
            <p className="text-sm text-[#BAE6FD]">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <span className="mx-2 text-[#7DD3FC]">/</span>
              <Link href="/tedaviler/kanal" className="hover:text-white transition-colors">Tedavilerimiz</Link>
              <span className="mx-2 text-[#7DD3FC]">/</span>
              <span className="text-white font-medium">Kanal Tedavisi</span>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-16 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-[#0EA5E9]">
              Endodonti
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] leading-tight mb-6">
              Dişinizi Kaybetmeden<br className="hidden sm:block" /> Kurtarıyoruz
            </h2>
            <p className="text-[#4B5563] leading-relaxed mb-4">
              Kanal tedavisi, enfekte veya hasar görmüş diş pulpasının (sinir ve damar dokusu)
              temizlenerek dişin korunduğu bir tedavi yöntemidir. Modern tekniklerle bu işlem
              artık çok daha hızlı ve ağrısızdır.
            </p>
            <p className="text-[#4B5563] leading-relaxed mb-8">
              Endodonti uzmanlarımız; rotary sistemler ve gerektiğinde mikroskop kullanarak
              en zorlu vakalarda bile yüksek başarı oranı sağlamaktadır.
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
