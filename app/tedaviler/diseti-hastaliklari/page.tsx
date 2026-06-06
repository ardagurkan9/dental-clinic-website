import type { Metadata } from "next";
import TreatmentPageLayout from "@/components/TreatmentPageLayout";

export const metadata: Metadata = {
  title: "Dişeti Hastalıkları Tedavileri | Diş Kliniği",
  description: "Periodontoloji uzmanlarımızla dişeti hastalıklarınız için kalıcı çözümler.",
};

const faqs = [
  {
    id: "item-1",
    title: "Dişeti hastalığının belirtileri nelerdir?",
    content: "Fırçalama veya diş ipi kullanımı sırasında kanama, dişeti şişliği ve kızarıklığı, ağız kokusu, dişlerde uzama hissi ve sallantı erken uyarı işaretleridir. Bu belirtilerden birini yaşıyorsanız gecikmeden muayene olmanızı öneririz.",
  },
  {
    id: "item-2",
    title: "Diş eti kanaması ciddi bir sorun mu?",
    content: "Sağlıklı dişetleri kanamaz. Kanama; gingivitis (dişeti iltihabı) veya daha ileri evre periodontitis belirtisi olabilir. Erken müdahaleyle hastalık tersine döndürülebilir; ihmal edilirse kemik kaybına yol açar.",
  },
  {
    id: "item-3",
    title: "Periodontal tedavi ağrılı mıdır?",
    content: "Skeyling (diştaşı temizliği) işlemi lokal anestezi ile yapılır, bu nedenle ağrı hissedilmez. Cerrahi uygulamalarda da gerekli ağrı yönetimi sağlanır. İşlem sonrası hafif hassasiyet birkaç gün içinde geçer.",
  },
  {
    id: "item-4",
    title: "Tedavi sonrası dişetim tekrar eski durumuna gelir mi?",
    content: "Tedavi ve ev bakımına uyum sağlandığında dişeti sağlığı büyük ölçüde geri kazanılır. Kemik kaybı olan ileri vakalarda kayıp kemik tamamen yenilenmeyebilir; bu nedenle erken teşhis kritiktir.",
  },
  {
    id: "item-5",
    title: "Evde bakım için ne yapmalıyım?",
    content: "Günde iki kez yumuşak fırça ile fırçalama, düzenli diş ipi veya ara yüz fırçası kullanımı ve 6 ayda bir profesyonel temizlik temel önlemlerdir. Hekimimiz size bireysel ağız bakım protokolü hazırlar.",
  },
];

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
      faqs={faqs}
    />
  );
}
