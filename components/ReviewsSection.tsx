const reviews = [
  { name: "Mehmet K.", treatment: "Dental İmplant", date: "Mart 2025", text: "İmplant tedavim için başka kliniklerle görüştüm ama bu klinik gerçekten fark yaratıyor. Hem doktor hem ekip son derece ilgili ve profesyonel." },
  { name: "Ayşe S.", treatment: "Gülüş Tasarımı", date: "Şubat 2025", text: "Gülüş tasarımım hayatımı değiştirdi. Tedaviye başlamadan önce sonucu görmek beni çok rahatlattı. Şimdi her fırsatta gülümsüyorum!" },
  { name: "Fatma D.", treatment: "Diş Beyazlatma", date: "Ocak 2025", text: "Diş beyazlatma işlemim tek seansta tamamlandı ve inanılmaz bir fark oldu. Klinik çok temiz ve hijyenik. Herkese tavsiye ederim." },
];

function StarIcon() {
  return (
    <svg className="w-3.5 h-3.5 fill-[#B8966A] text-[#B8966A]" viewBox="0 0 24 24">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#1C1A15]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#8B7355]" />
            <span className="text-[#8B7355] text-[11px] tracking-[0.22em] uppercase font-medium font-outfit">Hasta Yorumları</span>
          </div>
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
              <p className="text-[#9B8E7D] text-sm leading-relaxed flex-1 mb-6 relative z-10">&ldquo;{text}&rdquo;</p>
              <div className="border-t border-[#3D3830] pt-5 flex items-end justify-between">
                <div>
                  <p className="font-cormorant text-lg font-medium text-[#FAF7F2] leading-tight">{name}</p>
                  <p className="text-[#8B7355] text-[11px] tracking-widest uppercase mt-0.5 font-outfit">{treatment}</p>
                </div>
                <span className="text-[#6B5F4E] text-xs font-outfit">{date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
