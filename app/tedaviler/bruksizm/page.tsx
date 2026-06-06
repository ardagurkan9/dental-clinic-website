import type { Metadata } from "next";
import TreatmentPageLayout from "@/components/TreatmentPageLayout";

export const metadata: Metadata = {
  title: "Bruksizm Tedavisi & Masseter Botoksu | Diş Kliniği",
  description: "Gece diş sıkma ve bruksizm için uzman tedavi yöntemleri.",
};

const faqs = [
  {
    id: "item-1",
    title: "Bruksizmim olduğunu nasıl anlarım?",
    content: "Sabahları çene ağrısı, baş ağrısı, yorgun çene kasları veya partnerin gece diş gıcırdattığınızı söylemesi en yaygın belirtilerdir. Ayrıca dişlerde düzleşme ve aşınma da hekimimizin muayenesinde tespit edebileceği bulgulardandır.",
  },
  {
    id: "item-2",
    title: "Masseter botoksu ağrılı mıdır?",
    content: "İnce iğnelerle yapılan botoks enjeksiyonu çok kısa sürer ve minimal rahatsızlık verir. Anestezik krem veya buz uygulamasıyla bu rahatsızlık daha da azaltılabilir.",
  },
  {
    id: "item-3",
    title: "Gece plağını sürekli kullanmam gerekir mi?",
    content: "Başlangıçta her gece kullanılması önerilir. Semptomlar azaldıkça kullanım sıklığı azaltılabilir. Bazı hastalar uzun vadede düzenli kullanımdan fayda görür; bu bireysel değerlendirmeye bağlıdır.",
  },
  {
    id: "item-4",
    title: "Masseter botoksunun etkisi ne kadar sürer?",
    content: "Etki genellikle 4–6 ay sürer. Düzenli tekrarlanan uygulamalarla kas aktivitesi zamanla azaldığından seans aralıkları uzayabilir.",
  },
  {
    id: "item-5",
    title: "Bruksizm tedavi edilmezse ne olur?",
    content: "Tedavi edilmediğinde dişlerde ciddi aşınma, hassasiyet, kırık ve çatlak oluşabilir. Uzun vadede çene ekleminde (TME) kalıcı hasara ve kronik ağrıya yol açabilir.",
  },
];

const benefits = [
  "Özel üretim gece plağı (splint)",
  "Masseter kasına botoks enjeksiyonu",
  "Çene eklemi (TME) tedavisi",
  "Stres kaynaklı diş aşınması tamiri",
  "Ağrı ve baş ağrısı yönetimi",
  "Uzun dönemli takip ve koruma",
];

export default function BruksizmPage() {
  return (
    <TreatmentPageLayout
      title="Bruksizm & Masseter Botoksu"
      crumbLabel="Bruksizm Tedavisi"
      crumbHref="/tedaviler/bruksizm"
      overline="Çene & Ağrı Yönetimi"
      heading="Diş Sıkmanın Kalıcı Çözümü"
      paragraphs={[
        "Bruksizm (diş gıcırdatma veya sıkma), farkında olmadan gerçekleşen ve dişlerde aşınmaya, çene ağrısına ve baş ağrısına yol açan yaygın bir durumdur. Erken müdahale ile ciddi diş hasarının önüne geçilebilir.",
        "Masseter kasına uygulanan botoks enjeksiyonu, kas aktivitesini azaltarak hem bruksizm semptomlarını giderir hem de yüz hatlarını incelterek estetik katkı sağlar.",
      ]}
      benefits={benefits}
      faqs={faqs}
    />
  );
}
