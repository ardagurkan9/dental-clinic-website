"use client";

import { useState, useRef, useEffect, type TransitionEvent } from "react";
import Link from "next/link";

// ─── Icons ──────────────────────────────────────────────────────────────────

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-3.5 h-3.5 fill-[#B8966A] text-[#B8966A]" viewBox="0 0 24 24">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="w-4 h-4 transition-transform duration-300"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// ─── Responsive visible-card count ──────────────────────────────────────────

function useVisibleCount() {
  const [count, setCount] = useState(4);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setCount(4);
      else if (window.innerWidth >= 640) setCount(2);
      else setCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

// ─── Overline helper ────────────────────────────────────────────────────────

function Overline({ children, centered = false }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${centered ? "justify-center" : ""}`}>
      <div className="h-px w-8 bg-[#8B7355] shrink-0" />
      <span className="text-[#8B7355] text-[11px] tracking-[0.22em] uppercase font-medium font-outfit">
        {children}
      </span>
      {centered && <div className="h-px w-8 bg-[#8B7355] shrink-0" />}
    </div>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  { href: "/tedaviler/diseti-hastaliklari", title: "Dişeti Hastalıkları", desc: "Dişeti hastalıklarını erken teşhis ve ileri tedavi yöntemleriyle, kök yüzeyi düzlemesi ve cerrahi uygulamalarla tedavi ediyoruz." },
  { href: "/tedaviler/implant", title: "İmplant & Çene Cerrahisi", desc: "Eksik dişlerinizi titanyum köklere sahip, doğal görünümlü ve ömür boyu dayanıklı implantlarla tamamlıyoruz." },
  { href: "/tedaviler/mikrocerrahi", title: "Mikrocerrahi & Plastik Cerrahi", desc: "Periodontal plastik cerrahi ve mikroskop destekli hassas müdahalelerle estetik ve fonksiyonel sonuçlar elde ediyoruz." },
  { href: "/tedaviler/kemik-grefti", title: "Kemik Grefti & Rejenerasyon", desc: "Kemik ve doku kayıplarını rejeneratif tekniklerle yeniden yapılandırarak implant için sağlam bir zemin oluşturuyoruz." },
  { href: "/tedaviler/protetik", title: "Estetik Protetik & Zirkonyum", desc: "Metal içermeyen, biyouyumlu zirkonyum kronlarla doğal diş görünümünü yakalayın. Sağlam, estetik ve uzun ömürlü." },
  { href: "/tedaviler/gulus-tasarimi", title: "Gülüş Tasarımı", desc: "Dijital gülüş tasarımı teknolojisiyle tedaviye başlamadan önce sonucunuzu görün. Kişiye özel estetik çözümler." },
  { href: "/tedaviler/kanal", title: "Kanal Tedavisi", desc: "Ağrılı diş sinir sorunlarını, modern nikel-titanyum eğeleme sistemi ve son teknoloji ekipmanlarla ağrısız biçimde tedavi ediyoruz." },
  { href: "/tedaviler/bruksizm", title: "Bruksizm & Masseter Botoksu", desc: "Diş gıcırdatma ve çene kaslarını rahatlatan masseter botoksu uygulamalarıyla ağrılarınızı ve estetik kaygılarınızı gideriyoruz." },
  { href: "/tedaviler/dijital", title: "Dijital Diş Hekimliği", desc: "CAD/CAM teknolojisi, dijital ölçü ve 3D planlama sistemleriyle daha hızlı, hassas ve konforlu tedavi sunuyoruz." },
];

const reviews = [
  { name: "Mehmet K.", date: "Mart 2025", treatment: "Dental İmplant", text: "İmplant tedavim için başka kliniklerle görüştüm ama bu klinik gerçekten fark yaratıyor. Hem doktor hem ekip son derece ilgili ve profesyonel. Sonuçtan çok memnun kaldım." },
  { name: "Ayşe S.", date: "Şubat 2025", treatment: "Gülüş Tasarımı", text: "Gülüş tasarımım hayatımı değiştirdi. Tedaviye başlamadan önce sonucu görmek beni çok rahatlattı. Şimdi her fırsatta gülümsüyorum!" },
  { name: "Fatma D.", date: "Ocak 2025", treatment: "Diş Beyazlatma", text: "Diş beyazlatma işlemim tek seansta tamamlandı ve inanılmaz bir fark oldu. Klinik çok temiz ve hijyenik. Herkese gönül rahatlığıyla tavsiye ederim." },
];

const beforeAfterItems = [
  { label: "Dental İmplant" },
  { label: "Gülüş Tasarımı" },
  { label: "Zirkonyum Kron" },
];

const steps = [
  { num: "01", title: "WhatsApp'tan Randevu Alın", desc: "Sadece birkaç mesajla ücretsiz ilk muayene randevunuzu kolayca oluşturun." },
  { num: "02", title: "Ücretsiz Muayene & Plan", desc: "Uzman hekimimiz ağız sağlığınızı değerlendirir ve size özel bir tedavi planı hazırlar." },
  { num: "03", title: "Hayalinizdeki Gülüşe Kavuşun", desc: "Modern ekipmanlar ve uzman el birliğiyle en kısa sürede mükemmel sonuca ulaşın." },
];

const faqs = [
  { q: "İmplant tedavisi ağrılı mıdır?", a: "Hayır. İmplant tedavisi lokal anestezi altında gerçekleştirildiği için işlem sırasında hiçbir ağrı hissetmezsiniz. İşlem sonrası hafif bir hassasiyet olabilir, bu da birkaç gün içinde tamamen geçer." },
  { q: "Diş beyazlatma ne kadar sürer ve sonuçlar kalıcı mıdır?", a: "Kliniğimizde profesyonel beyazlatma genellikle tek seansta (yaklaşık 60–90 dakika) tamamlanır. Düzenli bakım ve doğru beslenme alışkanlıklarıyla sonuçlar 1–2 yıl veya daha uzun süre kalıcı olabilir." },
  { q: "Zirkonyum kronlar ne kadar dayanıklıdır?", a: "İyi bakım koşullarında zirkonyum kronlar 15–20 yıl veya daha uzun süre kullanılabilir. Metal içermedikleri için hem daha sağlıklı hem de estetik bir seçenektir." },
  { q: "Gülüş tasarımı kimlere uygulanabilir?", a: "18 yaş ve üzeri, genel ağız sağlığı iyi olan herkese uygulanabilir. İlk muayenede hekimimiz sizi değerlendirerek en uygun tedavi planını hazırlar." },
  { q: "Taksit imkânı var mıdır?", a: "Evet, tüm tedavilerimizde 12 aya kadar faizsiz taksit imkânı sunulmaktadır. Detaylı ödeme seçenekleri için kliniğimizle iletişime geçebilirsiniz." },
  { q: "İlk muayene ücretli midir?", a: "Hayır, ilk muayene ve tedavi planlaması tamamen ücretsizdir. WhatsApp üzerinden randevu oluşturmanız yeterlidir." },
];

const WA_LINK = "https://wa.me/902121234567?text=Merhaba%2C%20randevu%20almak%20istiyorum.";

// ─── Component ───────────────────────────────────────────────────────────────

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ── Carousel ────────────────────────────────────────────────────────────────
  const [carouselCards, setCarouselCards] = useState(services);
  const [slideOffset, setSlideOffset] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef<"next" | "prev" | null>(null);
  const visibleCount = useVisibleCount();

  const slideStep = (): number => {
    const first = trackRef.current?.children[0] as HTMLElement | undefined;
    const second = trackRef.current?.children[1] as HTMLElement | undefined;
    if (!first || !second) return 0;
    return second.offsetLeft - first.offsetLeft;
  };

  const setTransition = (enabled: boolean) => {
    if (trackRef.current) {
      trackRef.current.style.transition = enabled
        ? "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        : "none";
    }
  };

  useEffect(() => {
    setTransition(false);
    setSlideOffset(0);
    setIsSliding(false);
    directionRef.current = null;
    requestAnimationFrame(() => setTransition(true));
  }, [visibleCount]);

  const goNext = () => {
    if (isSliding) return;
    const step = slideStep();
    directionRef.current = "next";
    setIsSliding(true);
    setTransition(false);
    trackRef.current?.getBoundingClientRect();
    requestAnimationFrame(() => { setTransition(true); setSlideOffset(step); });
  };

  const goPrev = () => {
    if (isSliding) return;
    const step = slideStep();
    directionRef.current = "prev";
    setIsSliding(true);
    setTransition(false);
    setCarouselCards((cards) => [cards[cards.length - 1], ...cards.slice(0, -1)]);
    setSlideOffset(step);
    requestAnimationFrame(() => { setTransition(true); setSlideOffset(0); });
  };

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") return;
    if (directionRef.current === "next") {
      setTransition(false);
      setCarouselCards((cards) => [...cards.slice(1), cards[0]]);
      setSlideOffset(0);
      requestAnimationFrame(() => setTransition(true));
    }
    directionRef.current = null;
    setIsSliding(false);
  };

  return (
    <div className="bg-[#FAF7F2] overflow-x-hidden font-outfit">

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#FAF7F2]">
        {/* Subtle dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #1C1A15 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        {/* Left accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#B8966A]/35 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center w-full">

          {/* Left: editorial headline */}
          <div>
            <div
              className="animate-fade-up flex items-center gap-3 mb-8"
              style={{ animationDelay: "0ms" }}
            >
              <div className="h-px w-10 bg-[#8B7355]" />
              <span className="text-[#8B7355] text-[11px] tracking-[0.22em] uppercase font-medium">
                Kadıköy, İstanbul · Ücretsiz İlk Muayene
              </span>
            </div>

            <h1 className="font-cormorant leading-[1.0] mb-8">
              <span
                className="block font-light italic text-[#1C1A15] animate-fade-up"
                style={{ fontSize: "clamp(48px,7.5vw,84px)", animationDelay: "80ms" }}
              >
                Gülüşünüzü
              </span>
              <span
                className="block font-light text-[#1C1A15] animate-fade-up"
                style={{ fontSize: "clamp(48px,7.5vw,84px)", animationDelay: "160ms" }}
              >
                güvenle yeniden
              </span>
              <span
                className="block font-bold text-[#8B7355] animate-fade-up"
                style={{ fontSize: "clamp(48px,7.5vw,84px)", animationDelay: "240ms" }}
              >
                tasarlıyoruz.
              </span>
            </h1>

            <p
              className="text-[#6B5F4E] text-lg leading-relaxed mb-10 max-w-[480px] animate-fade-up"
              style={{ animationDelay: "320ms" }}
            >
              15 yılı aşkın deneyim ve son teknoloji ekipmanlarımızla hayalinizdeki gülüşe en kısa sürede kavuşturuyoruz.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[#1C1A15] text-[#FAF7F2] font-medium px-8 py-4 text-sm tracking-wide hover:bg-[#2A261E] transition-colors duration-300"
              >
                <WhatsAppIcon />
                WhatsApp ile Randevu Al
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <Link
                href="/tedaviler/implant"
                className="inline-flex items-center gap-2 border border-[#DDD0B8] text-[#1C1A15] font-medium px-8 py-4 text-sm tracking-wide hover:border-[#8B7355] hover:text-[#8B7355] transition-all duration-300"
              >
                Tedavilerimiz
              </Link>
            </div>
          </div>

          {/* Right: concentric ring ornament */}
          <div
            className="hidden lg:flex items-center justify-center relative shrink-0 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            {/* Outer ring */}
            <div className="relative w-[400px] h-[400px] rounded-full border border-[#DDD0B8] flex items-center justify-center">

              {/* Cardinal dots on outer ring */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#B8966A]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#B8966A]" />
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#B8966A]" />
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#B8966A]" />

              {/* Mid ring */}
              <div className="w-[295px] h-[295px] rounded-full border border-[#B8966A]/30 flex items-center justify-center">

                {/* Inner filled circle */}
                <div className="w-[190px] h-[190px] rounded-full bg-[#8B7355]/[0.06] border border-[#8B7355]/20 flex items-center justify-center">
                  {/* Tooth silhouette */}
                  <svg className="w-16 h-16 text-[#B8966A]/45" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 64 64">
                    <path d="M32 6C22 6 14 14 14 24c0 5 1.5 9.5 3 13 2 5 4.5 19 6.5 19 1.5 0 3-6 8.5-6s7 6 8.5 6c2 0 4.5-14 6.5-19 1.5-3.5 3-8 3-13 0-10-8-18-18-18z" />
                    <path strokeLinecap="round" d="M24 24c0-4 4-7 8-7s8 3 8 7" />
                  </svg>
                </div>
              </div>

              {/* Experience badge — bottom-right */}
              <div className="absolute -bottom-3 -right-8 bg-[#1C1A15] px-6 py-5 shadow-2xl z-10">
                <p className="font-cormorant text-5xl font-bold leading-none text-[#B8966A]">15+</p>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#FAF7F2]/50 mt-1.5">Yıl Deneyim</p>
              </div>

              {/* Patients badge — top-left */}
              <div className="absolute -top-3 -left-8 bg-[#FAF7F2] border border-[#DDD0B8] px-5 py-3 shadow-sm z-10">
                <p className="font-cormorant text-2xl font-bold text-[#1C1A15] leading-none">5.000+</p>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#6B5F4E] mt-1">Mutlu Hasta</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DDD0B8] to-transparent pointer-events-none" />
      </section>

      {/* ══════════════════════════════════════
          2. STATS BAR
      ══════════════════════════════════════ */}
      <section className="bg-[#1C1A15]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#2A261E]">
            {[
              { value: "15+", label: "Yıl Deneyim" },
              { value: "5.000+", label: "Mutlu Hasta" },
              { value: "%98", label: "Memnuniyet" },
              { value: "JCI", label: "Akreditasyonu" },
            ].map(({ value, label }) => (
              <div key={label} className="py-8 px-6 text-center">
                <p className="font-cormorant text-4xl sm:text-5xl font-bold text-[#B8966A]">{value}</p>
                <p className="text-[#9B8E7D] text-[11px] tracking-[0.18em] uppercase mt-2 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. SERVICES CAROUSEL
      ══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-[#2A261E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <Overline>Tedavilerimiz</Overline>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-light text-[#FAF7F2] leading-tight max-w-lg">
              Güzel bir gülüş için{" "}
              <span className="italic">her şey burada</span>
            </h2>
          </div>

          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={goPrev}
              aria-label="Önceki"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 border border-[#3D3830] flex items-center justify-center text-[#9B8E7D] hover:border-[#8B7355] hover:text-[#B8966A] transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="overflow-hidden mx-14">
              <div
                ref={trackRef}
                className="flex gap-5"
                style={{ transform: `translateX(-${slideOffset}px)` }}
                onTransitionEnd={handleTransitionEnd}
              >
                {carouselCards.map(({ href, title, desc }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group bg-[#1C1A15] border border-[#3D3830] p-7 hover:border-[#8B7355] transition-all duration-300 flex flex-col flex-shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8B7355] mb-6 group-hover:bg-[#B8966A] transition-colors" />
                    <h3 className="font-cormorant text-xl font-medium text-[#FAF7F2] mb-3 leading-tight">{title}</h3>
                    <p className="text-[#9B8E7D] text-sm leading-relaxed flex-1">{desc}</p>
                    <div className="mt-6 flex items-center gap-1.5 text-[#8B7355] text-[11px] font-medium tracking-widest uppercase group-hover:text-[#B8966A] transition-colors">
                      Detaylı Bilgi
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={goNext}
              aria-label="Sonraki"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 border border-[#3D3830] flex items-center justify-center text-[#9B8E7D] hover:border-[#8B7355] hover:text-[#B8966A] transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. TRUST BADGES
      ══════════════════════════════════════ */}
      <section className="py-14 bg-[#F2ECE0] border-y border-[#DDD0B8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { sym: "◈", title: "JCI Akreditasyonu", desc: "Uluslararası kalite standardı" },
              { sym: "◉", title: "Dijital Görüntüleme", desc: "3D tomografi ve smile design" },
              { sym: "◇", title: "Taksit İmkânı", desc: "12 aya kadar faizsiz" },
              { sym: "◆", title: "Esnek Randevu", desc: "Hafta sonu da hizmetinizdeyiz" },
            ].map(({ sym, title, desc }) => (
              <div key={title} className="bg-[#FAF7F2] border border-[#DDD0B8] p-6 flex items-start gap-4">
                <span className="text-xl text-[#8B7355] leading-none mt-0.5 shrink-0">{sym}</span>
                <div>
                  <h3 className="font-outfit font-semibold text-[#1C1A15] text-sm mb-1">{title}</h3>
                  <p className="text-[#9B8E7D] text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. CLINIC INTRO
      ══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image with ornamental frame */}
            <div className="relative">
              {/* Offset decorative border */}
              <div className="absolute inset-5 border border-[#B8966A]/20 pointer-events-none z-10" />

              <div className="aspect-[4/3] bg-gradient-to-br from-[#F2ECE0] to-[#EDE0C8] flex items-center justify-center relative overflow-hidden">
                {/* Corner ornaments */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-[#B8966A]/50" />
                <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-[#B8966A]/50" />
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-[#B8966A]/50" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-[#B8966A]/50" />

                <div className="text-center">
                  <svg className="w-14 h-14 mx-auto mb-3 text-[#B8966A]/40" fill="none" stroke="currentColor" strokeWidth={0.8} viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="0" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#B8966A]/60">Klinik Fotoğrafı</p>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#1C1A15] px-7 py-5 shadow-2xl z-20">
                <p className="font-cormorant text-5xl font-bold text-[#B8966A] leading-none">15+</p>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#FAF7F2]/50 mt-1.5">Yıl Deneyim</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <Overline>Kliniğimiz Hakkında</Overline>
              <h2 className="font-cormorant text-4xl sm:text-5xl leading-tight mb-6">
                <span className="font-light italic text-[#1C1A15]">Sağlığınız ve estetiğiniz için </span>
                <span className="font-bold text-[#1C1A15]">en iyisini </span>
                <span className="font-light italic text-[#8B7355]">sunuyoruz</span>
              </h2>
              <p className="text-[#6B5F4E] leading-relaxed mb-8 text-[15px]">
                2009 yılından bu yana Kadıköy&apos;de hizmet veren kliniğimiz, alanında uzmanlaşmış hekim kadrosu ve son teknoloji ekipmanlarıyla binlerce hastanın hayatını güzel bir gülüşle değiştirdi.
              </p>

              <ul className="space-y-3.5 mb-10">
                {[
                  "JCI akreditasyonlu, uluslararası standartlarda hizmet",
                  "Son teknoloji dijital görüntüleme ve tasarım sistemleri",
                  "Uzman ve deneyimli hekim kadrosu",
                  "Steril, konforlu ve sıcak tedavi ortamı",
                  "Tüm tedavilerde esnek taksit imkânı",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#6B5F4E] text-sm">
                    <span className="text-[#8B7355] mt-0.5 shrink-0 text-base leading-none">◈</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/hakkimda"
                className="group inline-flex items-center gap-3 bg-[#1C1A15] text-[#FAF7F2] font-medium px-8 py-4 text-sm tracking-wide hover:bg-[#2A261E] transition-colors duration-300"
              >
                Daha Fazla Bilgi
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. PATIENT REVIEWS
      ══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-[#1C1A15]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <Overline>Hasta Yorumları</Overline>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-light text-[#FAF7F2]">
              Hastalarımız <span className="italic">ne diyor?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map(({ name, date, treatment, text }) => (
              <div key={name} className="bg-[#2A261E] border border-[#3D3830] p-8 flex flex-col relative">
                <span className="font-cormorant text-8xl font-bold text-[#8B7355]/15 leading-none absolute top-3 right-5 select-none pointer-events-none">&ldquo;</span>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="text-[#9B8E7D] text-sm leading-relaxed flex-1 mb-6 relative z-10">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="border-t border-[#3D3830] pt-5 flex items-end justify-between">
                  <div>
                    <p className="font-cormorant text-lg font-medium text-[#FAF7F2] leading-tight">{name}</p>
                    <p className="text-[#8B7355] text-[11px] tracking-widest uppercase mt-0.5">{treatment}</p>
                  </div>
                  <span className="text-[#6B5F4E] text-xs">{date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. BEFORE / AFTER GALLERY
      ══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14 text-center">
            <Overline centered>Önce & Sonra</Overline>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-light text-[#1C1A15]">
              Dönüşüm <span className="italic">galerimiz</span>
            </h2>
            <p className="text-[#6B5F4E] mt-3 text-sm max-w-sm mx-auto">
              Gerçek hastalarımızın tedavi öncesi ve sonrasına ait görüntüler.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {beforeAfterItems.map(({ label }) => (
              <div key={label} className="overflow-hidden border border-[#DDD0B8]">
                <div className="grid grid-cols-2 h-56 relative">
                  {/* Divider */}
                  <div className="absolute inset-y-0 left-1/2 -translate-x-px w-px bg-white z-10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-white border border-[#DDD0B8] z-20 flex items-center justify-center">
                    <div className="w-3 h-px bg-[#B8966A]" />
                    <div className="w-px h-3 bg-[#B8966A] absolute" />
                  </div>

                  {/* Before */}
                  <div className="bg-[#F2ECE0] flex flex-col items-center justify-center gap-2">
                    <span className="text-[9px] font-bold text-[#9B8E7D] uppercase tracking-[0.2em]">Önce</span>
                    <div className="w-11 h-11 rounded-full bg-[#DDD0B8]/40 flex items-center justify-center">
                      <svg className="w-5.5 h-5.5 text-[#9B8E7D] w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 15s1.5-1.5 4-1.5 4 1.5 4 1.5" />
                        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={2.5} />
                        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={2.5} />
                      </svg>
                    </div>
                  </div>

                  {/* After */}
                  <div className="bg-[#EDE0C8] flex flex-col items-center justify-center gap-2">
                    <span className="text-[9px] font-bold text-[#8B7355] uppercase tracking-[0.2em]">Sonra</span>
                    <div className="w-11 h-11 rounded-full bg-[#B8966A]/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#8B7355]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 13s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={2.5} />
                        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={2.5} />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="bg-white px-5 py-4 border-t border-[#DDD0B8]">
                  <p className="font-cormorant text-base font-medium italic text-[#1C1A15]">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. 3-STEP PROCESS
      ══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-[#2A261E] relative overflow-hidden">
        {/* Ghost "3" in background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-cormorant font-bold text-[#FAF7F2]/[0.015]" style={{ fontSize: "300px", lineHeight: 1 }}>3</span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Overline centered>Nasıl Çalışır?</Overline>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-light text-[#FAF7F2]">
              3 Adımda <span className="italic">Hayalinizdeki Gülüş</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative">
            {/* Desktop connector */}
            <div className="hidden md:block absolute top-[22px] left-[calc(16.67%+22px)] right-[calc(16.67%+22px)] h-px bg-[#3D3830]" />

            {steps.map(({ num, title, desc }) => (
              <div key={num} className="flex flex-col items-center text-center relative">
                <div className="relative mb-8">
                  {/* Ghost number */}
                  <span className="font-cormorant text-[96px] font-bold text-[#8B7355]/10 leading-none absolute -top-5 left-1/2 -translate-x-1/2 select-none pointer-events-none">{num}</span>
                  {/* Number box */}
                  <div className="relative z-10 w-11 h-11 border border-[#8B7355]/50 flex items-center justify-center bg-[#2A261E]">
                    <span className="font-cormorant text-lg font-medium text-[#B8966A]">{num}</span>
                  </div>
                </div>
                <h3 className="font-cormorant text-2xl font-medium text-[#FAF7F2] mb-3 leading-tight">{title}</h3>
                <p className="text-[#9B8E7D] text-sm leading-relaxed max-w-xs">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#FAF7F2] text-[#1C1A15] font-medium px-8 py-4 text-sm tracking-wide hover:bg-[#EDE0C8] transition-colors duration-300"
            >
              <span className="text-green-600"><WhatsAppIcon /></span>
              Hemen Başlayın
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. FAQ
      ══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-[#FAF7F2]">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-14">
            <Overline centered>Sık Sorulan Sorular</Overline>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-light text-[#1C1A15]">
              Merak <span className="italic">ettikleriniz</span>
            </h2>
          </div>

          <div className="divide-y divide-[#DDD0B8]">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className={`transition-colors duration-200 ${openFaq === i ? "bg-[#F2ECE0]" : ""}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-5 text-left gap-6"
                >
                  <span className={`font-outfit font-medium text-sm sm:text-base transition-colors ${openFaq === i ? "text-[#1C1A15]" : "text-[#3D3830]"}`}>
                    {q}
                  </span>
                  <span className={`shrink-0 transition-colors ${openFaq === i ? "text-[#8B7355]" : "text-[#9B8E7D]"}`}>
                    <ChevronIcon open={openFaq === i} />
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-6">
                    <p className="text-[#6B5F4E] text-sm leading-relaxed">{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          10. CTA BANNER
      ══════════════════════════════════════ */}
      <section className="bg-[#1C1A15] py-20 sm:py-24 relative overflow-hidden">
        {/* Concentric ring decoration */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <div className="w-[700px] h-[700px] rounded-full border border-white/[0.018]" />
          <div className="w-[500px] h-[500px] rounded-full border border-white/[0.025] absolute" />
          <div className="w-[300px] h-[300px] rounded-full border border-white/[0.035] absolute" />
        </div>

        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 max-w-[60px] bg-[#8B7355]/40" />
            <span className="text-[#8B7355] text-[10px] tracking-[0.28em] uppercase font-medium">Randevu Al</span>
            <div className="h-px flex-1 max-w-[60px] bg-[#8B7355]/40" />
          </div>

          <h2 className="font-cormorant leading-tight mb-4" style={{ fontSize: "clamp(36px,5vw,60px)" }}>
            <span className="font-light italic text-[#FAF7F2]">Gülüşünüzü değiştirmeye</span>
            <br />
            <span className="font-bold text-[#B8966A]">hazır mısınız?</span>
          </h2>

          <p className="text-[#9B8E7D] text-sm leading-relaxed mb-10 max-w-md mx-auto">
            İlk muayene tamamen ücretsiz. WhatsApp üzerinden randevu alın, uzman hekimimiz size en uygun tedavi planını hazırlasın.
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-medium px-10 py-4 text-sm tracking-wide transition-colors duration-300"
          >
            <WhatsAppIcon />
            WhatsApp ile Randevu Al
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════
          11. FOOTER
      ══════════════════════════════════════ */}
      <footer className="bg-[#12100D] text-[#6B5F4E]">
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
                  <a href="tel:+902121234567" className="hover:text-[#B8966A] transition-colors duration-200">
                    +90 212 123 45 67
                  </a>
                </li>
                <li>
                  <a href="mailto:info@disklinigi.com" className="hover:text-[#B8966A] transition-colors duration-200">
                    info@disklinigi.com
                  </a>
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

    </div>
  );
}
