import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Randevu Oluştur | Diş Kliniği",
  description: "Online randevu formu ile kliniğimize kolayca randevu alın.",
};

const treatmentOptions = [
  "Tedavi Seçiniz",
  "Genel Muayene",
  "Diş Dolgusu",
  "Kanal Tedavisi",
  "Diş Çekimi",
  "İmplant",
  "Ortodonti (Telsiz/Braket)",
  "Diş Beyazlatma",
  "Porselen Kaplama",
  "Diş Taşı Temizliği",
  "Çocuk Diş Hekimliği",
  "Diğer",
];

const timeSlots = [
  "Saat Seçiniz",
  "09:00","09:30","10:00","10:30","11:00","11:30",
  "13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00",
];

const inputClass =
  "w-full border border-[#DDD0B8] bg-[#FAF7F2] px-4 py-3.5 text-[#1C1A15] placeholder-[#9B8E7D] focus:outline-none focus:border-[#8B7355] text-sm transition-colors duration-200";

const labelClass = "block text-[11px] font-medium text-[#8B7355] tracking-[0.15em] uppercase mb-2";

export default function AppointmentPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen font-outfit">
      <PageHero
        title="Randevu Oluştur"
        crumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "Randevu Oluştur" }]}
      />

      {/* Info strip */}
      <section className="py-10 bg-[#1C1A15]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { sym: "◈", title: "Hızlı Randevu", desc: "Formu doldurun, 24 saat içinde size ulaşalım ve randevunuzu onaylayalım." },
              { sym: "◇", title: "Telefonla Ulaşın", desc: "Bizi arayarak anında randevu alabilirsiniz. Hafta içi 09:00–18:00 arasında hizmetinizdeyiz." },
              { sym: "◉", title: "Klinik Adresi", desc: "Şehir merkezinde kolayca ulaşılabilir konumumuzda sizi bekliyoruz." },
            ].map(({ sym, title, desc }) => (
              <div key={title} className="bg-[#2A261E] border border-[#3D3830] p-6 flex gap-4">
                <span className="text-xl text-[#8B7355] shrink-0 leading-none">{sym}</span>
                <div>
                  <h3 className="font-cormorant text-lg font-medium text-[#FAF7F2] mb-1">{title}</h3>
                  <p className="text-[#9B8E7D] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Form */}
            <div className="lg:col-span-3 bg-white border border-[#DDD0B8] p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#8B7355]" />
                <span className="text-[#8B7355] text-[11px] tracking-[0.22em] uppercase font-medium">Online Randevu</span>
              </div>
              <h2 className="font-cormorant text-3xl sm:text-4xl font-light text-[#1C1A15] mb-2">
                Randevu <span className="italic">Formu</span>
              </h2>
              <p className="text-[#9B8E7D] text-sm mb-8">Aşağıdaki formu eksiksiz doldurun, en kısa sürede dönüş yapalım.</p>

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
                  <label className={labelClass} htmlFor="treatment">Tedavi Seçimi</label>
                  <select id="treatment" className={inputClass}>
                    {treatmentOptions.map((opt) => (
                      <option key={opt} value={opt === "Tedavi Seçiniz" ? "" : opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelClass} htmlFor="date">Tercih Edilen Tarih</label>
                    <input id="date" type="date" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="time">Tercih Edilen Saat</label>
                    <select id="time" className={inputClass}>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot === "Saat Seçiniz" ? "" : slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mb-8">
                  <label className={labelClass} htmlFor="message">Mesaj / Not</label>
                  <textarea id="message" rows={4} placeholder="Eklemek istediğiniz notlar..." className={`${inputClass} resize-none`} />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1C1A15] hover:bg-[#2A261E] text-[#FAF7F2] font-medium py-4 text-sm tracking-wide transition-colors duration-300"
                >
                  Randevu Talebi Gönder
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Image placeholder */}
              <div className="relative flex-1 min-h-64">
                <div className="absolute inset-4 border border-[#B8966A]/20 pointer-events-none z-10" />
                <div className="h-full bg-gradient-to-br from-[#F2ECE0] to-[#EDE0C8] flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-[#B8966A]/50" />
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-[#B8966A]/50" />
                  <svg className="w-12 h-12 text-[#B8966A]/40 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#B8966A]/60">Klinik Görseli</p>

                  {/* Contact overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#1C1A15]/90 p-5 space-y-3">
                    {[
                      { label: "Telefon", value: "+90 212 123 45 67" },
                      { label: "E-posta", value: "info@disklinigi.com" },
                      { label: "Adres", value: "Atatürk Cad. No:12, Kadıköy" },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <p className="text-[#8B7355] text-[10px] tracking-[0.18em] uppercase">{label}</p>
                        <p className="text-[#FAF7F2] text-sm font-medium">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
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
