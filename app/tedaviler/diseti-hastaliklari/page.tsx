import type { Metadata } from "next";
import TreatmentPageLayout from "@/components/TreatmentPageLayout";

export const metadata: Metadata = {
  title: "Dişeti Hastalıkları Tedavileri | Diş Kliniği",
  description: "Periodontoloji uzmanlarımızla dişeti hastalıklarınız için kalıcı çözümler.",
};

const benefits = [
  "Erken tanı ve önleyici bakım programı",
  "Diştaşı ve plak temizliği (skeyling)",
  "Periodontal cerrahi uygulamaları",
  "Dişeti çekilmesi tedavisi",
  "Uzun dönemli bakım ve takip",
  "Ağız kokusunun köklü tedavisi",
];

export default function DissetiHastaliklariPage() {
  return (
    <TreatmentPageLayout
      title="Dişeti Hastalıkları Tedavileri"
      crumbLabel="Dişeti Hastalıkları"
      crumbHref="/tedaviler/diseti-hastaliklari"
      overline="Periodontoloji"
      heading="Dişetleriniz İçin Uzman Tedavi"
      paragraphs={[
        "Dişeti hastalıkları (periodontitis ve gingivitis), ağız sağlığının ihmal edilen ama en önemli sorunları arasındadır. Erken teşhis ve uygun tedavi ile dişlerinizi uzun yıllar sağlıklı tutmak mümkündür.",
        "Periodontoloji uzmanlarımız, en güncel tanı araçları ve minimal invaziv tedavi yöntemleriyle dişetlerinizi sağlığa kavuşturuyor.",
      ]}
      benefits={benefits}
    />
  );
}
