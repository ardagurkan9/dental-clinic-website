import type { Metadata } from "next";
import TreatmentPageLayout from "@/components/TreatmentPageLayout";

export const metadata: Metadata = {
  title: "Kemik Grefti & Rejeneratif Uygulamalar | Diş Kliniği",
  description: "Kemik kaybını gidermek ve implant için zemin hazırlamak amacıyla rejeneratif tedaviler.",
};

const benefits = [
  "Kemik hacmini artıran greft uygulamaları",
  "Guided Bone Regeneration (GBR)",
  "Biyolojik membran kullanımı",
  "İmplant öncesi kemik hazırlığı",
  "Kendi kemiği ile otojen greft",
  "Uzun vadeli kemik stabilitesi",
];

export default function KemikGreftiPage() {
  return (
    <TreatmentPageLayout
      title="Kemik Grefti & Rejenerasyon"
      crumbLabel="Kemik Grefti"
      crumbHref="/tedaviler/kemik-grefti"
      overline="Rejeneratif Diş Hekimliği"
      heading="Kaybedilen Kemiği Yeniden İnşa Edin"
      paragraphs={[
        "Periodontitis veya diş çekiminden kaynaklanan kemik kayıpları, implant tedavisinin önünde engel oluşturabilir. Kemik grefti uygulamaları ile bu eksiklik giderilerek sağlam bir implant zemini hazırlanır.",
        "Rejeneratif tekniklerimiz; doğal iyileşme sürecini destekleyerek çevrenin kendi biyolojik kapasitesini kullanır ve kalıcı sonuçlar sağlar.",
      ]}
      benefits={benefits}
    />
  );
}
