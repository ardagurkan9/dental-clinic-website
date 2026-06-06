import type { Metadata } from "next";
import TreatmentPageLayout from "@/components/TreatmentPageLayout";

export const metadata: Metadata = {
  title: "Dijital Diş Hekimliği | Diş Kliniği",
  description: "CAD/CAM, 3D tarama ve dijital röntgen teknolojileriyle ileri seviye tedavi.",
};

const faqs = [
  {
    id: "item-1",
    title: "Dijital tarama geleneksel ölçüden nasıl farklıdır?",
    content: "Geleneksel yöntemde alçı veya silikon ölçü maddesi kullanılırken dijital tarayıcı saniyeler içinde ağzın 3D modelini oluşturur. Böylece kıvam sorunu, bekleme süresi ve laboratuvar hata payı ortadan kalkar.",
  },
  {
    id: "item-2",
    title: "CAD/CAM kronlar tek seansta hazırlanıyor mu?",
    content: "Evet. Dijital tarama verisi doğrudan freze makinesine aktarılarak seramik bloktan kron işlenir ve aynı seansta yerleştirilir. Geçici kron ve ikinci randevu ihtiyacı ortadan kalkar.",
  },
  {
    id: "item-3",
    title: "CBCT (3D BT) nedir, her hastaya çekilir mi?",
    content: "CBCT, düşük dozlu konik ışınlı bilgisayarlı tomografidir ve implant planlaması, gömük diş, kist veya sinüs değerlendirmesinde kullanılır. Her hastaya rutin olarak çekilmez; endikasyona göre hekimimiz karar verir.",
  },
  {
    id: "item-4",
    title: "Dijital simülasyon ile tedavi öncesi sonucu görebilir miyim?",
    content: "Evet. Dijital Smile Design (DSD) yazılımıyla yüz fotoğraflarınız üzerinden tahmini tedavi sonucunuzu görselleştirebiliriz. Bu, özellikle gülüş tasarımı ve protetik tedavilerden önce beklentileri netleştirmek için çok değerlidir.",
  },
  {
    id: "item-5",
    title: "Dijital teknolojiler tedaviyi daha pahalı yapar mı?",
    content: "Kısa vadede bazı hizmetlerin maliyeti biraz yüksek olabilir; ancak daha az seans, daha az hata ve daha uzun ömürlü sonuçlar göz önüne alındığında uzun vadede ekonomik bir seçimdir.",
  },
];

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
      faqs={faqs}
    />
  );
}
