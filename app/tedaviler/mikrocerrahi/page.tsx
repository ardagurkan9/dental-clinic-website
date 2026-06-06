import type { Metadata } from "next";
import TreatmentPageLayout from "@/components/TreatmentPageLayout";

export const metadata: Metadata = {
  title: "Mikrocerrahi ve Plastik Cerrahi | Diş Kliniği",
  description: "Minimal invaziv mikrocerrahi teknikleriyle hassas ve estetik sonuçlar.",
};

const faqs = [
  {
    id: "item-1",
    title: "Mikrocerrahi hangi durumlarda uygulanır?",
    content: "Dişeti çekilmesi (resession) tedavisinde, dişeti hattının estetik düzenlenmesinde, frenulum (dudak/dil bağı) plastisinde ve kök yüzeyi düzeltme işlemlerinde uygulanır. Büyütme gerektiren hassas cerrahi alanlarda tercih edilir.",
  },
  {
    id: "item-2",
    title: "İyileşme süreci nasıldır?",
    content: "Minimal invaziv yaklaşım sayesinde geleneksel cerrahiye kıyasla daha hızlı iyileşme sağlanır. İlk 48 saat şişlik ve hafif ağrı olabilir. Dikişler genellikle 1 hafta sonra alınır; tam iyileşme 2–4 haftada tamamlanır.",
  },
  {
    id: "item-3",
    title: "Dişeti çekilmesi tedavisi kalıcı mıdır?",
    content: "Evet. Bağ dokusu veya serbest dişeti grefti ile yapılan plastik cerrahi uzun vadeli sonuçlar verir. Tedavi sonrası uygun fırçalama tekniği ve düzenli kontrollerle çekilmenin tekrar oluşması önlenebilir.",
  },
  {
    id: "item-4",
    title: "İşlem lokal anestezi ile mi yapılır?",
    content: "Evet. Tüm mikrocerrahi işlemler lokal anestezi altında gerçekleştirilir; bu nedenle işlem sırasında ağrı hissedilmez. İşlem öncesi sakinleştirici kullanım isteğinizi hekimimizle paylaşabilirsiniz.",
  },
  {
    id: "item-5",
    title: "Frenulum plastisi çocuklara da uygulanır mı?",
    content: "Evet. Dudak veya dil bağının emme, konuşma ya da dişlerin arasında boşluk oluşturma gibi işlevsel sorunlara yol açtığı durumlarda her yaşa uygulanabilir. Pediatrik vakalarda ek konfor için sedasyon seçeneği de değerlendirilebilir.",
  },
];

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
      faqs={faqs}
    />
  );
}
