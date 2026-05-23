import type { Metadata } from "next";
import TreatmentPageLayout from "@/components/TreatmentPageLayout";

export const metadata: Metadata = {
  title: "İmplant & Çene Cerrahisi | Diş Kliniği",
  description: "Eksik dişler için kalıcı ve doğal görünümlü implant çözümleri.",
};

const benefits = [
  "Tek diş ve tam ark implant uygulamaları",
  "All-on-4 ve All-on-6 protokolleri",
  "Kemik grefti destekli implant",
  "Sinüs lifting işlemleri",
  "Dijital implant planlaması",
  "Hızlı iyileşme protokolleri",
];

export default function ImplantCeneCerrahisiPage() {
  return (
    <TreatmentPageLayout
      title="İmplant & Çene Cerrahisi"
      crumbLabel="İmplant & Çene Cerrahisi"
      crumbHref="/tedaviler/implant"
      overline="İmplantoloji"
      heading="Eksik Dişleriniz İçin Kalıcı Çözüm"
      paragraphs={[
        "Diş implantı, eksik dişlerin yerine yerleştirilen titanyum vida ile doğal dişe en yakın fonksiyon ve görünümü sunan kalıcı bir çözümdür. Doğru aday seçimi ve planlama ile onlarca yıl sorunsuz kullanım sağlanabilir.",
        "Oral cerrahi uzmanlarımız; dijital görüntüleme ve 3D planlama teknolojisiyle her vakayı bireysel olarak değerlendirerek en uygun implant stratejisini belirliyor.",
      ]}
      benefits={benefits}
    />
  );
}
