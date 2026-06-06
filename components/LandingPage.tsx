"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  AnimatePresence,
  useMotionValue,
  animate as motionAnimate,
} from "framer-motion";
import TreatmentCarousel from "@/components/ui/carousel-card-1";

// ─── Design tokens ───────────────────────────────────────────────────────────

const G = {
  deep:      "#F5F0EA",   // warm ivory — alternating section bg
  ink:       "#FAF8F5",   // warm near-white
  surface:   "#FFFFFF",   // pure white
  elevated:  "#EDE5D8",   // warm sand
  gold:      "#B8922A",   // champagne gold — primary accent
  goldMid:   "#C9A84C",   // lighter champagne
  goldSoft:  "#DEC882",   // soft gold tint
  navy:      "#0F1E35",   // deep navy — primary text + dark sections
  cream:     "#0F1E35",   // alias for text
  dimCream:  "#374969",   // navy-gray secondary text
  muted:     "#8A7E70",   // warm muted
  border:    "rgba(184,146,42,0.15)",
  borderHov: "rgba(184,146,42,0.38)",
};

// ─── Icons ────────────────────────────────────────────────────────────────────

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
    <svg className="w-3.5 h-3.5" fill="#D4A017" viewBox="0 0 24 24">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="w-4 h-4 transition-transform duration-300"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
      fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// ─── Animation helpers ────────────────────────────────────────────────────────

const ease = [0.16, 1, 0.3, 1] as const;

function FadeIn({ children, delay = 0, className = "", from = "up" }: {
  children: React.ReactNode; delay?: number; className?: string; from?: "up" | "left" | "right" | "none";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const initial = { opacity: 0, y: from === "up" ? 36 : 0, x: from === "left" ? -40 : from === "right" ? 40 : 0 };
  return (
    <motion.div ref={ref} initial={initial} animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.8, delay, ease }} className={className}>
      {children}
    </motion.div>
  );
}

function StaggerGrid({ children, className = "", stagger = 0.1 }: {
  children: React.ReactNode; className?: string; stagger?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }} className={className}>
      {children}
    </motion.div>
  );
}

const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

// ─── Animated stat counter ───────────────────────────────────────────────────

function AnimatedStat({ end, prefix = "", suffix = "", label, textValue }: {
  end?: number; prefix?: string; suffix?: string; label: string; textValue?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const [displayed, setDisplayed] = useState(textValue ?? "0");

  useState(() => {
    if (!inView || end === undefined) return;
    const unsub = motionVal.on("change", (v) => {
      const r = Math.round(v);
      setDisplayed(end >= 1000 ? r.toLocaleString("tr-TR") : String(r));
    });
    const ctrl = motionAnimate(motionVal, end, { duration: 1.8, ease: "easeOut" });
    return () => { ctrl.stop(); unsub(); };
  });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease }} className="py-10 px-6 text-center">
      <p className="font-cormorant text-5xl sm:text-6xl font-bold" style={{ color: G.navy }}>
        {textValue ? textValue : `${prefix}${displayed}${suffix}`}
      </p>
      <div className="h-px w-8 mx-auto my-3" style={{ background: G.gold }} />
      <p className="text-[11px] tracking-[0.2em] uppercase font-medium" style={{ color: G.muted }}>{label}</p>
    </motion.div>
  );
}

// ─── Overline ─────────────────────────────────────────────────────────────────

function Overline({ children, centered = false, light = false }: { children: React.ReactNode; centered?: boolean; light?: boolean }) {
  const color = light ? "rgba(201,168,76,0.9)" : G.gold;
  return (
    <div className={`flex items-center gap-3 mb-5 ${centered ? "justify-center" : ""}`}>
      <div className="h-px w-8 shrink-0" style={{ background: color }} />
      <span className="text-[10px] tracking-[0.28em] uppercase font-medium font-outfit" style={{ color }}>
        {children}
      </span>
      {centered && <div className="h-px w-8 shrink-0" style={{ background: color }} />}
    </div>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const serviceCards = [
  {
    id: 1,
    imgUrl: "https://images.unsplash.com/photo-1588776814546-1ffedac33d34?auto=format&fit=crop&w=800&q=80",
    content: "Dişeti Hastalıkları — Dişeti hastalıklarını erken teşhis ve ileri tedavi yöntemleriyle, kök yüzeyi düzlemesi ve cerrahi uygulamalarla kalıcı olarak tedavi ediyoruz.",
  },
  {
    id: 2,
    imgUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80",
    content: "İmplant & Çene Cerrahisi — Eksik dişlerinizi titanyum köklere sahip, doğal görünümlü ve ömür boyu dayanıklı implantlarla tamamlıyoruz.",
  },
  {
    id: 3,
    imgUrl: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
    content: "Mikrocerrahi & Plastik Cerrahi — Periodontal plastik cerrahi ve mikroskop destekli hassas müdahalelerle estetik ve fonksiyonel sonuçlar elde ediyoruz.",
  },
  {
    id: 4,
    imgUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    content: "Kemik Grefti & Rejenerasyon — Kemik ve doku kayıplarını rejeneratif tekniklerle yeniden yapılandırarak implant için sağlam bir zemin oluşturuyoruz.",
  },
  {
    id: 5,
    imgUrl: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=800&q=80",
    content: "Estetik Protetik & Zirkonyum — Metal içermeyen, biyouyumlu zirkonyum kronlarla doğal diş görünümünü yakalayın. Sağlam, estetik ve 15-20 yıl ömürlü.",
  },
  {
    id: 6,
    imgUrl: "https://images.unsplash.com/photo-1598256778327-c427b3daca97?auto=format&fit=crop&w=800&q=80",
    content: "Gülüş Tasarımı — Dijital gülüş tasarımı teknolojisiyle tedaviye başlamadan önce sonucunuzu görün. Kişiye özel estetik çözümler sunuyoruz.",
  },
  {
    id: 7,
    imgUrl: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80",
    content: "Kanal Tedavisi — Modern nikel-titanyum eğeleme sistemi ve son teknoloji ekipmanlarla ağrılı diş sinir sorunlarını ağrısız biçimde tedavi ediyoruz.",
  },
  {
    id: 8,
    imgUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    content: "Bruksizm & Masseter Botoksu — Diş gıcırdatma ve çene kaslarını rahatlatan masseter botoksu uygulamalarıyla ağrılarınızı ve estetik kaygılarınızı gideriyoruz.",
  },
  {
    id: 9,
    imgUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
    content: "Dijital Diş Hekimliği — CAD/CAM teknolojisi, dijital ölçü ve 3D planlama sistemleriyle daha hızlı, hassas ve konforlu tedavi sunuyoruz.",
  },
];

const reviews = [
  { name: "Mehmet K.", date: "Mart 2025", treatment: "Dental İmplant", text: "İmplant tedavim için başka kliniklerle görüştüm ama bu klinik gerçekten fark yaratıyor. Hem doktor hem ekip son derece ilgili ve profesyonel. Sonuçtan çok memnun kaldım." },
  { name: "Ayşe S.", date: "Şubat 2025", treatment: "Gülüş Tasarımı", text: "Gülüş tasarımım hayatımı değiştirdi. Tedaviye başlamadan önce sonucu görmek beni çok rahatlattı. Şimdi her fırsatta gülümsüyorum!" },
  { name: "Fatma D.", date: "Ocak 2025", treatment: "Diş Beyazlatma", text: "Diş beyazlatma işlemim tek seansta tamamlandı ve inanılmaz bir fark oldu. Klinik çok temiz ve hijyenik. Herkese gönül rahatlığıyla tavsiye ederim." },
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

  const heroContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } };
  const heroItem = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } } };

  return (
    <div className="overflow-x-hidden font-outfit" style={{ background: G.ink }}>

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden" style={{ background: G.surface }}>

        {/* Subtle warm dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, rgba(184,146,42,0.07) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />

        {/* Warm ambient orbs */}
        <div className="absolute -left-64 top-1/3 w-[700px] h-[700px] rounded-full pointer-events-none animate-float-orb"
          style={{ background: `radial-gradient(circle, rgba(184,146,42,0.1) 0%, rgba(222,200,130,0.04) 50%, transparent 70%)` }} />
        <div className="absolute -right-32 -top-32 w-[550px] h-[550px] rounded-full pointer-events-none animate-float-orb-slow"
          style={{ background: `radial-gradient(circle, rgba(184,146,42,0.07) 0%, transparent 65%)` }} />

        {/* Thin gold side accent */}
        <div className="absolute left-0 top-0 bottom-0 w-px pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent, rgba(184,146,42,0.4), transparent)` }} />
        <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: `linear-gradient(to right, transparent, rgba(184,146,42,0.2), transparent)` }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center w-full">

          <motion.div variants={heroContainer} initial="hidden" animate="visible">
            {/* Eyebrow */}
            <motion.div variants={heroItem} className="flex items-center gap-4 mb-10">
              <div className="h-px w-12" style={{ background: G.gold }} />
              <span className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{ color: G.gold }}>
                Kadıköy, İstanbul · Ücretsiz İlk Muayene
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-cormorant leading-[0.92] mb-10">
              <motion.span variants={heroItem} className="block font-extralight italic" style={{ fontSize: "clamp(56px,8.5vw,104px)", color: G.navy }}>
                Gülüşünüzü
              </motion.span>
              <motion.span variants={heroItem} className="block font-light" style={{ fontSize: "clamp(56px,8.5vw,104px)", color: G.dimCream }}>
                güvenle yeniden
              </motion.span>
              <motion.span variants={heroItem} className="block font-bold italic" style={{ fontSize: "clamp(56px,8.5vw,104px)", color: G.gold }}>
                tasarlıyoruz.
              </motion.span>
            </h1>

            <motion.p variants={heroItem} className="text-[17px] leading-relaxed mb-12 max-w-[480px]" style={{ color: G.muted }}>
              15 yılı aşkın deneyim ve son teknoloji ekipmanlarımızla hayalinizdeki gülüşe en kısa sürede kavuşturuyoruz.
            </motion.p>

            <motion.div variants={heroItem} className="flex flex-wrap gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 font-semibold px-9 py-4 text-sm tracking-wide transition-all duration-300 cursor-pointer text-white"
                style={{ background: G.navy }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = G.gold; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = G.navy; }}>
                <WhatsAppIcon />
                WhatsApp ile Randevu Al
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <Link href="/tedaviler/implant"
                className="inline-flex items-center gap-2 font-medium px-9 py-4 text-sm tracking-wide transition-all duration-300 cursor-pointer"
                style={{ border: `1px solid rgba(184,146,42,0.3)`, color: G.dimCream }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = G.gold; (e.currentTarget as HTMLElement).style.color = G.navy; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(184,146,42,0.3)"; (e.currentTarget as HTMLElement).style.color = G.dimCream; }}>
                Tedavilerimiz
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero decorative orb */}
          <motion.div initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease }}
            className="hidden lg:flex items-center justify-center relative shrink-0">

            <div className="relative w-[420px] h-[420px] rounded-full flex items-center justify-center"
              style={{ border: `1px solid rgba(184,146,42,0.2)`, boxShadow: `0 0 100px rgba(184,146,42,0.06)` }}>

              {/* Orbiting gold dots */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full">
                {[
                  "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
                  "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                  "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
                  "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
                ].map((cls, i) => (
                  <div key={i} className={`absolute ${cls} w-2.5 h-2.5 rounded-full`}
                    style={{ background: G.gold, boxShadow: `0 0 8px rgba(184,146,42,0.5)` }} />
                ))}
              </motion.div>

              <div className="w-[310px] h-[310px] rounded-full flex items-center justify-center"
                style={{ border: `1px solid rgba(184,146,42,0.12)` }}>
                <div className="w-[200px] h-[200px] rounded-full flex items-center justify-center"
                  style={{ background: "rgba(184,146,42,0.04)", border: `1px solid rgba(184,146,42,0.1)` }}>
                  <svg className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth={0.8} viewBox="0 0 64 64" style={{ color: `rgba(184,146,42,0.35)` }}>
                    <path d="M32 6C22 6 14 14 14 24c0 5 1.5 9.5 3 13 2 5 4.5 19 6.5 19 1.5 0 3-6 8.5-6s7 6 8.5 6c2 0 4.5-14 6.5-19 1.5-3.5 3-8 3-13 0-10-8-18-18-18z" />
                    <path strokeLinecap="round" d="M24 24c0-4 4-7 8-7s8 3 8 7" />
                  </svg>
                </div>
              </div>

              {/* 15+ badge */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.9, ease }}
                className="absolute -bottom-4 -right-10 px-7 py-5 z-10 text-white"
                style={{ background: G.navy, boxShadow: "0 8px 32px rgba(15,30,53,0.2)" }}>
                <p className="font-cormorant text-5xl font-bold leading-none">15<span style={{ color: G.goldMid }}>+</span></p>
                <p className="text-[10px] tracking-[0.2em] uppercase opacity-60 mt-1.5">Yıl Deneyim</p>
              </motion.div>

              {/* 5000+ badge */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 1.0, ease }}
                className="absolute -top-4 -left-10 px-6 py-4 z-10"
                style={{ background: "#FFFFFF", border: `1px solid rgba(184,146,42,0.25)`, boxShadow: "0 8px 32px rgba(15,30,53,0.08)" }}>
                <p className="font-cormorant text-3xl font-bold leading-none" style={{ color: G.navy }}>5.000<span style={{ color: G.gold }}>+</span></p>
                <p className="text-[10px] tracking-[0.2em] uppercase mt-1" style={{ color: G.gold }}>Mutlu Hasta</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MARQUEE BAND — deep navy
      ══════════════════════════════════════ */}
      <div className="relative overflow-hidden py-4" style={{ background: G.navy }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-6 mx-8 text-[10px] tracking-[0.3em] uppercase font-medium"
              style={{ color: "rgba(222,200,130,0.65)" }}>
              <span style={{ color: G.goldMid }}>◆</span>Dental İmplant
              <span style={{ color: G.goldMid }}>◆</span>Gülüş Tasarımı
              <span style={{ color: G.goldMid }}>◆</span>Zirkonyum Kronlar
              <span style={{ color: G.goldMid }}>◆</span>Kanal Tedavisi
              <span style={{ color: G.goldMid }}>◆</span>JCI Akreditasyonu
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          2. STATS BAR
      ══════════════════════════════════════ */}
      <section style={{ background: G.surface, borderBottom: `1px solid ${G.border}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { end: 15, suffix: "+", label: "Yıl Deneyim" },
              { end: 5000, suffix: "+", label: "Mutlu Hasta" },
              { prefix: "%", end: 98, label: "Memnuniyet" },
              { textValue: "JCI", label: "Akreditasyonu" },
            ].map((s, i) => (
              <div key={i} style={{ borderRight: i < 3 ? `1px solid ${G.border}` : undefined }}>
                <AnimatedStat {...s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. SERVICES — carousel
      ══════════════════════════════════════ */}
      <section className="py-28 sm:py-36" style={{ background: G.deep }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="mb-16">
            <Overline>Tedavilerimiz</Overline>
            <h2 className="font-cormorant text-5xl sm:text-6xl font-light leading-tight max-w-xl" style={{ color: G.navy }}>
              Güzel bir gülüş için{" "}
              <span className="italic font-medium" style={{ color: G.gold }}>her şey burada</span>
            </h2>
            <p className="mt-4 text-sm max-w-sm" style={{ color: G.muted }}>
              Kartların üzerine gelerek tedavilerimiz hakkında detaylı bilgi alın.
            </p>
          </FadeIn>

          <FadeIn>
            <TreatmentCarousel data={serviceCards} cardsPerView={3} />
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. TRUST BADGES
      ══════════════════════════════════════ */}
      <section className="py-16" style={{ background: G.surface, borderTop: `1px solid ${G.border}`, borderBottom: `1px solid ${G.border}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerGrid className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { sym: "◈", title: "JCI Akreditasyonu", desc: "Uluslararası kalite standardı" },
              { sym: "◉", title: "Dijital Görüntüleme", desc: "3D tomografi ve smile design" },
              { sym: "◇", title: "Taksit İmkânı", desc: "12 aya kadar faizsiz" },
              { sym: "◆", title: "Esnek Randevu", desc: "Hafta sonu da hizmetinizdeyiz" },
            ].map(({ sym, title, desc }) => (
              <motion.div key={title} variants={staggerItem}
                className="glass-card glass-card-hover p-7 flex items-start gap-4 transition-all duration-400">
                <span className="text-xl leading-none mt-0.5 shrink-0" style={{ color: G.gold }}>{sym}</span>
                <div>
                  <h3 className="font-cormorant text-lg font-semibold mb-1" style={{ color: G.navy }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: G.muted }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. CLINIC INTRO
      ══════════════════════════════════════ */}
      <section className="py-28 sm:py-36 relative overflow-hidden" style={{ background: G.ink }}>
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, rgba(184,146,42,0.07) 0%, transparent 70%)` }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            <FadeIn from="left" className="relative">
              {/* Corner gold brackets */}
              <div className="absolute inset-6 pointer-events-none z-10">
                {[["top-0 left-0 border-t border-l"], ["top-0 right-0 border-t border-r"], ["bottom-0 left-0 border-b border-l"], ["bottom-0 right-0 border-b border-r"]].map((cls, i) => (
                  <div key={i} className={`absolute w-12 h-12 ${cls[0]}`} style={{ borderColor: `rgba(184,146,42,0.45)` }} />
                ))}
              </div>
              <div className="aspect-[4/3] flex items-center justify-center relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${G.elevated} 0%, #D8CEC0 100%)` }}>
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={0.7} viewBox="0 0 24 24" style={{ color: `rgba(184,146,42,0.35)` }}>
                    <rect x="3" y="3" width="18" height="18" rx="0" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                  </svg>
                  <p className="text-[11px] tracking-[0.22em] uppercase font-medium" style={{ color: `rgba(184,146,42,0.5)` }}>Klinik Fotoğrafı</p>
                </div>
              </div>
              {/* Gold badge */}
              <div className="absolute -bottom-6 -right-6 px-8 py-5 z-20 text-white"
                style={{ background: G.navy, boxShadow: "0 12px 40px rgba(15,30,53,0.2)" }}>
                <p className="font-cormorant text-5xl font-bold leading-none">15<span style={{ color: G.goldMid }}>+</span></p>
                <p className="text-[10px] tracking-[0.2em] uppercase opacity-60 mt-1.5">Yıl Deneyim</p>
              </div>
            </FadeIn>

            <FadeIn from="right" delay={0.15}>
              <Overline>Kliniğimiz Hakkında</Overline>
              <h2 className="font-cormorant text-5xl sm:text-6xl leading-tight mb-8">
                <span className="font-light italic" style={{ color: G.navy }}>Sağlığınız için </span>
                <span className="font-bold italic" style={{ color: G.gold }}>en iyisini </span>
                <span className="font-light" style={{ color: G.dimCream }}>sunuyoruz</span>
              </h2>
              <p className="leading-relaxed mb-10 text-[16px]" style={{ color: G.muted }}>
                2009 yılından bu yana Kadıköy&apos;de hizmet veren kliniğimiz, alanında uzmanlaşmış hekim kadrosu ve son teknoloji ekipmanlarıyla binlerce hastanın hayatını güzel bir gülüşle değiştirdi.
              </p>
              <ul className="space-y-4 mb-12">
                {[
                  "JCI akreditasyonlu, uluslararası standartlarda hizmet",
                  "Son teknoloji dijital görüntüleme ve tasarım sistemleri",
                  "Uzman ve deneyimli hekim kadrosu",
                  "Steril, konforlu ve sıcak tedavi ortamı",
                  "Tüm tedavilerde esnek taksit imkânı",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: G.muted }}>
                    <span className="mt-0.5 shrink-0" style={{ color: G.gold }}>◈</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/hakkimda"
                className="group inline-flex items-center gap-3 font-semibold px-9 py-4 text-sm tracking-wide transition-all duration-300 cursor-pointer text-white"
                style={{ background: G.navy }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = G.gold; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = G.navy; }}>
                Daha Fazla Bilgi
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. PATIENT REVIEWS
      ══════════════════════════════════════ */}
      <section className="py-28 sm:py-36" style={{ background: G.surface }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="mb-16">
            <Overline>Hasta Yorumları</Overline>
            <h2 className="font-cormorant text-5xl sm:text-6xl font-light" style={{ color: G.navy }}>
              Hastalarımız <span className="italic font-medium" style={{ color: G.gold }}>ne diyor?</span>
            </h2>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map(({ name, date, treatment, text }) => (
              <motion.div key={name} variants={staggerItem}
                className="glass-card glass-card-hover p-9 flex flex-col relative transition-all duration-400">
                {/* Decorative quote */}
                <span className="font-cormorant text-[100px] font-bold leading-none absolute -top-2 right-6 select-none pointer-events-none"
                  style={{ color: `rgba(184,146,42,0.07)` }}>&ldquo;</span>
                <div className="flex gap-1 mb-6">{Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}</div>
                <p className="text-sm leading-relaxed flex-1 mb-8 relative z-10" style={{ color: G.muted }}>&ldquo;{text}&rdquo;</p>
                <div className="pt-6 flex items-end justify-between" style={{ borderTop: `1px solid rgba(184,146,42,0.1)` }}>
                  <div>
                    <p className="font-cormorant text-xl font-semibold leading-tight" style={{ color: G.navy }}>{name}</p>
                    <p className="text-[10px] tracking-[0.2em] uppercase mt-0.5 font-medium" style={{ color: G.gold }}>{treatment}</p>
                  </div>
                  <span className="text-xs" style={{ color: G.muted }}>{date}</span>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. BEFORE / AFTER
      ══════════════════════════════════════ */}
      <section className="py-28 sm:py-36" style={{ background: G.deep }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="mb-16 text-center">
            <Overline centered>Önce & Sonra</Overline>
            <h2 className="font-cormorant text-5xl sm:text-6xl font-light" style={{ color: G.navy }}>
              Dönüşüm <span className="italic font-medium" style={{ color: G.gold }}>galerimiz</span>
            </h2>
            <p className="mt-4 text-sm max-w-sm mx-auto" style={{ color: G.muted }}>
              Gerçek hastalarımızın tedavi öncesi ve sonrasına ait görüntüler.
            </p>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[{ label: "Dental İmplant" }, { label: "Gülüş Tasarımı" }, { label: "Zirkonyum Kron" }].map(({ label }) => (
              <motion.div key={label} variants={staggerItem} className="overflow-hidden glass-card">
                <div className="grid grid-cols-2 h-60 relative">
                  <div className="absolute inset-y-0 left-1/2 -translate-x-px w-px z-10" style={{ background: `rgba(184,146,42,0.25)` }} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 z-20 flex items-center justify-center"
                    style={{ background: G.surface, border: `1px solid rgba(184,146,42,0.25)` }}>
                    <div className="w-3.5 h-px" style={{ background: G.gold }} />
                    <div className="w-px h-3.5 absolute" style={{ background: G.gold }} />
                  </div>

                  <div className="flex flex-col items-center justify-center gap-3" style={{ background: G.ink }}>
                    <span className="text-[9px] font-bold uppercase tracking-[0.22em]" style={{ color: G.muted }}>Önce</span>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: `rgba(184,146,42,0.05)`, border: `1px solid rgba(184,146,42,0.15)` }}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" style={{ color: G.muted }}>
                        <circle cx="12" cy="12" r="10" /><path d="M8 15s1.5-1.5 4-1.5 4 1.5 4 1.5" />
                        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={2.5} /><line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={2.5} />
                      </svg>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-3" style={{ background: G.elevated }}>
                    <span className="text-[9px] font-bold uppercase tracking-[0.22em]" style={{ color: G.gold }}>Sonra</span>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: `rgba(184,146,42,0.1)`, border: `1px solid rgba(184,146,42,0.28)` }}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" style={{ color: G.gold }}>
                        <circle cx="12" cy="12" r="10" /><path d="M8 13s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={2.5} /><line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={2.5} />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-5" style={{ borderTop: `1px solid rgba(184,146,42,0.12)` }}>
                  <p className="font-cormorant text-lg font-semibold italic" style={{ color: G.navy }}>{label}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. 3-STEP PROCESS
      ══════════════════════════════════════ */}
      <section className="py-28 sm:py-36 relative overflow-hidden" style={{ background: G.navy }}>
        {/* Large ghost numeral */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-cormorant font-bold" style={{ fontSize: "320px", lineHeight: 1, color: `rgba(255,255,255,0.03)` }}>3</span>
        </div>
        {/* Ambient glow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, rgba(184,146,42,0.08) 0%, transparent 70%)` }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-20">
            <Overline centered light>Nasıl Çalışır?</Overline>
            <h2 className="font-cormorant text-5xl sm:text-6xl font-light text-white">
              3 Adımda <span className="italic font-medium" style={{ color: G.goldMid }}>Hayalinizdeki Gülüş</span>
            </h2>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 relative" stagger={0.15}>
            {/* Connector line */}
            <div className="hidden md:block absolute top-[22px] left-[calc(16.67%+22px)] right-[calc(16.67%+22px)] h-px"
              style={{ background: `rgba(184,146,42,0.2)` }} />
            {steps.map(({ num, title, desc }) => (
              <motion.div key={num} variants={staggerItem} className="flex flex-col items-center text-center relative">
                <div className="relative mb-10">
                  <span className="font-cormorant font-bold leading-none absolute -top-5 left-1/2 -translate-x-1/2 select-none"
                    style={{ fontSize: "100px", color: `rgba(184,146,42,0.08)` }}>{num}</span>
                  <div className="relative z-10 w-12 h-12 flex items-center justify-center"
                    style={{ border: `1px solid rgba(184,146,42,0.4)`, background: "rgba(184,146,42,0.08)" }}>
                    <span className="font-cormorant text-xl font-medium" style={{ color: G.goldMid }}>{num}</span>
                  </div>
                </div>
                <h3 className="font-cormorant text-2xl font-medium mb-4 leading-snug text-white">{title}</h3>
                <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{desc}</p>
              </motion.div>
            ))}
          </StaggerGrid>

          <FadeIn className="text-center mt-16">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-semibold px-10 py-4 text-sm tracking-wide transition-all duration-300 cursor-pointer text-white"
              style={{ background: G.gold }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)"; }}>
              <WhatsAppIcon />
              Hemen Başlayın
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. FAQ
      ══════════════════════════════════════ */}
      <section className="py-28 sm:py-36" style={{ background: G.surface }}>
        <div className="max-w-2xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <Overline centered>Sık Sorulan Sorular</Overline>
            <h2 className="font-cormorant text-5xl sm:text-6xl font-light" style={{ color: G.navy }}>
              Merak <span className="italic font-medium" style={{ color: G.gold }}>ettikleriniz</span>
            </h2>
          </FadeIn>

          <FadeIn>
            <div style={{ borderTop: `1px solid ${G.border}` }}>
              {faqs.map(({ q, a }, i) => (
                <div key={i} style={{ borderBottom: `1px solid ${G.border}` }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-2 py-6 text-left gap-6 cursor-pointer transition-colors duration-200">
                    <span className="font-outfit font-medium text-sm sm:text-base"
                      style={{ color: openFaq === i ? G.navy : G.dimCream }}>{q}</span>
                    <span className="shrink-0" style={{ color: openFaq === i ? G.gold : G.muted }}>
                      <ChevronIcon open={openFaq === i} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div key="a" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden">
                        <div className="px-2 pb-7">
                          <p className="text-sm leading-relaxed" style={{ color: G.muted }}>{a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════
          10. CTA BANNER — warm gold section
      ══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 relative overflow-hidden" style={{ background: G.deep, borderTop: `1px solid ${G.border}` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none animate-pulse-glow"
          style={{ background: `radial-gradient(circle, rgba(184,146,42,0.1) 0%, transparent 65%)` }} />

        <FadeIn className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-5 mb-10">
            <div className="h-px flex-1 max-w-[80px]" style={{ background: `rgba(184,146,42,0.3)` }} />
            <div className="w-2 h-2 rotate-45" style={{ background: G.gold }} />
            <span className="text-[10px] tracking-[0.32em] uppercase font-medium" style={{ color: G.gold }}>Ücretsiz İlk Muayene</span>
            <div className="w-2 h-2 rotate-45" style={{ background: G.gold }} />
            <div className="h-px flex-1 max-w-[80px]" style={{ background: `rgba(184,146,42,0.3)` }} />
          </div>

          <h2 className="font-cormorant leading-[0.9] mb-6" style={{ fontSize: "clamp(48px,6vw,80px)" }}>
            <span className="block font-light italic" style={{ color: G.navy }}>Gülüşünüzü değiştirmeye</span>
            <span className="block font-bold italic" style={{ color: G.gold }}>hazır mısınız?</span>
          </h2>

          <p className="text-[15px] leading-relaxed mb-12 max-w-md mx-auto" style={{ color: G.muted }}>
            İlk muayene tamamen ücretsiz. WhatsApp üzerinden randevu alın, uzman hekimimiz size en uygun tedavi planını hazırlasın.
          </p>

          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-semibold px-10 py-5 text-sm tracking-wide transition-all duration-300 cursor-pointer text-white"
            style={{ background: "rgb(22,163,74)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgb(21,128,61)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgb(22,163,74)"; }}>
            <WhatsAppIcon size={20} />
            WhatsApp ile Randevu Al
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </FadeIn>
      </section>

      {/* ══════════════════════════════════════
          11. FOOTER — deep navy
      ══════════════════════════════════════ */}
      <footer style={{ background: "#08111F" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-18 pt-16 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center shrink-0"
                  style={{ border: `1px solid rgba(201,168,76,0.35)`, background: "rgba(201,168,76,0.07)" }}>
                  <span className="font-cormorant text-sm font-bold" style={{ color: G.goldMid }}>DK</span>
                </div>
                <div>
                  <p className="font-cormorant text-base font-semibold leading-tight" style={{ color: "#F0EBE0" }}>Diş Kliniği</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: G.goldMid }}>Sağlıklı Gülüşler</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
                Modern diş hekimliği ile güzel gülüşler için Kadıköy&apos;deyiz. 2009&apos;dan beri güvenilir hizmet.
              </p>
              <div className="h-px mt-8" style={{ background: `rgba(201,168,76,0.15)` }} />
            </div>

            {[
              { title: "Tedaviler", links: [
                { label: "Dental İmplant", href: "/tedaviler/implant" },
                { label: "Zirkonyum Kronlar", href: "/tedaviler/protetik" },
                { label: "Diş Beyazlatma", href: "/tedaviler/protetik" },
                { label: "Gülüş Tasarımı", href: "/tedaviler/gulus-tasarimi" },
                { label: "Dişeti Tedavisi", href: "/tedaviler/diseti-hastaliklari" },
              ]},
              { title: "Sayfalar", links: [
                { label: "Ana Sayfa", href: "/" },
                { label: "Hakkımızda", href: "/hakkimda" },
                { label: "Blog", href: "/blog" },
                { label: "İletişim", href: "/iletisim" },
                { label: "Randevu", href: "/randevu" },
              ]},
            ].map(({ title, links }) => (
              <div key={title}>
                <h4 className="font-outfit font-semibold text-[10px] tracking-[0.25em] uppercase mb-6"
                  style={{ color: G.goldMid }}>{title}</h4>
                <ul className="space-y-3 text-sm">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className="transition-colors duration-200"
                        style={{ color: "rgba(255,255,255,0.35)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = G.goldMid)}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="font-outfit font-semibold text-[10px] tracking-[0.25em] uppercase mb-6"
                style={{ color: G.goldMid }}>İletişim</h4>
              <ul className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
                <li>Atatürk Cad. No:12, Kadıköy, İstanbul</li>
                <li>
                  <a href="tel:+902121234567" className="transition-colors duration-200"
                    onMouseEnter={e => (e.currentTarget.style.color = G.goldMid)}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>
                    +90 212 123 45 67
                  </a>
                </li>
                <li>
                  <a href="mailto:info@disklinigi.com" className="transition-colors duration-200"
                    onMouseEnter={e => (e.currentTarget.style.color = G.goldMid)}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>
                    info@disklinigi.com
                  </a>
                </li>
                <li>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200"
                    onMouseEnter={e => (e.currentTarget.style.color = "#4ADE80")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>
                    WhatsApp Randevu
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ borderTop: `1px solid rgba(201,168,76,0.07)` }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
            style={{ color: `rgba(255,255,255,0.2)` }}>
            <p>© 2025 Diş Kliniği. Tüm hakları saklıdır.</p>
            <p>Kadıköy, İstanbul · Türkiye</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
