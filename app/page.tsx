import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Diş Kliniği | Gülüşünüzü Güvenle Yeniden Tasarlıyoruz",
  description:
    "Kadıköy'de 15+ yıllık deneyimli diş kliniği. İmplant, zirkonyum kron, diş beyazlatma ve gülüş tasarımı. Ücretsiz ilk muayene için WhatsApp ile randevu alın.",
};

export default function HomePage() {
  return <LandingPage />;
}
