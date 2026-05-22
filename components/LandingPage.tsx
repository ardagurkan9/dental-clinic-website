"use client";

import { useState, useRef, useEffect, type TransitionEvent } from "react";
import Link from "next/link";

// ─── Icon primitives ────────────────────────────────────────────────────────
function Svg({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-3 h-3 text-[#0EA5E9]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="w-4 h-4 transition-transform duration-200"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
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

// ─── Data ───────────────────────────────────────────────────────────────────
const services = [
  {
    href: "/tedaviler/diseti-hastaliklari",
    title: "Dişeti Hastalıkları",
    desc: "Dişeti hastalıklarını erken teşhis ve ileri tedavi yöntemleriyle, kök yüzeyi düzlemesi ve cerrahi uygulamalarla tedavi ediyoruz.",
    icon: (
      <Svg className="w-7 h-7 text-[#0EA5E9]">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </Svg>
    ),
  },
  {
    href: "/tedaviler/implant",
    title: "İmplant & Çene Cerrahisi",
    desc: "Eksik dişlerinizi titanyum köklere sahip, doğal görünümlü ve ömür boyu dayanıklı implantlarla tamamlıyoruz.",
    icon: (
      <Svg className="w-7 h-7 text-[#0EA5E9]">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </Svg>
    ),
  },
  {
    href: "/tedaviler/mikrocerrahi",
    title: "Mikrocerrahi & Plastik Cerrahi",
    desc: "Periodontal plastik cerrahi ve mikroskop destekli hassas müdahalelerle estetik ve fonksiyonel sonuçlar elde ediyoruz.",
    icon: (
      <Svg className="w-7 h-7 text-[#0EA5E9]">
        <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </Svg>
    ),
  },
  {
    href: "/tedaviler/kemik-grefti",
    title: "Kemik Grefti & Rejenerasyon",
    desc: "Kemik ve doku kayıplarını rejeneratif tekniklerle yeniden yapılandırarak implant için sağlam bir zemin oluşturuyoruz.",
    icon: (
      <Svg className="w-7 h-7 text-[#0EA5E9]">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </Svg>
    ),
  },
  {
    href: "/tedaviler/protetik",
    title: "Estetik Protetik & Zirkonyum",
    desc: "Metal içermeyen, biyouyumlu zirkonyum kronlarla doğal diş görünümünü yakalayın. Sağlam, estetik ve uzun ömürlü.",
    icon: (
      <Svg className="w-7 h-7 text-[#0EA5E9]">
        <polygon points="12 2 15.5 8.5 22 9.5 17 14.5 18.5 21 12 17.5 5.5 21 7 14.5 2 9.5 8.5 8.5 12 2" />
      </Svg>
    ),
  },
  {
    href: "/tedaviler/gulus-tasarimi",
    title: "Gülüş Tasarımı",
    desc: "Dijital gülüş tasarımı teknolojisiyle tedaviye başlamadan önce sonucunuzu görün. Kişiye özel estetik çözümler.",
    icon: (
      <Svg className="w-7 h-7 text-[#0EA5E9]">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 13s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={3} />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={3} />
      </Svg>
    ),
  },
  {
    href: "/tedaviler/kanal",
    title: "Kanal Tedavisi",
    desc: "Ağrılı diş sinir sorunlarını, modern nikel-titanyum eğeleme sistemi ve son teknoloji ekipmanlarla ağrısız biçimde tedavi ediyoruz.",
    icon: (
      <Svg className="w-7 h-7 text-[#0EA5E9]">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </Svg>
    ),
  },
  {
    href: "/tedaviler/bruksizm",
    title: "Bruksizm & Masseter Botoksu",
    desc: "Diş gıcırdatma ve çene kaslarını rahatlatan masseter botoksu uygulamalarıyla ağrılarınızı ve estetik kaygılarınızı gideriyoruz.",
    icon: (
      <Svg className="w-7 h-7 text-[#0EA5E9]">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </Svg>
    ),
  },
  {
    href: "/tedaviler/dijital",
    title: "Dijital Diş Hekimliği",
    desc: "CAD/CAM teknolojisi, dijital ölçü ve 3D planlama sistemleriyle daha hızlı, hassas ve konforlu tedavi sunuyoruz.",
    icon: (
      <Svg className="w-7 h-7 text-[#0EA5E9]">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </Svg>
    ),
  },
];

const reviews = [
  {
    name: "Mehmet K.",
    date: "Mart 2025",
    treatment: "Dental İmplant",
    text: "İmplant tedavim için başka kliniklerle görüştüm ama bu klinik gerçekten fark yaratıyor. Hem doktor hem ekip son derece ilgili ve profesyonel. Sonuçtan çok memnun kaldım.",
  },
  {
    name: "Ayşe S.",
    date: "Şubat 2025",
    treatment: "Gülüş Tasarımı",
    text: "Gülüş tasarımım hayatımı değiştirdi. Tedaviye başlamadan önce sonucu görmek beni çok rahatlattı. Şimdi her fırsatta gülümsüyorum!",
  },
  {
    name: "Fatma D.",
    date: "Ocak 2025",
    treatment: "Diş Beyazlatma",
    text: "Diş beyazlatma işlemim tek seansta tamamlandı ve inanılmaz bir fark oldu. Klinik çok temiz ve hijyenik. Herkese gönül rahatlığıyla tavsiye ederim.",
  },
];

const beforeAfterItems = [
  { label: "Dental İmplant" },
  { label: "Gülüş Tasarımı" },
  { label: "Zirkonyum Kron" },
];

const steps = [
  {
    num: "01",
    title: "WhatsApp'tan Randevu Alın",
    desc: "Sadece birkaç mesajla ücretsiz ilk muayene randevunuzu kolayca oluşturun.",
  },
  {
    num: "02",
    title: "Ücretsiz Muayene & Plan",
    desc: "Uzman hekimimiz ağız sağlığınızı değerlendirir ve size özel bir tedavi planı hazırlar.",
  },
  {
    num: "03",
    title: "Hayalinizdeki Gülüşe Kavuşun",
    desc: "Modern ekipmanlar ve uzman el birliğiyle en kısa sürede mükemmel sonuca ulaşın.",
  },
];

const faqs = [
  {
    q: "İmplant tedavisi ağrılı mıdır?",
    a: "Hayır. İmplant tedavisi lokal anestezi altında gerçekleştirildiği için işlem sırasında hiçbir ağrı hissetmezsiniz. İşlem sonrası hafif bir hassasiyet olabilir, bu da birkaç gün içinde tamamen geçer.",
  },
  {
    q: "Diş beyazlatma ne kadar sürer ve sonuçlar kalıcı mıdır?",
    a: "Kliniğimizde profesyonel beyazlatma genellikle tek seansta (yaklaşık 60–90 dakika) tamamlanır. Düzenli bakım ve doğru beslenme alışkanlıklarıyla sonuçlar 1–2 yıl veya daha uzun süre kalıcı olabilir.",
  },
  {
    q: "Zirkonyum kronlar ne kadar dayanıklıdır?",
    a: "İyi bakım koşullarında zirkonyum kronlar 15–20 yıl veya daha uzun süre kullanılabilir. Metal içermedikleri için hem daha sağlıklı hem de estetik bir seçenektir.",
  },
  {
    q: "Gülüş tasarımı kimlere uygulanabilir?",
    a: "18 yaş ve üzeri, genel ağız sağlığı iyi olan herkese uygulanabilir. İlk muayenede hekimimiz sizi değerlendirerek en uygun tedavi planını hazırlar.",
  },
  {
    q: "Taksit imkânı var mıdır?",
    a: "Evet, tüm tedavilerimizde 12 aya kadar faizsiz taksit imkânı sunulmaktadır. Detaylı ödeme seçenekleri için kliniğimizle iletişime geçebilirsiniz.",
  },
  {
    q: "İlk muayene ücretli midir?",
    a: "Hayır, ilk muayene ve tedavi planlaması tamamen ücretsizdir. WhatsApp üzerinden randevu oluşturmanız yeterlidir.",
  },
];

const WA_LINK = "https://wa.me/902121234567?text=Merhaba%2C%20randevu%20almak%20istiyorum.";

// ─── Component ──────────────────────────────────────────────────────────────
export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ── Infinite Carousel ─────────────────────────────────────────────────────
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

  // Keep the track settled when card widths change between breakpoints.
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

    trackRef.current?.getBoundingClientRect(); // commit transition=none as CSS baseline

    requestAnimationFrame(() => {
      setTransition(true);
      setSlideOffset(step);
    });
  };

  const goPrev = () => {
    if (isSliding) return;

    const step = slideStep();
    directionRef.current = "prev";
    setIsSliding(true);
    setTransition(false);
    setCarouselCards((cards) => [cards[cards.length - 1], ...cards.slice(0, -1)]);
    setSlideOffset(step);
    requestAnimationFrame(() => {
      setTransition(true);
      setSlideOffset(0);
    });
  };

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") {
      return;
    }

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
    <div className="bg-white overflow-x-hidden">

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-slate-900">
        {/* Background gradient — replace with a real <Image> later */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1a2e] via-[#075985]/90 to-[#0c1a2e]" />

        {/* Decorative glows */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#0EA5E9]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

        {/* Right-side photo placeholder ring */}
        <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-24 pointer-events-none select-none opacity-[0.07]">
          <div className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-full border border-sky-400 flex items-center justify-center">
            <svg className="w-36 h-36 text-sky-300" fill="none" stroke="currentColor" strokeWidth={0.6} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 13s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={1.5} />
              <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={1.5} />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[#F0F9FF]0/15 text-sky-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8 border border-sky-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Kadıköy, İstanbul · Ücretsiz İlk Muayene
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white leading-[1.1] mb-6 max-w-3xl">
            Gülüşünüzü güvenle{" "}
            <span className="text-sky-400">yeniden tasarlıyoruz</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            15 yılı aşkın deneyim ve son teknoloji ekipmanlarımızla hayalinizdeki gülüşe en kısa sürede kavuşturuyoruz.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-4 rounded-2xl transition-all shadow-xl shadow-green-500/25 text-base"
            >
              <WhatsAppIcon />
              WhatsApp ile Randevu Al
            </a>
            <Link
              href="/tedaviler/implant"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-4 rounded-2xl transition-all border border-white/20 text-base backdrop-blur-sm"
            >
              Tedavilerimiz
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. STATS BAR
      ══════════════════════════════════════════ */}
      <section className="bg-[#075985]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "15+", label: "Yıl Deneyim" },
              { value: "5.000+", label: "Mutlu Hasta" },
              { value: "%98", label: "Memnuniyet" },
              { value: "JCI", label: "Akreditasyonu" },
            ].map(({ value, label }) => (
              <div key={label} className="py-7 px-4 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white">{value}</p>
                <p className="text-sky-100 text-sm mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. SERVICES
      ══════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="text-[#0EA5E9] text-xs font-bold tracking-widest uppercase">Tedavilerimiz</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 leading-tight">
              Güzel bir gülüş için her şey burada
            </h2>
          </div>

          {/* Carousel with side arrows */}
          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={goPrev}
              aria-label="Önceki"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Track */}
            <div className="overflow-hidden mx-14">
              <div
                ref={trackRef}
                className="flex gap-6"
                style={{ transform: `translateX(-${slideOffset}px)` }}
                onTransitionEnd={handleTransitionEnd}
              >
                {carouselCards.map(({ href, title, desc, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#E0F2FE] transition-all duration-300 flex flex-col flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#F0F9FF] flex items-center justify-center mb-5 group-hover:bg-[#BAE6FD] transition-colors shrink-0">
                      {icon}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-3">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{desc}</p>
                    <div className="mt-5 flex items-center gap-1 text-[#0EA5E9] text-sm font-semibold">
                      Detaylı Bilgi
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={goNext}
              aria-label="Sonraki"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. TRUST BADGES
      ══════════════════════════════════════════ */}
      <section className="py-14 bg-[#F0F9FF] border-y border-[#E0F2FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              {
                emoji: "🏆",
                title: "JCI Akreditasyonu",
                desc: "Uluslararası kalite standardı",
              },
              {
                emoji: "🔬",
                title: "Dijital Görüntüleme",
                desc: "3D tomografi ve smile design",
              },
              {
                emoji: "💳",
                title: "Taksit İmkânı",
                desc: "12 aya kadar faizsiz",
              },
              {
                emoji: "📅",
                title: "Esnek Randevu",
                desc: "Hafta sonu da hizmetinizdeyiz",
              },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#E0F2FE]">
                <div className="text-3xl mb-3">{emoji}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                <p className="text-gray-500 text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. CLINIC INTRO
      ══════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <svg className="w-20 h-20 mx-auto mb-3 text-sky-200" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <p className="text-sm font-medium text-sky-400">Klinik Fotoğrafı</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-[#0EA5E9] text-white rounded-2xl px-6 py-4 shadow-xl shadow-[#0EA5E9]/30">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sky-100 text-xs font-medium mt-0.5">Yıl Deneyim</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="text-[#0EA5E9] text-xs font-bold tracking-widest uppercase">Kliniğimiz Hakkında</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
                Sağlığınız ve estetiğiniz için{" "}
                <span className="text-[#0EA5E9]">en iyisini</span> sunuyoruz
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                2009 yılından bu yana Kadıköy&apos;de hizmet veren kliniğimiz, alanında uzmanlaşmış hekim kadrosu ve son teknoloji ekipmanlarıyla binlerce hastanın hayatını güzel bir gülüşle değiştirdi.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  "JCI akreditasyonlu, uluslararası standartlarda hizmet",
                  "Son teknoloji dijital görüntüleme ve tasarım sistemleri",
                  "Uzman ve deneyimli hekim kadrosu",
                  "Steril, konforlu ve sıcak tedavi ortamı",
                  "Tüm tedavilerde esnek taksit imkânı",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#E0F2FE] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/hakkimda"
                className="inline-flex items-center gap-2 bg-[#0EA5E9] hover:bg-[#0369A1] text-white font-semibold px-7 py-3.5 rounded-2xl transition-colors shadow-lg shadow-[#0EA5E9]/25"
              >
                Daha Fazla Bilgi
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. PATIENT REVIEWS
      ══════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#0EA5E9] text-xs font-bold tracking-widest uppercase">Hasta Yorumları</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Hastalarımız ne diyor?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map(({ name, date, treatment, text }) => (
              <div
                key={name}
                className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm flex flex-col"
              >
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="flex items-end justify-between border-t border-gray-100 pt-5">
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{name}</p>
                    <p className="text-[#0EA5E9] text-xs font-medium mt-0.5">{treatment}</p>
                  </div>
                  <span className="text-gray-400 text-xs">{date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. BEFORE / AFTER GALLERY
      ══════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#0EA5E9] text-xs font-bold tracking-widest uppercase">Önce & Sonra</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Dönüşüm galerimiz</h2>
            <p className="text-gray-500 mt-3 text-base max-w-md mx-auto">
              Gerçek hastalarımızın tedavi öncesi ve sonrasına ait görüntüler.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {beforeAfterItems.map(({ label }) => (
              <div key={label} className="rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                <div className="grid grid-cols-2 h-60 relative">
                  {/* Divider line */}
                  <div className="absolute inset-y-0 left-1/2 -translate-x-px w-0.5 bg-white z-10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center z-20">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>

                  {/* Before */}
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center gap-3">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Önce</span>
                    <div className="w-14 h-14 rounded-full bg-gray-300/50 flex items-center justify-center">
                      <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 15s1.5-1.5 4-1.5 4 1.5 4 1.5" />
                        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={2.5} />
                        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={2.5} />
                      </svg>
                    </div>
                  </div>

                  {/* After */}
                  <div className="bg-gradient-to-br from-[#E0F2FE] to-[#BAE6FD] flex flex-col items-center justify-center gap-3">
                    <span className="text-[10px] font-black text-[#0EA5E9] uppercase tracking-widest">Sonra</span>
                    <div className="w-14 h-14 rounded-full bg-[#BAE6FD]/60 flex items-center justify-center">
                      <svg className="w-7 h-7 text-[#0EA5E9]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 13s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={2.5} />
                        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={2.5} />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="bg-white px-5 py-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-800 text-sm">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          8. 3-STEP PROCESS
      ══════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#075985] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sky-200 text-xs font-bold tracking-widest uppercase">Nasıl Çalışır?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              3 Adımda Hayalinizdeki Gülüş
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
            {/* Connector (desktop) */}
            <div className="hidden md:block absolute top-10 left-[21%] right-[21%] h-px bg-white/20" />

            {steps.map(({ num, title, desc }) => (
              <div key={num} className="flex flex-col items-center text-center px-4">
                <div className="w-20 h-20 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center mb-6 relative z-10 backdrop-blur-sm">
                  <span className="text-2xl font-bold text-white">{num}</span>
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{title}</h3>
                <p className="text-sky-100 text-sm leading-relaxed max-w-xs">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-sky-100 text-gray-800 font-bold px-8 py-4 rounded-2xl transition-colors shadow-2xl text-base"
            >
              <span className="text-green-500">
                <WhatsAppIcon />
              </span>
              Hemen Başlayın
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9. FAQ
      ══════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-[#0EA5E9] text-xs font-bold tracking-widest uppercase">Sık Sorulan Sorular</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Merak ettikleriniz</h2>
          </div>

          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-colors duration-200 ${
                  openFaq === i
                    ? "border-[#BAE6FD] bg-[#F0F9FF]"
                    : "border-gray-100 bg-gray-50 hover:border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span
                    className={`font-semibold text-sm sm:text-base ${
                      openFaq === i ? "text-[#075985]" : "text-gray-800"
                    }`}
                  >
                    {q}
                  </span>
                  <span
                    className={`shrink-0 transition-colors ${
                      openFaq === i ? "text-[#0EA5E9]" : "text-gray-400"
                    }`}
                  >
                    <ChevronIcon open={openFaq === i} />
                  </span>
                </button>

                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          10. CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="bg-slate-900 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Gülüşünüzü değiştirmeye hazır mısınız?
          </h2>
          <p className="text-slate-400 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            İlk muayene tamamen ücretsiz. WhatsApp üzerinden randevu alın, uzman hekimimiz size en uygun tedavi planını hazırlasın.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-2xl transition-colors shadow-xl shadow-green-500/25 text-base"
          >
            <WhatsAppIcon />
            WhatsApp ile Randevu Al
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          11. FOOTER
      ══════════════════════════════════════════ */}
      <footer className="bg-slate-950 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#0EA5E9] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  DK
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">Diş Kliniği</p>
                  <p className="text-sky-400 text-xs">Sağlıklı Gülüşler</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Modern diş hekimliği ile güzel gülüşler için Kadıköy&apos;deyiz. 2009&apos;dan beri güvenilir hizmet.
              </p>
            </div>

            {/* Treatments */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Tedaviler</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Dental İmplant", href: "/tedaviler/implant" },
                  { label: "Zirkonyum Kronlar", href: "/tedaviler/protetik" },
                  { label: "Diş Beyazlatma", href: "/tedaviler/protetik" },
                  { label: "Gülüş Tasarımı", href: "/tedaviler/gulus-tasarimi" },
                  { label: "Dişeti Tedavisi", href: "/tedaviler/diseti-hastaliklari" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="hover:text-sky-400 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Sayfalar</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Ana Sayfa", href: "/" },
                  { label: "Hakkımızda", href: "/hakkimda" },
                  { label: "Blog", href: "/blog" },
                  { label: "İletişim", href: "/iletisim" },
                  { label: "Randevu", href: "/randevu" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="hover:text-sky-400 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">İletişim</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2.5">
                  <svg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Atatürk Cad. No:12, Kadıköy, İstanbul
                </li>
                <li>
                  <a href="tel:+902121234567" className="flex gap-2.5 hover:text-sky-400 transition-colors">
                    <svg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.64 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.55 1.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 8.73a16 16 0 006 6l.91-1.91a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0121.73 15z" />
                    </svg>
                    +90 212 123 45 67
                  </a>
                </li>
                <li>
                  <a href="mailto:info@disklinigi.com" className="flex gap-2.5 hover:text-sky-400 transition-colors">
                    <svg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                    </svg>
                    info@disklinigi.com
                  </a>
                </li>
                <li>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2.5 hover:text-green-400 transition-colors"
                  >
                    <span className="text-green-400 shrink-0 mt-0.5">
                      <WhatsAppIcon size={16} />
                    </span>
                    WhatsApp Randevu
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <p>© 2025 Diş Kliniği. Tüm hakları saklıdır.</p>
            <p>Kadıköy, İstanbul · Türkiye</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
