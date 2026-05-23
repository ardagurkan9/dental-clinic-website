import type { Metadata } from "next";
import TreatmentPageLayout from "@/components/TreatmentPageLayout";

export const metadata: Metadata = {
  title: "Mikrocerrahi ve Plastik Cerrahi | Diş Kliniği",
  description: "Minimal invaziv mikrocerrahi teknikleriyle hassas ve estetik sonuçlar.",
};

const benefits = [
  "Minimal invaziv cerrahi yaklaşım",
  "Büyütme altında hassas doku işlemi",
  "Hızlı iyileşme ve az ağrı",
  "Dişeti estetik cerrahisi",
  "Kök yüzeyi düzeltme (root planing)",
  "Frenulum plastisi",
];

export default function MikrocerrahiPage() {
  return (
    <TreatmentPageLayout
      title="Mikrocerrahi ve Plastik Cerrahi"
      crumbLabel="Mikrocerrahi"
      crumbHref="/tedaviler/mikrocerrahi"
      overline="Cerrahi Uzmanlık"
      heading="Hassas Teknik, Üstün Sonuç"
      paragraphs={[
        "Mikrocerrahi, özel büyüteçler ve ince aletler kullanılarak gerçekleştirilen milimetrik hassasiyetteki cerrahi uygulamalardır. Bu sayede daha az doku hasarı, daha hızlı iyileşme ve daha estetik sonuçlar elde edilir.",
        "Plastik periodontal cerrahi uygulamalarımız; dişeti çekilmesi, dişeti hatlarının düzenlenmesi ve estetik gülüş oluşturma amacıyla uygulanmaktadır.",
      ]}
      benefits={benefits}
    />
  );
}
