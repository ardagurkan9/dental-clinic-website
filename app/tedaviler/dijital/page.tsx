import type { Metadata } from "next";
import TreatmentPageLayout from "@/components/TreatmentPageLayout";

export const metadata: Metadata = {
  title: "Dijital Diş Hekimliği | Diş Kliniği",
  description: "CAD/CAM, 3D tarama ve dijital röntgen teknolojileriyle ileri seviye tedavi.",
};

const benefits = [
  "İntraoral (ağız içi) dijital tarama",
  "3D konik ışınlı BT (CBCT) görüntüleme",
  "CAD/CAM ile tek seansta kron",
  "Dijital implant rehberi tasarımı",
  "Sanal tedavi simülasyonu",
  "Bulut tabanlı hasta kaydı yönetimi",
];

export default function DijitalDisHekimligiPage() {
  return (
    <TreatmentPageLayout
      title="Dijital Diş Hekimliği"
      crumbLabel="Dijital Diş Hekimliği"
      crumbHref="/tedaviler/dijital"
      overline="İleri Teknoloji"
      heading="Teknoloji ile Daha İyi Tedavi"
      paragraphs={[
        "Dijital diş hekimliği; geleneksel ölçü alımını, 2D röntgenleri ve uzun laboratuvar bekleme sürelerini tarihe gömmüştür. İntraoral tarayıcılar ve CAD/CAM sistemleri sayesinde hasta konforu maksimuma çıkarılır, hata payı minimuma indirilir.",
        "Kliniğimiz; son nesil dijital ekipmanlarıyla hem tanı hem de tedavi süreçlerini daha hızlı, daha hassas ve daha öngörülebilir hâle getirmektedir.",
      ]}
      benefits={benefits}
    />
  );
}
