import type { Metadata } from "next";
import TreatmentPageLayout from "@/components/TreatmentPageLayout";

export const metadata: Metadata = {
  title: "Estetik Protetik & Restoratif Uygulamalar | Diş Kliniği",
  description: "Porselen, zirkonyum ve kompozit restorasyon ile estetik gülüş.",
};

const faqs = [
  {
    id: "item-1",
    title: "Zirkonyum ve porselen kronlar arasındaki fark nedir?",
    content: "Zirkonyum kronlar metal içermez; bu sayede dişetinde gri hat oluşmaz ve ışık geçirgenliği sayesinde doğal görünüm sağlar. Porselen-metal kronlar ise altyapısında metal olduğundan zamanla gri kenar oluşabilir. Zirkonyum daha dayanıklı ve daha estetiktir.",
  },
  {
    id: "item-2",
    title: "Laminat veneer ne kadar süre dayanır?",
    content: "Porselen laminat veneerlar iyi bakım koşullarında 15–20 yıl veya daha uzun süre dayanabilir. Gece plağı kullanımı, sert yiyeceklerden kaçınma ve düzenli diş hekimi kontrolü ömrü uzatır.",
  },
  {
    id: "item-3",
    title: "Kron yaptırmak için dişim kesilmek zorunda mı?",
    content: "Geleneksel kronlarda dişin çevresinden bir miktar madde alınır. Ancak laminat veneer ve onlay restorasyonlar minimal kesim gerektirdiğinden dişin büyük bölümü korunur. Hekimimiz size en az girişimli seçeneği önerir.",
  },
  {
    id: "item-4",
    title: "Kompozit bonding uzun süre dayanıklı mıdır?",
    content: "Kompozit bonding iyi bakımla 5–8 yıl dayanabilir; ancak porselen veneerlara kıyasla daha düşük renk kalıcılığı ve aşınma direncine sahiptir. Bütçe dostu ve hızlı bir seçenektir; daha sonra porselene geçiş yapılabilir.",
  },
  {
    id: "item-5",
    title: "Protetik tedavi süreci ne kadar sürer?",
    content: "Dijital ölçü ve model ile laboratuvar süreci kısalmıştır. Zirkonyum kronlar genellikle 5–7 iş gününde hazırlanır. Geçici restorasyonla bu süreç konforlu bir şekilde geçirilir. Tüm tedavi süreci ortalama 2–3 haftadır.",
  },
];

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
      faqs={faqs}
    />
  );
}
