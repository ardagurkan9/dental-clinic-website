const reviews = [
  { name: "Mehmet K.", treatment: "Dental İmplant", date: "Mart 2025", text: "İmplant tedavim için başka kliniklerle görüştüm ama bu klinik gerçekten fark yaratıyor. Hem doktor hem ekip son derece ilgili ve profesyonel." },
  { name: "Ayşe S.", treatment: "Gülüş Tasarımı", date: "Şubat 2025", text: "Gülüş tasarımım hayatımı değiştirdi. Tedaviye başlamadan önce sonucu görmek beni çok rahatlattı. Şimdi her fırsatta gülümsüyorum!" },
  { name: "Fatma D.", treatment: "Diş Beyazlatma", date: "Ocak 2025", text: "Diş beyazlatma işlemim tek seansta tamamlandı ve inanılmaz bir fark oldu. Klinik çok temiz ve hijyenik. Herkese tavsiye ederim." },
];

function StarIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="#D4A017" viewBox="0 0 24 24">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-20 sm:py-28 font-outfit" style={{ background: "#FAF8F5" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: "#B8922A" }} />
            <span className="text-[10px] tracking-[0.28em] uppercase font-medium" style={{ color: "#B8922A" }}>Hasta Yorumları</span>
          </div>
          <h2 className="font-cormorant text-5xl font-light" style={{ color: "#0F1E35" }}>
            Hastalarımız <span className="italic font-medium" style={{ color: "#B8922A" }}>ne diyor?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map(({ name, date, treatment, text }) => (
            <div key={name}
              className="p-9 flex flex-col relative transition-all duration-300"
              style={{ background: "#FFFFFF", border: "1px solid rgba(184,146,42,0.13)", boxShadow: "0 2px 20px rgba(15,30,53,0.05)" }}>
              <span className="font-cormorant text-[100px] font-bold leading-none absolute -top-2 right-6 select-none pointer-events-none"
                style={{ color: "rgba(184,146,42,0.07)" }}>&ldquo;</span>
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="text-sm leading-relaxed flex-1 mb-8 relative z-10" style={{ color: "#8A7E70" }}>&ldquo;{text}&rdquo;</p>
              <div className="pt-6 flex items-end justify-between" style={{ borderTop: "1px solid rgba(184,146,42,0.1)" }}>
                <div>
                  <p className="font-cormorant text-xl font-semibold leading-tight" style={{ color: "#0F1E35" }}>{name}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase mt-0.5 font-medium" style={{ color: "#B8922A" }}>{treatment}</p>
                </div>
                <span className="text-xs" style={{ color: "#8A7E70" }}>{date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
