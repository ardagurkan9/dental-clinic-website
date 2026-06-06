import Link from "next/link";

const WA_LINK = "https://wa.me/902121234567?text=Merhaba%2C%20randevu%20almak%20istiyorum.";

export default function SiteFooter() {
  return (
    <footer style={{ background: "#08111F" }} className="font-outfit">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center shrink-0"
                style={{ border: "1px solid rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.07)" }}>
                <span className="font-cormorant text-sm font-bold" style={{ color: "#C9A84C" }}>DK</span>
              </div>
              <div>
                <p className="font-cormorant text-base font-semibold leading-tight" style={{ color: "#F0EBE0" }}>Diş Kliniği</p>
                <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "#C9A84C" }}>Sağlıklı Gülüşler</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
              Modern diş hekimliği ile güzel gülüşler için Kadıköy&apos;deyiz. 2009&apos;dan beri güvenilir hizmet.
            </p>
            <div className="h-px mt-8" style={{ background: "rgba(201,168,76,0.12)" }} />
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-outfit font-semibold text-[10px] tracking-[0.25em] uppercase mb-6"
              style={{ color: "#C9A84C" }}>Tedaviler</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Dental İmplant", href: "/tedaviler/implant" },
                { label: "Zirkonyum Kronlar", href: "/tedaviler/protetik" },
                { label: "Diş Beyazlatma", href: "/tedaviler/protetik" },
                { label: "Gülüş Tasarımı", href: "/tedaviler/gulus-tasarimi" },
                { label: "Dişeti Tedavisi", href: "/tedaviler/diseti-hastaliklari" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-outfit font-semibold text-[10px] tracking-[0.25em] uppercase mb-6"
              style={{ color: "#C9A84C" }}>Sayfalar</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Ana Sayfa", href: "/" },
                { label: "Hakkımızda", href: "/hakkimda" },
                { label: "Blog", href: "/blog" },
                { label: "İletişim", href: "/iletisim" },
                { label: "Randevu", href: "/randevu" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit font-semibold text-[10px] tracking-[0.25em] uppercase mb-6"
              style={{ color: "#C9A84C" }}>İletişim</h4>
            <ul className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
              <li>Atatürk Cad. No:12, Kadıköy, İstanbul</li>
              <li>
                <a href="tel:+902121234567" className="footer-link">+90 212 123 45 67</a>
              </li>
              <li>
                <a href="mailto:info@disklinigi.com" className="footer-link">info@disklinigi.com</a>
              </li>
              <li>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="footer-link-wa">
                  WhatsApp Randevu
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(201,168,76,0.07)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "rgba(255,255,255,0.18)" }}>
          <p>© 2025 Diş Kliniği. Tüm hakları saklıdır.</p>
          <p>Kadıköy, İstanbul · Türkiye</p>
        </div>
      </div>
    </footer>
  );
}
