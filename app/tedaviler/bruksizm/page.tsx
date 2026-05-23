import type { Metadata } from "next";
import TreatmentPageLayout from "@/components/TreatmentPageLayout";

export const metadata: Metadata = {
  title: "Bruksizm Tedavisi & Masseter Botoksu | Diş Kliniği",
  description: "Gece diş sıkma ve bruksizm için uzman tedavi yöntemleri.",
};

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
    />
  );
}
