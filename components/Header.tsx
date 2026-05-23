"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

const INK = "#1C1A15";
const INK_MID = "#3D3830";
const GOLD = "#8B7355";
const GOLD_BRIGHT = "#B8966A";
const CREAM = "#FAF7F2";
const BORDER = "#DDD0B8";

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
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ChevronDownIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="13"
      height="13"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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
    <header
      className="w-full fixed top-0 left-0 z-50 bg-[#FAF7F2] font-outfit"
      style={{ borderBottom: `1px solid ${BORDER}` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div
              className="w-9 h-9 flex items-center justify-center border shrink-0"
              style={{ borderColor: `${GOLD}60` }}
            >
              <span className="font-cormorant text-sm font-bold" style={{ color: GOLD_BRIGHT }}>DK</span>
            </div>
            <div>
              <p className="font-cormorant text-[15px] font-medium leading-tight" style={{ color: INK }}>
                Diş Kliniği
              </p>
              <p className="text-[10px] font-medium tracking-[0.18em] uppercase" style={{ color: GOLD }}>
                Sağlıklı Gülüşler
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex flex-1 items-center justify-center">
            <ul className="flex items-center gap-0.5">

              {/* Ana Sayfa */}
              <li>
                <Link
                  href="/"
                  className="relative px-4 py-2 text-sm font-medium transition-colors block"
                  style={{ color: isActive("/") ? GOLD : INK_MID }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                  onMouseLeave={(e) => { if (!isActive("/")) e.currentTarget.style.color = INK_MID; }}
                >
                  Ana Sayfa
                  {isActive("/") && (
                    <span className="absolute bottom-0 left-4 right-4 h-px" style={{ backgroundColor: GOLD }} />
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
                  style={{ color: (dropdownOpen || isTedavilerActive) ? GOLD : INK_MID }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                  onMouseLeave={(e) => { if (!dropdownOpen && !isTedavilerActive) e.currentTarget.style.color = INK_MID; }}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  Tedavilerimiz
                  <ChevronDownIcon open={dropdownOpen} />
                  {isTedavilerActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-px" style={{ backgroundColor: GOLD }} />
                  )}
                </button>

                <div
                  onMouseEnter={openDropdown}
                  onMouseLeave={scheduleClose}
                  style={{
                    opacity: dropdownOpen ? 1 : 0,
                    transform: dropdownOpen ? "translateY(0)" : "translateY(-6px)",
                    pointerEvents: dropdownOpen ? "auto" : "none",
                    transition: "opacity 0.18s ease, transform 0.18s ease",
                    borderColor: BORDER,
                  }}
                  className="absolute top-full left-0 z-50 mt-1 w-72 bg-[#FAF7F2] border shadow-xl overflow-hidden"
                >
                  <ul className="py-1.5">
                    {tedavilerItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-5 py-2.5 text-sm transition-colors"
                          style={{ color: INK_MID }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = GOLD;
                            e.currentTarget.style.backgroundColor = "#F2ECE0";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = INK_MID;
                            e.currentTarget.style.backgroundColor = "transparent";
                          }}
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
                      style={{ color: active ? GOLD : INK_MID }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                      onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = INK_MID; }}
                    >
                      {label}
                      {active && (
                        <span className="absolute bottom-0 left-4 right-4 h-px" style={{ backgroundColor: GOLD }} />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA — desktop */}
          <div className="hidden md:flex shrink-0 ml-auto">
            <Link
              href="/randevu"
              className="inline-flex items-center text-[#FAF7F2] text-sm font-medium px-5 py-2.5 tracking-wide transition-colors"
              style={{ backgroundColor: INK }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2A261E")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = INK)}
            >
              Randevu Al
            </Link>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden ml-auto transition-colors"
            style={{ color: INK_MID }}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Menüyü aç/kapat"
            onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
            onMouseLeave={(e) => (e.currentTarget.style.color = INK_MID)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FAF7F2] px-4 pb-4" style={{ borderTop: `1px solid ${BORDER}` }}>
          <ul className="flex flex-col gap-0.5 pt-2">
            <li>
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium transition-colors"
                style={{
                  color: isActive("/") ? GOLD : INK_MID,
                  backgroundColor: isActive("/") ? "#F2ECE0" : "transparent",
                }}
              >
                Ana Sayfa
              </Link>
            </li>

            {/* Tedavilerimiz accordion */}
            <li>
              <button
                onClick={() => setMobileTedavilerOpen((prev) => !prev)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium transition-colors"
                style={{
                  color: (mobileTedavilerOpen || isTedavilerActive) ? GOLD : INK_MID,
                  backgroundColor: isTedavilerActive ? "#F2ECE0" : "transparent",
                }}
              >
                Tedavilerimiz
                <ChevronDownIcon open={mobileTedavilerOpen} />
              </button>
              {mobileTedavilerOpen && (
                <ul className="mt-1 ml-3 flex flex-col gap-0 border-l pl-3" style={{ borderColor: BORDER }}>
                  {tedavilerItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => { setMobileOpen(false); setMobileTedavilerOpen(false); }}
                        className="block px-2 py-2 text-sm transition-colors"
                        style={{ color: INK_MID }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = INK_MID)}
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
                    className="block px-3 py-2.5 text-sm font-medium transition-colors"
                    style={{
                      color: active ? GOLD : INK_MID,
                      backgroundColor: active ? "#F2ECE0" : "transparent",
                    }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 pt-4" style={{ borderTop: `1px solid ${BORDER}` }}>
            <Link
              href="/randevu"
              onClick={() => setMobileOpen(false)}
              className="flex justify-center text-[#FAF7F2] text-sm font-medium px-5 py-3 tracking-wide transition-colors"
              style={{ backgroundColor: INK }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2A261E")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = INK)}
            >
              Randevu Al
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
