"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  id: string;
  title: string;
  content: string;
}

export function TreatmentFaqSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section className="py-20 sm:py-28 border-t" style={{ borderColor: "rgba(184,146,42,0.12)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: "#B8922A" }} />
              <span className="text-[10px] tracking-[0.28em] uppercase font-medium" style={{ color: "#B8922A" }}>SSS</span>
            </div>
            <h2 className="font-cormorant text-4xl sm:text-5xl leading-tight mb-5">
              <span className="font-light italic" style={{ color: "#0F1E35" }}>Sık Sorulan</span>
              <br />
              <span className="font-light" style={{ color: "#0F1E35" }}>Sorular</span>
            </h2>
            <p className="text-[14px] leading-relaxed" style={{ color: "#8A7E70" }}>
              Aklınızdaki soruların yanıtını bulamadıysanız WhatsApp üzerinden bize ulaşabilirsiniz.
            </p>
          </div>

          <div className="lg:col-span-2">
            <Accordion type="single" collapsible defaultValue={faqs[0]?.id} className="w-full">
              {faqs.map((item) => (
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
          </div>

        </div>
      </div>
    </section>
  );
}
