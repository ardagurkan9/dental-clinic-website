import type { Metadata } from "next";
import TreatmentPageLayout from "@/components/TreatmentPageLayout";

export const metadata: Metadata = {
  title: "Gülüş Tasarımı | Diş Kliniği",
  description: "Dijital gülüş tasarımı ile hayalinizdeki gülüşe kavuşun.",
};

const benefits = [
  "Dijital fotoğraf ve video analizi",
  "3D simülasyon ile önizleme",
  "Diş rengi ve şekli optimizasyonu",
  "Dişeti estetiği planlaması",
  "Laminat, veneer ve bonding",
  "Bireyselleştirilmiş tedavi planı",
];

export default function GulusTaskarimiPage() {
  return (
    <TreatmentPageLayout
      title="Gülüş Tasarımı"
      crumbLabel="Gülüş Tasarımı"
      crumbHref="/tedaviler/gulus-tasarimi"
      overline="Estetik Diş Hekimliği"
      heading="Hayalinizdeki Gülüşe Kavuşun"
      paragraphs={[
        "Gülüş tasarımı, yüz hatlarınıza ve kişisel tercihlerinize uygun ideal gülüşü dijital teknoloji yardımıyla planlayan, çok disiplinli bir estetik tedavi yaklaşımıdır.",
        "Tedavi başlamadan önce sonucu dijital ortamda görmenizi sağlayan simülasyon teknolojimiz sayesinde beklentilerinize tam uygun bir sonuç elde edersiniz.",
      ]}
      benefits={benefits}
    />
  );
}
