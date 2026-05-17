"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

const PRIMARY = "#0EA5E9";
const PRIMARY_HOVER = "#0369A1";
const PRIMARY_LIGHT = "#E0F2FE";
const TEXT_DARK = "#111827";
const TEXT_MID = "#4B5563";

const tedavilerItems = [
  { label: "Dişeti Hastalıkları Tedavileri", href: "/tedaviler/genel" },
  { label: "İmplant & Çene Cerrahisi", href: "/tedaviler/kanal" },
  { label: "Mikrocerrahi ve Plastik cerrahi", href: "/tedaviler/estetik" },
  { label: "Kemik Grefti & Rejeneratif Uygulamalar", href: "/tedaviler/periodonti" },
  { label: "Estetik Protetik & Restoratif Uygulamalar", href: "/tedaviler/implant" },
  { label: "Gülüş Tasarımı", href: "/tedaviler/ortodonti" },
  { label: "Kanal Tedavisi", href: "/tedaviler/cocuk" },
  { label: "Bruksizm Tedavisi & Masseter Botoksu", href: "/tedaviler/protez" },
  { label: "Dijital Diş Hekimliği", href: "/tedaviler/dijital" },
];

const regularNavLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımda", href: "/hakkimda" },
  { label: "Doktorlar", href: "/doktorlar" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.55 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6 6l.91-1.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 15z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ChevronDownIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileTedavilerOpen, setMobileTedavilerOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  const isTedavilerActive = pathname.startsWith("/tedaviler");

  const openDropdown = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setDropdownOpen(true);
  };

  const scheduleClose = () => {
    closeTimerRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm" style={{ color: TEXT_MID }}>
            <div className="hidden sm:flex items-center gap-5">
              <span className="flex items-center gap-1.5 font-semibold">
                <MapPinIcon />
                Atatürk Cad. No:12, Kadıköy, İstanbul
              </span>
              <span className="text-gray-300">|</span>
              <a
                href="mailto:info@disklinigi.com"
                className="flex items-center gap-1.5 font-semibold transition-colors"
                onMouseEnter={(e) => (e.currentTarget.style.color = PRIMARY)}
                onMouseLeave={(e) => (e.currentTarget.style.color = TEXT_MID)}
              >
                <MailIcon />
                info@disklinigi.com
              </a>
            </div>
            <div className="flex items-center gap-2 ml-auto sm:ml-0">
              {[
                { icon: <FacebookIcon />, label: "Facebook" },
                { icon: <InstagramIcon />, label: "Instagram" },
                { icon: <TwitterIcon />, label: "Twitter/X" },
                { icon: <YoutubeIcon />, label: "YouTube" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-7 h-7 rounded-full text-white flex items-center justify-center transition-colors"
                  style={{ backgroundColor: PRIMARY }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = PRIMARY_HOVER)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = PRIMARY)}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brand Area */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-5 gap-6">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold select-none"
                style={{ backgroundColor: PRIMARY }}
              >
                DK
              </div>
              <div>
                <p className="text-lg font-bold leading-tight" style={{ color: TEXT_DARK }}>
                  Diş Kliniği
                </p>
                <p className="text-xs font-medium tracking-wide uppercase" style={{ color: PRIMARY }}>
                  Sağlıklı Gülüşler
                </p>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: PRIMARY_LIGHT, color: PRIMARY }}
              >
                <PhoneIcon />
              </div>
              <div>
                <p className="text-xs font-medium" style={{ color: TEXT_MID }}>
                  Bizi Arayın
                </p>
                <a
                  href="tel:+902121234567"
                  className="text-base font-bold transition-colors"
                  style={{ color: TEXT_DARK }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = PRIMARY)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = TEXT_DARK)}
                >
                  +90 212 123 45 67
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-1">
              {/* Ana Sayfa */}
              <li>
                <Link
                  href="/"
                  className="relative px-4 py-4 text-sm font-medium transition-colors block"
                  style={{ color: isActive("/") ? PRIMARY : TEXT_MID }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = PRIMARY)}
                  onMouseLeave={(e) => { if (!isActive("/")) e.currentTarget.style.color = TEXT_MID; }}
                >
                  Ana Sayfa
                  {isActive("/") && (
                    <span
                      className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                      style={{ backgroundColor: PRIMARY }}
                    />
                  )}
                </Link>
              </li>

              {/* Tedavilerimiz — dropdown */}
              <li
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={scheduleClose}
              >
                <button
                  className="relative flex items-center gap-1.5 px-4 py-4 text-sm font-medium transition-colors"
                  style={{ color: (dropdownOpen || isTedavilerActive) ? PRIMARY : TEXT_MID }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = PRIMARY)}
                  onMouseLeave={(e) => { if (!dropdownOpen && !isTedavilerActive) e.currentTarget.style.color = TEXT_MID; }}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  Tedavilerimiz
                  <ChevronDownIcon open={dropdownOpen} />
                  {isTedavilerActive && (
                    <span
                      className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                      style={{ backgroundColor: PRIMARY }}
                    />
                  )}
                </button>

                {/* Dropdown Panel */}
                <div
                  onMouseEnter={openDropdown}
                  onMouseLeave={scheduleClose}
                  style={{
                    opacity: dropdownOpen ? 1 : 0,
                    transform: dropdownOpen ? "translateY(0)" : "translateY(-8px)",
                    pointerEvents: dropdownOpen ? "auto" : "none",
                    transition: "opacity 0.18s ease, transform 0.18s ease",
                  }}
                  className="absolute top-full left-0 z-50 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                >

                  <ul className="py-2">
                    {tedavilerItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-5 py-2 text-sm transition-colors"
                          style={{ color: TEXT_MID }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = PRIMARY)}
                          onMouseLeave={(e) => (e.currentTarget.style.color = TEXT_MID)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/* Remaining links */}
              {regularNavLinks.slice(1).map(({ label, href }) => {
                const active = isActive(href);
                return (
                  <li key={label}>
                    <Link
                      href={href}
                      className="relative px-4 py-4 text-sm font-medium transition-colors block"
                      style={{ color: active ? PRIMARY : TEXT_MID }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = PRIMARY)}
                      onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = TEXT_MID; }}
                    >
                      {label}
                      {active && (
                        <span
                          className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                          style={{ backgroundColor: PRIMARY }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/randevu"
              className="hidden md:inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              style={{ backgroundColor: PRIMARY }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = PRIMARY_HOVER)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = PRIMARY)}
            >
              Randevu Oluştur
            </Link>

            <button
              className="md:hidden transition-colors"
              style={{ color: TEXT_MID }}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Menüyü aç/kapat"
              onMouseEnter={(e) => (e.currentTarget.style.color = PRIMARY)}
              onMouseLeave={(e) => (e.currentTarget.style.color = TEXT_MID)}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4">
            <ul className="flex flex-col gap-1 pt-3">
              {/* Ana Sayfa */}
              <li>
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium"
                  style={{
                    color: isActive("/") ? PRIMARY : TEXT_MID,
                    backgroundColor: isActive("/") ? PRIMARY_LIGHT : "transparent",
                  }}
                >
                  Ana Sayfa
                </Link>
              </li>

              {/* Tedavilerimiz accordion */}
              <li>
                <button
                  onClick={() => setMobileTedavilerOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    color: (mobileTedavilerOpen || isTedavilerActive) ? PRIMARY : TEXT_MID,
                    backgroundColor: isTedavilerActive ? PRIMARY_LIGHT : "transparent",
                  }}
                >
                  Tedavilerimiz
                  <ChevronDownIcon open={mobileTedavilerOpen} />
                </button>
                {mobileTedavilerOpen && (
                  <ul className="mt-1 ml-3 flex flex-col gap-0.5 border-l-2 pl-3" style={{ borderColor: PRIMARY_LIGHT }}>
                    {tedavilerItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={() => { setMobileOpen(false); setMobileTedavilerOpen(false); }}
                          className="block px-2 py-2 text-sm transition-colors"
                          style={{ color: TEXT_MID }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = PRIMARY)}
                          onMouseLeave={(e) => (e.currentTarget.style.color = TEXT_MID)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Remaining links */}
              {regularNavLinks.slice(1).map(({ label, href }) => {
                const active = isActive(href);
                return (
                  <li key={label}>
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                      style={{
                        color: active ? PRIMARY : TEXT_MID,
                        backgroundColor: active ? PRIMARY_LIGHT : "transparent",
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: TEXT_MID }}>
                <MapPinIcon />
                Atatürk Cad. No:12, Kadıköy, İstanbul
              </div>
              <a
                href="tel:+902121234567"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: TEXT_MID }}
                onMouseEnter={(e) => (e.currentTarget.style.color = PRIMARY)}
                onMouseLeave={(e) => (e.currentTarget.style.color = TEXT_MID)}
              >
                <PhoneIcon />
                +90 212 123 45 67
              </a>
              <Link
                href="/randevu"
                onClick={() => setMobileOpen(false)}
                className="flex justify-center text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
                style={{ backgroundColor: PRIMARY }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = PRIMARY_HOVER)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = PRIMARY)}
              >
                Randevu Oluştur
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
