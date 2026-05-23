import Link from "next/link";

const WA_LINK = "https://wa.me/902121234567?text=Merhaba%2C%20randevu%20almak%20istiyorum.";

export default function SiteFooter() {
  return (
    <footer className="bg-[#12100D] text-[#6B5F4E] font-outfit">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 border border-[#8B7355]/50 flex items-center justify-center shrink-0">
                <span className="font-cormorant text-sm font-bold text-[#B8966A]">DK</span>
              </div>
              <div>
                <p className="font-cormorant text-base font-medium text-[#FAF7F2] leading-tight">Diş Kliniği</p>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#8B7355]">Sağlıklı Gülüşler</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Modern diş hekimliği ile güzel gülüşler için Kadıköy&apos;deyiz. 2009&apos;dan beri güvenilir hizmet.
            </p>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-outfit font-semibold text-[#FAF7F2] text-[11px] tracking-widest uppercase mb-5">Tedaviler</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Dental İmplant", href: "/tedaviler/implant" },
                { label: "Zirkonyum Kronlar", href: "/tedaviler/protetik" },
                { label: "Diş Beyazlatma", href: "/tedaviler/protetik" },
                { label: "Gülüş Tasarımı", href: "/tedaviler/gulus-tasarimi" },
                { label: "Dişeti Tedavisi", href: "/tedaviler/diseti-hastaliklari" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-[#B8966A] transition-colors duration-200">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-outfit font-semibold text-[#FAF7F2] text-[11px] tracking-widest uppercase mb-5">Sayfalar</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Ana Sayfa", href: "/" },
                { label: "Hakkımızda", href: "/hakkimda" },
                { label: "Blog", href: "/blog" },
                { label: "İletişim", href: "/iletisim" },
                { label: "Randevu", href: "/randevu" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-[#B8966A] transition-colors duration-200">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit font-semibold text-[#FAF7F2] text-[11px] tracking-widest uppercase mb-5">İletişim</h4>
            <ul className="space-y-3 text-sm">
              <li>Atatürk Cad. No:12, Kadıköy, İstanbul</li>
              <li>
                <a href="tel:+902121234567" className="hover:text-[#B8966A] transition-colors duration-200">+90 212 123 45 67</a>
              </li>
              <li>
                <a href="mailto:info@disklinigi.com" className="hover:text-[#B8966A] transition-colors duration-200">info@disklinigi.com</a>
              </li>
              <li>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors duration-200">
                  WhatsApp Randevu
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1C1A15]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#3D3830]">
          <p>© 2025 Diş Kliniği. Tüm hakları saklıdır.</p>
          <p>Kadıköy, İstanbul · Türkiye</p>
        </div>
      </div>
    </footer>
  );
}
