import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "İletişim | Diş Kliniği",
  description: "Bizimle iletişime geçin. Adres, telefon ve e-posta bilgileri için tıklayın.",
};

const contactItems = [
  { sym: "◉", label: "Adres", value: "Atatürk Cad. No:12, Kadıköy, İstanbul" },
  { sym: "◇", label: "Telefon", value: "+90 212 123 45 67", href: "tel:+902121234567" },
  { sym: "◈", label: "E-posta", value: "info@disklinigi.com", href: "mailto:info@disklinigi.com" },
  { sym: "◆", label: "Çalışma Saatleri", value: "Pzt–Cum 09:00–18:00 · Cmt 09:00–14:00" },
];

const inputStyle = {
  width: "100%",
  border: "1px solid rgba(184,146,42,0.22)",
  background: "#FFFFFF",
  padding: "14px 16px",
  color: "#0F1E35",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.2s",
} as React.CSSProperties;

const labelStyle = {
  display: "block",
  fontSize: "10px",
  fontWeight: "500",
  color: "#B8922A",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  marginBottom: "8px",
} as React.CSSProperties;

export default function IletisimPage() {
  return (
    <div className="min-h-screen font-outfit" style={{ background: "#FAF8F5" }}>
      <PageHero
        title="İletişim"
        crumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "İletişim" }]}
      />

      {/* Contact info strip — deep navy */}
      <section className="py-12" style={{ background: "#0F1E35" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactItems.map(({ sym, label, value, href }) => (
              <div key={label} className="p-6"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(184,146,42,0.15)" }}>
                <span className="text-xl mb-3 block leading-none" style={{ color: "#C9A84C" }}>{sym}</span>
                <p className="text-[10px] tracking-[0.22em] uppercase mb-2" style={{ color: "rgba(201,168,76,0.6)" }}>{label}</p>
                {href ? (
                  <a href={href} className="text-sm font-medium leading-snug block contact-link-ivory">
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-medium leading-snug" style={{ color: "#F0EBE0" }}>{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + map */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Contact form */}
            <div className="p-8 lg:p-10"
              style={{ background: "#FFFFFF", border: "1px solid rgba(184,146,42,0.15)", boxShadow: "0 4px 30px rgba(15,30,53,0.06)" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ background: "#B8922A" }} />
                <span className="text-[10px] tracking-[0.28em] uppercase font-medium" style={{ color: "#B8922A" }}>Mesaj Gönderin</span>
              </div>
              <h2 className="font-cormorant text-3xl sm:text-4xl font-light mb-2" style={{ color: "#0F1E35" }}>
                Bize <span className="italic font-medium" style={{ color: "#B8922A" }}>Yazın</span>
              </h2>
              <p className="text-sm mb-8" style={{ color: "#8A7E70" }}>Formu doldurun, en kısa sürede size geri dönelim.</p>

              <form noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label style={labelStyle} htmlFor="firstName">İsim</label>
                    <input id="firstName" type="text" placeholder="Adınız" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="lastName">Soyisim</label>
                    <input id="lastName" type="text" placeholder="Soyadınız" style={inputStyle} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label style={labelStyle} htmlFor="phone">Telefon</label>
                    <input id="phone" type="tel" placeholder="+90 5XX XXX XX XX" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="email">E-posta</label>
                    <input id="email" type="email" placeholder="ornek@email.com" style={inputStyle} />
                  </div>
                </div>
                <div className="mb-4">
                  <label style={labelStyle} htmlFor="subject">Konu</label>
                  <input id="subject" type="text" placeholder="Mesajınızın konusu" style={inputStyle} />
                </div>
                <div className="mb-8">
                  <label style={labelStyle} htmlFor="message">Mesajınız</label>
                  <textarea id="message" rows={5} placeholder="Mesajınızı buraya yazın..."
                    style={{ ...inputStyle, resize: "none" }} />
                </div>
                <button
                  type="submit"
                  className="w-full font-semibold py-4 text-sm tracking-wide text-white btn-navy"
                >
                  Mesaj Gönder
                </button>
              </form>
            </div>

            {/* Map + hours */}
            <div className="flex flex-col gap-6">
              {/* Map placeholder */}
              <div className="flex-1 flex flex-col items-center justify-center min-h-64 p-10 text-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #F5F0EA 0%, #EDE5D8 100%)", border: "1px solid rgba(184,146,42,0.18)" }}>
                <div className="absolute top-0 left-0 w-10 h-10 border-t border-l" style={{ borderColor: "rgba(184,146,42,0.4)" }} />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r" style={{ borderColor: "rgba(184,146,42,0.4)" }} />
                <svg className="w-10 h-10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}
                  style={{ color: "rgba(184,146,42,0.4)" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="font-cormorant text-xl font-light italic mb-1" style={{ color: "#0F1E35" }}>Harita Alanı</p>
                <p className="text-xs tracking-wide" style={{ color: "#8A7E70" }}>Atatürk Cad. No:12, Kadıköy, İstanbul</p>
              </div>

              {/* Working hours */}
              <div className="p-6"
                style={{ background: "#FFFFFF", border: "1px solid rgba(184,146,42,0.15)", boxShadow: "0 2px 16px rgba(15,30,53,0.04)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-lg leading-none" style={{ color: "#B8922A" }}>◆</span>
                  <span className="font-semibold text-[10px] tracking-[0.25em] uppercase" style={{ color: "#0F1E35" }}>Çalışma Saatleri</span>
                </div>
                <div>
                  {[
                    { day: "Pazartesi – Cuma", hours: "09:00 – 18:00" },
                    { day: "Cumartesi", hours: "09:00 – 14:00" },
                    { day: "Pazar", hours: "Kapalı" },
                  ].map(({ day, hours }, i) => (
                    <div key={day} className="flex justify-between items-center py-3.5"
                      style={{ borderBottom: i < 2 ? "1px solid rgba(184,146,42,0.08)" : undefined }}>
                      <span className="text-sm" style={{ color: "#8A7E70" }}>{day}</span>
                      <span className="text-sm font-medium"
                        style={{ color: hours === "Kapalı" ? "#8A7E70" : "#0F1E35" }}>
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
