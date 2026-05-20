import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "İletişim | Diş Kliniği",
  description: "Bizimle iletişime geçin. Adres, telefon ve e-posta bilgileri için tıklayın.",
};

const inputClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent text-sm bg-gray-50 transition";

const labelClass = "block text-sm font-medium text-[#374151] mb-1.5";

const contactItems = [
  {
    label: "Adres",
    value: "Atatürk Cad. No:12, Kadıköy, İstanbul",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
  {
    label: "Telefon",
    value: "+90 212 123 45 67",
    href: "tel:+902121234567",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
  },
  {
    label: "E-posta",
    value: "info@disklinigi.com",
    href: "mailto:info@disklinigi.com",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    label: "Çalışma Saatleri",
    value: "Pzt–Cum 09:00–18:00 · Cmt 09:00–14:00",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
];

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <section className="bg-[#075985] pt-10 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-[#0c6ea3] px-8 py-12 text-center shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              İletişim
            </h1>
            <p className="text-sm text-[#BAE6FD]">
              <Link href="/" className="hover:text-white transition-colors">
                Ana Sayfa
              </Link>
              <span className="mx-2 text-[#7DD3FC]">/</span>
              <span className="text-white font-medium">İletişim</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactItems.map(({ label, value, href, icon }) => (
            <div key={label} className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#E0F2FE] flex items-center justify-center shrink-0">
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
              <div>
                <p className="text-xs font-semibold text-[#0EA5E9] uppercase tracking-wide mb-1">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="text-sm font-medium text-[#111827] hover:text-[#0EA5E9] transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-[#111827]">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#111827] mb-1">Bize Yazın</h2>
            <p className="text-[#4B5563] text-sm mb-7">
              Formu doldurun, en kısa sürede size geri dönelim.
            </p>
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
              <div className="mb-7">
                <label className={labelClass} htmlFor="message">Mesajınız</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Mesajınızı buraya yazın..."
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0EA5E9] hover:bg-[#0369A1] active:bg-[#075985] text-white font-semibold py-3.5 rounded-xl transition-colors text-sm tracking-wide shadow-md shadow-[#0EA5E9]/30"
              >
                Mesaj Gönder
              </button>
            </form>
          </div>

          {/* Map Placeholder + Working Hours */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#E0F2FE] rounded-2xl flex-1 flex flex-col items-center justify-center min-h-64 border-2 border-dashed border-[#7DD3FC] p-8 text-center">
              <svg
                className="w-12 h-12 text-[#0EA5E9] opacity-60 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <p className="text-[#075985] font-semibold text-lg">Harita Alanı</p>
              <p className="text-[#0369A1] text-sm opacity-70 mt-1">
                Atatürk Cad. No:12, Kadıköy, İstanbul
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-semibold text-[#075985] text-base mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#0EA5E9]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Çalışma Saatleri
              </h3>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Pazartesi – Cuma", hours: "09:00 – 18:00" },
                  { day: "Cumartesi", hours: "09:00 – 14:00" },
                  { day: "Pazar", hours: "Kapalı" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between items-center py-1 border-b border-gray-50 last:border-0">
                    <span className="text-[#075985] font-medium">{day}</span>
                    <span
                      className={`font-semibold ${hours === "Kapalı" ? "text-red-400" : "text-[#0369A1]"}`}
                    >
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
