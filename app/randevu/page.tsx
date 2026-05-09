import type { Metadata } from "next";
import Link from "next/link";

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
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

const inputClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent text-sm bg-gray-50 transition";

const labelClass = "block text-sm font-medium text-[#374151] mb-1.5";

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <section className="bg-[#075985] pt-10 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-[#0c6ea3] px-8 py-12 text-center shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              Randevu Oluştur
            </h1>
            <p className="text-sm text-[#BAE6FD]">
              <Link href="/" className="hover:text-white transition-colors">
                Ana Sayfa
              </Link>
              <span className="mx-2 text-[#7DD3FC]">/</span>
              <span className="text-white font-medium">Randevu Oluştur</span>
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E0F2FE] flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-[#111827] text-base">Hızlı Randevu</h3>
              <p className="text-[#4B5563] text-sm mt-1 leading-relaxed">
                Formu doldurun, 24 saat içinde size ulaşalım ve randevunuzu onaylayalım.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E0F2FE] flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-[#111827] text-base">Telefonla Ulaşın</h3>
              <p className="text-[#4B5563] text-sm mt-1 leading-relaxed">
                Bizi arayarak anında randevu alabilirsiniz. Hafta içi 09:00–18:00 arasında hizmetinizdeyiz.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E0F2FE] flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-[#111827] text-base">Klinik Adresi</h3>
              <p className="text-[#4B5563] text-sm mt-1 leading-relaxed">
                Şehir merkezinde kolayca ulaşılabilir konumumuzda sizi bekliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#111827] mb-1">Randevu Formu</h2>
            <p className="text-[#4B5563] text-sm mb-7">Aşağıdaki formu eksiksiz doldurun, en kısa sürede dönüş yapalım.</p>

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
                    <option key={opt} value={opt === "Tedavi Seçiniz" ? "" : opt}>
                      {opt}
                    </option>
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
                      <option key={slot} value={slot === "Saat Seçiniz" ? "" : slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-7">
                <label className={labelClass} htmlFor="message">Mesaj / Not</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Eklemek istediğiniz notlar veya özel taleplerinizi buraya yazabilirsiniz..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0EA5E9] hover:bg-[#0369A1] active:bg-[#075985] text-white font-semibold py-3.5 rounded-xl transition-colors text-sm tracking-wide shadow-md shadow-[#0EA5E9]/30"
              >
                Randevu Talebi Gönder
              </button>
            </form>
          </div>

          {/* Right: Image placeholder + contact */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-auto lg:flex-1 bg-[#0c3f5f] min-h-64">
              {/* Geometric pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-white"
                    style={{
                      width: `${120 + i * 60}px`,
                      height: `${120 + i * 60}px`,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              </div>
              {/* Clinic placeholder text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-14 h-14 text-[#7DD3FC] mx-auto mb-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-[#BAE6FD] text-sm font-medium opacity-70">Klinik Görseli</p>
                </div>
              </div>
              {/* Dark gradient overlay with contact info */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#012e48]/95 via-[#012e48]/40 to-transparent flex flex-col justify-end p-6">
                <div className="space-y-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0EA5E9]/20 border border-[#0EA5E9]/40 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-[#7DD3FC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#BAE6FD] text-xs">Telefon</p>
                      <p className="text-white text-sm font-medium">+90 5XX XXX XX XX</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0EA5E9]/20 border border-[#0EA5E9]/40 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-[#7DD3FC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#BAE6FD] text-xs">E-posta</p>
                      <p className="text-white text-sm font-medium">info@disklinigi.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0EA5E9]/20 border border-[#0EA5E9]/40 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-[#7DD3FC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#BAE6FD] text-xs">Adres</p>
                      <p className="text-white text-sm font-medium">Örnek Mah. Klinik Cad. No:1, İstanbul</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Working hours card */}
            <div className="bg-[#E0F2FE] rounded-2xl p-6">
              <h3 className="font-semibold text-[#075985] text-base mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Çalışma Saatleri
              </h3>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Pazartesi – Cuma", hours: "09:00 – 18:00" },
                  { day: "Cumartesi", hours: "09:00 – 14:00" },
                  { day: "Pazar", hours: "Kapalı" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between items-center">
                    <span className="text-[#075985] font-medium">{day}</span>
                    <span className={`font-semibold ${hours === "Kapalı" ? "text-red-400" : "text-[#0369A1]"}`}>
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-[#E0F2FE] rounded-2xl h-64 flex flex-col items-center justify-center gap-3 border-2 border-dashed border-[#7DD3FC]">
          <svg className="w-10 h-10 text-[#0EA5E9] opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <p className="text-[#075985] font-semibold text-lg">Harita Alanı</p>
          <p className="text-[#0369A1] text-sm opacity-70">Klinik konumu burada gösterilecek</p>
        </div>
      </section>
    </div>
  );
}
