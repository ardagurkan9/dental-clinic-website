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
  { label: "Dişeti Hastalıkları Tedavileri", href: "/tedaviler/diseti-hastaliklari" },
  { label: "İmplant & Çene Cerrahisi", href: "/tedaviler/implant" },
  { label: "Mikrocerrahi ve Plastik Cerrahi", href: "/tedaviler/mikrocerrahi" },
  { label: "Kemik Grefti & Rejeneratif Uygulamalar", href: "/tedaviler/kemik-grefti" },
  { label: "Estetik Protetik & Restoratif Uygulamalar", href: "/tedaviler/protetik" },
  { label: "Gülüş Tasarımı", href: "/tedaviler/gulus-tasarimi" },
  { label: "Kanal Tedavisi", href: "/tedaviler/kanal" },
  { label: "Bruksizm Tedavisi & Masseter Botoksu", href: "/tedaviler/bruksizm" },
  { label: "Dijital Diş Hekimliği", href: "/tedaviler/dijital" },
];

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

  const navLinks = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hakkımda", href: "/hakkimda" },
    { label: "İletişim", href: "/iletisim" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">

          {/* Logo — left */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold select-none"
              style={{ backgroundColor: PRIMARY }}
            >
              DK
            </div>
            <div>
              <p className="text-base font-bold leading-tight" style={{ color: TEXT_DARK }}>
                Diş Kliniği
              </p>
              <p className="text-xs font-medium tracking-wide uppercase" style={{ color: PRIMARY }}>
                Sağlıklı Gülüşler
              </p>
            </div>
          </Link>

          {/* Desktop nav — center */}
          <nav className="hidden md:flex flex-1 items-center justify-center">
            <ul className="flex items-center gap-1">
              {/* Ana Sayfa */}
              <li>
                <Link
                  href="/"
                  className="relative px-4 py-2 text-sm font-medium transition-colors block"
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

              {/* Tedavilerimiz dropdown */}
              <li
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={scheduleClose}
              >
                <button
                  className="relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors"
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

                <div
                  onMouseEnter={openDropdown}
                  onMouseLeave={scheduleClose}
                  style={{
                    opacity: dropdownOpen ? 1 : 0,
                    transform: dropdownOpen ? "translateY(0)" : "translateY(-8px)",
                    pointerEvents: dropdownOpen ? "auto" : "none",
                    transition: "opacity 0.18s ease, transform 0.18s ease",
                  }}
                  className="absolute top-full left-0 z-50 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
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

              {/* Hakkımda & İletişim */}
              {navLinks.slice(1).map(({ label, href }) => {
                const active = isActive(href);
                return (
                  <li key={label}>
                    <Link
                      href={href}
                      className="relative px-4 py-2 text-sm font-medium transition-colors block"
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
          </nav>

          {/* CTA button — right */}
          <div className="hidden md:flex shrink-0 ml-auto">
            <Link
              href="/randevu"
              className="inline-flex items-center text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              style={{ backgroundColor: PRIMARY }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = PRIMARY_HOVER)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = PRIMARY)}
            >
              Randevu Al
            </Link>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden ml-auto transition-colors"
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

            {navLinks.slice(1).map(({ label, href }) => {
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

          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link
              href="/randevu"
              onClick={() => setMobileOpen(false)}
              className="flex justify-center text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
              style={{ backgroundColor: PRIMARY }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = PRIMARY_HOVER)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = PRIMARY)}
            >
              Randevu Al
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
