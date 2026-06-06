import type { Metadata } from "next";
import TreatmentPageLayout from "@/components/TreatmentPageLayout";

export const metadata: Metadata = {
  title: "Gülüş Tasarımı | Diş Kliniği",
  description: "Dijital gülüş tasarımı ile hayalinizdeki gülüşe kavuşun.",
};

const faqs = [
  {
    id: "item-1",
    title: "Gülüş tasarımı kimlere uygulanabilir?",
    content: "Genel ağız sağlığı iyi olan 18 yaş ve üzeri herkese uygulanabilir. Aktif dişeti hastalığı veya çürük varsa önce bunlar tedavi edilir. İlk muayenede hekimimiz uygunluğunuzu değerlendirir.",
  },
  {
    id: "item-2",
    title: "Dijital simülasyonda sonucu gerçekten görebilir miyim?",
    content: "Evet. Yüz fotoğraflarınız ve ağız taramanız üzerinden bilgisayar ortamında tahmini sonucu görselleştiriyoruz. Bu sayede tedaviye başlamadan beklentilerinizi hekimimizle netleştirebilirsiniz.",
  },
  {
    id: "item-3",
    title: "Gülüş tasarımı süreci ne kadar sürer?",
    content: "Planlama ve simülasyon ilk seansta tamamlanır. Tedavinin kendisi seçilen yönteme göre 1 ila 4 hafta arasında değişebilir. Laminat veneer gibi uygulamalar genellikle 2–3 seansta bitirilir.",
  },
  {
    id: "item-4",
    title: "Laminat veneer ile kompozit bonding arasındaki fark nedir?",
    content: "Laminat veneer, porselen veya zirkonyumdan laboratuvarda üretilen ince kabuktur; dayanıklılığı ve renk kalıcılığı daha yüksektir. Bonding ise tek seansta kompozit reçineyle doğrudan dişe şekil verme işlemidir; daha ekonomiktir ancak zamanla renk değişimi olabilir.",
  },
  {
    id: "item-5",
    title: "Gülüş tasarımı sonuçları kalıcı mıdır?",
    content: "Porselen laminat veneerlar iyi bakım koşullarında 15–20 yıl veya daha uzun süre dayanabilir. Düzenli kontrol, dişlerinizi renklendirebilecek yiyeceklerden kaçınma ve gece plağı kullanımı ömrü uzatır.",
  },
];

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
      faqs={faqs}
    />
  );
}
