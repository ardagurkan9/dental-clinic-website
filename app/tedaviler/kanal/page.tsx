import type { Metadata } from "next";
import TreatmentPageLayout from "@/components/TreatmentPageLayout";

export const metadata: Metadata = {
  title: "Kanal Tedavisi | Diş Kliniği",
  description: "Ağrısız ve modern kanal tedavisi ile dişinizi kurtarın.",
};

const faqs = [
  {
    id: "item-1",
    title: "Kanal tedavisi ağrılı mıdır?",
    content: "Hayır. İşlem lokal anestezi altında gerçekleştirildiğinden ağrı hissedilmez. Zaten kanal tedavisinin amacı mevcut ağrıyı gidermektir. İşlem sonrasında birkaç günlük hafif hassasiyet olabilir; bu ağrı kesici ile kolayca yönetilir.",
  },
  {
    id: "item-2",
    title: "Kanal tedavisi kaç seansta tamamlanır?",
    content: "Tek köklü dişlerde genellikle tek seansta tamamlanabilir. Çok köklü veya daha karmaşık vakalarda 2–3 seans gerekebilir. Endodonti uzmanlarımız çoğu vakayı tek seansta bitirmeyi hedefler.",
  },
  {
    id: "item-3",
    title: "Kanal tedavisi yapılan diş ne kadar dayanır?",
    content: "Kanal tedavisinin ardından uygun bir restorasyon (kron veya dolgu) yapılırsa diş onlarca yıl işlev görür. Üst yapının kalitesi ve düzenli kontroller dişin ömrünü doğrudan etkiler.",
  },
  {
    id: "item-4",
    title: "Kanal tedavisi ne zaman gereklidir?",
    content: "Dişin içindeki sinir ve damarların (pulpa) enfeksiyon kapması veya hasar görmesi durumunda gereklidir. Uzun süren spontan ağrı, sıcağa aşırı hassasiyet, dişin renginin koyulaşması veya diş etinde şişlik belirtiler arasındadır.",
  },
  {
    id: "item-5",
    title: "Kanal tedavisi yerine diş çektirmek daha iyi midir?",
    content: "Hayır. Doğal dişin korunması her zaman öncelikli hedeftir. Çekilen bir dişin yerinin implant veya köprüyle kapatılması daha uzun ve maliyetli bir süreçtir. Kanal tedavisiyle kurtarılabilen bir diş çekilmemelidir.",
  },
];

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
      faqs={faqs}
    />
  );
}
