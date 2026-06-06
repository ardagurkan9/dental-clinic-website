import type { Metadata } from "next";
import TreatmentPageLayout from "@/components/TreatmentPageLayout";

export const metadata: Metadata = {
  title: "İmplant & Çene Cerrahisi | Diş Kliniği",
  description: "Eksik dişler için kalıcı ve doğal görünümlü implant çözümleri.",
};

const faqs = [
  {
    id: "item-1",
    title: "İmplant işlemi ağrılı mıdır?",
    content: "Hayır. İmplant, lokal anestezi altında gerçekleştirildiği için işlem sırasında ağrı hissetmezsiniz. İşlem sonrasında hafif bir şişlik ve gerginlik olabilir; bu birkaç günde geçer.",
  },
  {
    id: "item-2",
    title: "İmplant tedavisi ne kadar sürer?",
    content: "Vidanın yerleştirilmesi genellikle 30–60 dakika sürer. Kemiğin implantla kaynaşması (osseointegrasyon) ise 3–6 ay alır. Bu sürenin sonunda üst yapı (kron) tamamlanır.",
  },
  {
    id: "item-3",
    title: "Her yaştaki kişiye implant uygulanabilir mi?",
    content: "18 yaş üzeri, kemik gelişimi tamamlanmış bireylere uygulanabilir. Üst yaş sınırı yoktur; önemli olan genel sağlık durumu ve kemik yoğunluğudur. İlk muayenede hekimimiz sizi değerlendirir.",
  },
  {
    id: "item-4",
    title: "İmplant ömrü ne kadar?",
    content: "Doğru bakım ve düzenli kontrol ile implantlar ömür boyu dayanabilir. Üst yapı (kron) ise 15–20 yıl veya daha uzun süre işlevselliğini korur.",
  },
  {
    id: "item-5",
    title: "Kemik yetersizliğinde implant mümkün müdür?",
    content: "Evet. Kemik grefti veya sinüs lifting işlemleriyle yeterli kemik hacmi oluşturularak implant uygulaması gerçekleştirilebilir. Bu planlamayı 3D görüntüleme ile yapıyoruz.",
  },
];

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
      faqs={faqs}
    />
  );
}
