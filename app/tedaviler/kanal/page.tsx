import type { Metadata } from "next";
import TreatmentPageLayout from "@/components/TreatmentPageLayout";

export const metadata: Metadata = {
  title: "Kanal Tedavisi | Diş Kliniği",
  description: "Ağrısız ve modern kanal tedavisi ile dişinizi kurtarın.",
};

const benefits = [
  "Lokal anestezi ile ağrısız işlem",
  "Tek seansta kanal tedavisi",
  "Nikel-titanyum rotary aletler",
  "Apikal cerrahisi (gerektiğinde)",
  "Mikroskop destekli endodonti",
  "Yüksek başarı oranı",
];

export default function KanalTedavisiPage() {
  return (
    <TreatmentPageLayout
      title="Kanal Tedavisi"
      crumbLabel="Kanal Tedavisi"
      crumbHref="/tedaviler/kanal"
      overline="Endodonti"
      heading="Dişinizi Kaybetmeden Kurtarıyoruz"
      paragraphs={[
        "Kanal tedavisi, enfekte veya hasar görmüş diş pulpasının (sinir ve damar dokusu) temizlenerek dişin korunduğu bir tedavi yöntemidir. Modern tekniklerle bu işlem artık çok daha hızlı ve ağrısızdır.",
        "Endodonti uzmanlarımız; rotary sistemler ve gerektiğinde mikroskop kullanarak en zorlu vakalarda bile yüksek başarı oranı sağlamaktadır.",
      ]}
      benefits={benefits}
    />
  );
}
