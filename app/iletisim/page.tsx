import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "İletişim | Diş Kliniği",
  description: "Bizimle iletişime geçin. Adres, telefon ve e-posta bilgileri için tıklayın.",
};

const contactItems = [
  {
    sym: "◉",
    label: "Adres",
    value: "Atatürk Cad. No:12, Kadıköy, İstanbul",
  },
  {
    sym: "◇",
    label: "Telefon",
    value: "+90 212 123 45 67",
    href: "tel:+902121234567",
  },
  {
    sym: "◈",
    label: "E-posta",
    value: "info@disklinigi.com",
    href: "mailto:info@disklinigi.com",
  },
  {
    sym: "◆",
    label: "Çalışma Saatleri",
    value: "Pzt–Cum 09:00–18:00 · Cmt 09:00–14:00",
  },
];

const inputClass =
  "w-full border border-[#DDD0B8] bg-[#FAF7F2] px-4 py-3.5 text-[#1C1A15] placeholder-[#9B8E7D] focus:outline-none focus:border-[#8B7355] text-sm transition-colors duration-200";

const labelClass = "block text-[11px] font-medium text-[#8B7355] tracking-[0.15em] uppercase mb-2";

export default function IletisimPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen font-outfit">
      <PageHero
        title="İletişim"
        crumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "İletişim" }]}
      />

      {/* Contact info cards */}
      <section className="py-12 bg-[#1C1A15]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactItems.map(({ sym, label, value, href }) => (
              <div key={label} className="bg-[#2A261E] border border-[#3D3830] p-6">
                <span className="text-xl text-[#8B7355] mb-3 block leading-none">{sym}</span>
                <p className="text-[#8B7355] text-[10px] tracking-[0.2em] uppercase mb-1.5">{label}</p>
                {href ? (
                  <a href={href} className="text-[#FAF7F2] text-sm font-medium hover:text-[#B8966A] transition-colors leading-snug block">
                    {value}
                  </a>
                ) : (
                  <p className="text-[#FAF7F2] text-sm font-medium leading-snug">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + map */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Contact form */}
            <div className="bg-white border border-[#DDD0B8] p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#8B7355]" />
                <span className="text-[#8B7355] text-[11px] tracking-[0.22em] uppercase font-medium">Mesaj Gönderin</span>
              </div>
              <h2 className="font-cormorant text-3xl sm:text-4xl font-light text-[#1C1A15] mb-2">
                Bize <span className="italic">Yazın</span>
              </h2>
              <p className="text-[#9B8E7D] text-sm mb-8">Formu doldurun, en kısa sürede size geri dönelim.</p>

              <form noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelClass} htmlFor="firstName">İsim</label>
                    <input id="firstName" type="text" placeholder="Adınız" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="lastName">Soyisim</label>
                    <input id="lastName" type="text" placeholder="Soyadınız" className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelClass} htmlFor="phone">Telefon</label>
                    <input id="phone" type="tel" placeholder="+90 5XX XXX XX XX" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">E-posta</label>
                    <input id="email" type="email" placeholder="ornek@email.com" className={inputClass} />
                  </div>
                </div>
                <div className="mb-4">
                  <label className={labelClass} htmlFor="subject">Konu</label>
                  <input id="subject" type="text" placeholder="Mesajınızın konusu" className={inputClass} />
                </div>
                <div className="mb-8">
                  <label className={labelClass} htmlFor="message">Mesajınız</label>
                  <textarea id="message" rows={5} placeholder="Mesajınızı buraya yazın..." className={`${inputClass} resize-none`} />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1C1A15] hover:bg-[#2A261E] text-[#FAF7F2] font-medium py-4 text-sm tracking-wide transition-colors duration-300"
                >
                  Mesaj Gönder
                </button>
              </form>
            </div>

            {/* Map + hours */}
            <div className="flex flex-col gap-6">
              {/* Map placeholder */}
              <div className="bg-[#F2ECE0] border border-[#DDD0B8] flex-1 flex flex-col items-center justify-center min-h-64 p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-[#B8966A]/40" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-[#B8966A]/40" />
                <svg className="w-10 h-10 text-[#B8966A]/50 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="font-cormorant text-xl font-light italic text-[#1C1A15] mb-1">Harita Alanı</p>
                <p className="text-[#9B8E7D] text-xs tracking-wide">Atatürk Cad. No:12, Kadıköy, İstanbul</p>
              </div>

              {/* Working hours */}
              <div className="bg-white border border-[#DDD0B8] p-6">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[#8B7355] text-lg leading-none">◆</span>
                  <span className="font-outfit font-semibold text-[#1C1A15] text-[11px] tracking-widest uppercase">Çalışma Saatleri</span>
                </div>
                <div className="divide-y divide-[#F2ECE0]">
                  {[
                    { day: "Pazartesi – Cuma", hours: "09:00 – 18:00" },
                    { day: "Cumartesi", hours: "09:00 – 14:00" },
                    { day: "Pazar", hours: "Kapalı" },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between items-center py-3">
                      <span className="text-[#6B5F4E] text-sm">{day}</span>
                      <span className={`text-sm font-medium ${hours === "Kapalı" ? "text-[#9B8E7D]" : "text-[#1C1A15]"}`}>
                        {hours}
                      </span>
                    </div>
                  ))}
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
