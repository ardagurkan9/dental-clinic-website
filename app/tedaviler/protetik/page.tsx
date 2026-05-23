import type { Metadata } from "next";
import TreatmentPageLayout from "@/components/TreatmentPageLayout";

export const metadata: Metadata = {
  title: "Estetik Protetik & Restoratif Uygulamalar | Diş Kliniği",
  description: "Porselen, zirkonyum ve kompozit restorasyon ile estetik gülüş.",
};

const benefits = [
  "Zirkonyum ve porselen kronlar",
  "Laminat veneer uygulamaları",
  "Kompozit bonding ile şekillendirme",
  "Tam ve parsiyel protezler",
  "İmplant üstü protetik restorasyon",
  "Dijital ölçü ve model teknolojisi",
];

export default function EsteticProtetikPage() {
  return (
    <TreatmentPageLayout
      title="Estetik Protetik & Zirkonyum"
      crumbLabel="Estetik Protetik"
      crumbHref="/tedaviler/protetik"
      overline="Protetik Diş Tedavisi"
      heading="Estetik ve Fonksiyonel Restorasyon"
      paragraphs={[
        "Kırık, renklenmiş veya şekil bozukluğu olan dişler, modern restoratif tekniklerle hem estetik hem de fonksiyonel açıdan iyileştirilebilir. Zirkonyum ve porselen altyapılar doğal dişle uyumlu bir görünüm sunar.",
        "Protetik tedavilerimiz bireysel renk, şekil ve boyut planlaması ile tasarlanır; böylece her hasta kendine özel bir sonuç elde eder.",
      ]}
      benefits={benefits}
    />
  );
}
