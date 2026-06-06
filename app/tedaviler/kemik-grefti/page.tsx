import type { Metadata } from "next";
import TreatmentPageLayout from "@/components/TreatmentPageLayout";

export const metadata: Metadata = {
  title: "Kemik Grefti & Rejeneratif Uygulamalar | Diş Kliniği",
  description: "Kemik kaybını gidermek ve implant için zemin hazırlamak amacıyla rejeneratif tedaviler.",
};

const faqs = [
  {
    id: "item-1",
    title: "Kemik grefti neden gereklidir?",
    content: "Diş çekimi, periodontitis veya uzun süreli diş eksikliği kemik erimesine yol açar. İmplant yerleştirilmesi için yeterli kemik hacmi ve yoğunluğu gerektiğinden önce bu eksikliğin giderilmesi gerekir.",
  },
  {
    id: "item-2",
    title: "Greft materyali nereden gelir?",
    content: "Hastanın kendi kemikleri (otojen greft), dondurularak işlenmiş insan kemikleri (allogreft), hayvansal kaynaklı biyomateryaller (ksenogreft) veya sentetik materyaller kullanılabilir. Hekimimiz vakaya en uygun seçeneği belirler.",
  },
  {
    id: "item-3",
    title: "Kemik grefti ile implant aynı seansta uygulanabilir mi?",
    content: "Kemik kaybı sınırlıysa evet, aynı seansta yapılabilir. Kemik kaybı fazlaysa önce greft yapılır, 4–6 ay olgunlaşma süreci beklendikten sonra implant yerleştirilir.",
  },
  {
    id: "item-4",
    title: "İyileşme süreci ne kadar sürer?",
    content: "Yumuşak doku iyileşmesi 2–3 haftada tamamlanır. Yeni kemiğin implant için yeterli olgunluğa ulaşması ise 4–6 ay alır. Bu süreçte düzenli kontrol randevularına gelmek önemlidir.",
  },
  {
    id: "item-5",
    title: "Greft başarısız olabilir mi?",
    content: "Sigara kullanımı, kontrolsüz diyabet ve yetersiz ağız hijyeni başarı oranını düşürebilir. Uygun hasta seçimi ve iyi takip ile başarı oranı oldukça yüksektir. Olası riskler ilk muayenede size aktarılır.",
  },
];

const benefits = [
  "Kemik hacmini artıran greft uygulamaları",
  "Guided Bone Regeneration (GBR)",
  "Biyolojik membran kullanımı",
  "İmplant öncesi kemik hazırlığı",
  "Kendi kemiği ile otojen greft",
  "Uzun vadeli kemik stabilitesi",
];

export default function KemikGreftiPage() {
  return (
    <TreatmentPageLayout
      title="Kemik Grefti & Rejenerasyon"
      crumbLabel="Kemik Grefti"
      crumbHref="/tedaviler/kemik-grefti"
      overline="Rejeneratif Diş Hekimliği"
      heading="Kaybedilen Kemiği Yeniden İnşa Edin"
      paragraphs={[
        "Periodontitis veya diş çekiminden kaynaklanan kemik kayıpları, implant tedavisinin önünde engel oluşturabilir. Kemik grefti uygulamaları ile bu eksiklik giderilerek sağlam bir implant zemini hazırlanır.",
        "Rejeneratif tekniklerimiz; doğal iyileşme sürecini destekleyerek çevrenin kendi biyolojik kapasitesini kullanır ve kalıcı sonuçlar sağlar.",
      ]}
      benefits={benefits}
      faqs={faqs}
    />
  );
}
