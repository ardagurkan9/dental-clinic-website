"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    id: "item-1",
    title: "İmplant tedavisi ağrılı mıdır?",
    content:
      "Hayır. İmplant tedavisi lokal anestezi altında gerçekleştirildiği için işlem sırasında hiçbir ağrı hissetmezsiniz. İşlem sonrası hafif bir hassasiyet olabilir, bu da birkaç gün içinde tamamen geçer.",
  },
  {
    id: "item-2",
    title: "Diş beyazlatma ne kadar sürer ve sonuçlar kalıcı mıdır?",
    content:
      "Kliniğimizde profesyonel beyazlatma genellikle tek seansta (yaklaşık 60–90 dakika) tamamlanır. Düzenli bakım ve doğru beslenme alışkanlıklarıyla sonuçlar 1–2 yıl veya daha uzun süre kalıcı olabilir.",
  },
  {
    id: "item-3",
    title: "Zirkonyum kronlar ne kadar dayanıklıdır?",
    content:
      "İyi bakım koşullarında zirkonyum kronlar 15–20 yıl veya daha uzun süre kullanılabilir. Metal içermedikleri için hem daha sağlıklı hem de estetik bir seçenektir.",
  },
  {
    id: "item-4",
    title: "Gülüş tasarımı kimlere uygulanabilir?",
    content:
      "18 yaş ve üzeri, genel ağız sağlığı iyi olan herkese uygulanabilir. İlk muayenede hekimimiz sizi değerlendirerek en uygun tedavi planını hazırlar.",
  },
  {
    id: "item-5",
    title: "Taksit imkânı var mıdır?",
    content:
      "Evet, tüm tedavilerimizde 12 aya kadar faizsiz taksit imkânı sunulmaktadır. Detaylı ödeme seçenekleri için kliniğimizle iletişime geçebilirsiniz.",
  },
  {
    id: "item-6",
    title: "İlk muayene ücretli midir?",
    content:
      "Hayır, ilk muayene ve tedavi planlaması tamamen ücretsizdir. WhatsApp üzerinden randevu oluşturmanız yeterlidir.",
  },
];

export function DentalFaqsSection() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="w-full -space-y-px"
    >
      {questions.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="border-x-0 first:border-t-0"
          style={{ borderColor: "rgba(184,146,42,0.15)" }}
        >
          <AccordionTrigger
            className="px-2 py-5 text-[15px] font-outfit font-medium leading-snug text-left hover:no-underline
              [&[data-state=open]]:text-[#0F1E35]
              [&[data-state=closed]]:text-[#374969]
              [&[data-state=open]>svg]:text-[#B8922A]
              [&[data-state=closed]>svg]:text-[#8A7E70]"
          >
            {item.title}
          </AccordionTrigger>
          <AccordionContent
            className="px-2 text-sm leading-relaxed"
            style={{ color: "#8A7E70" }}
          >
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
