import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Blog | Diş Kliniği",
  description: "Diş sağlığı hakkında uzman görüşleri, ipuçları ve güncel bilgiler.",
};

const posts = [
  {
    slug: "dis-firçalama-teknikleri",
    category: "Ağız Bakımı",
    title: "Doğru Diş Fırçalama Teknikleri",
    excerpt: "Dişlerinizi doğru fırçalamak, çürük ve dişeti hastalıklarını önlemenin en temel adımıdır. Uzmanlar bu konuda ne söylüyor?",
    date: "12 Mayıs 2026",
    readTime: "3 dk okuma",
  },
  {
    slug: "implant-hakkinda-bilinmeyenler",
    category: "İmplant",
    title: "İmplant Hakkında Bilinmeyenler",
    excerpt: "İmplant tedavisi kimler için uygundur, kaç seansta tamamlanır ve uzun vadede ne kadar dayanır? Tüm sorularınıza yanıt.",
    date: "5 Mayıs 2026",
    readTime: "5 dk okuma",
  },
  {
    slug: "gulus-tasarimi-nedir",
    category: "Estetik",
    title: "Gülüş Tasarımı Nedir?",
    excerpt: "Dijital gülüş tasarımı ile hayalinizdeki gülüşe kavuşmak artık çok daha kolay. Süreç nasıl işliyor, öğrenin.",
    date: "28 Nisan 2026",
    readTime: "4 dk okuma",
  },
  {
    slug: "kanal-tedavisi-korkulacak-bir-sey-yok",
    category: "Kanal Tedavisi",
    title: "Kanal Tedavisi: Korkulacak Bir Şey Yok",
    excerpt: "Modern tekniklerle kanal tedavisi artık ağrısız ve hızlı. Tedavi sürecini ve sonrasında nelere dikkat etmeniz gerektiğini anlattık.",
    date: "20 Nisan 2026",
    readTime: "4 dk okuma",
  },
  {
    slug: "bruksizm-gece-dis-sikma",
    category: "Bruksizm",
    title: "Uyurken Diş Sıkıyor musunuz?",
    excerpt: "Bruksizm (gece diş sıkma) hem dişlerinize hem de çene kaslarınıza zarar verir. Belirtileri ve çözüm yolları neler?",
    date: "14 Nisan 2026",
    readTime: "3 dk okuma",
  },
  {
    slug: "cocuklarda-dis-sagligi",
    category: "Çocuk Diş Sağlığı",
    title: "Çocuklarda Diş Sağlığına Dikkat",
    excerpt: "İlk diş muayenesi ne zaman yapılmalı? Çocuklarda ağız sağlığı alışkanlıkları nasıl kazandırılır? Ebeveynler için rehber.",
    date: "7 Nisan 2026",
    readTime: "5 dk okuma",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen font-outfit" style={{ background: "#FAF8F5" }}>
      <PageHero
        title="Blog"
        crumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "Blog" }]}
      />

      {/* Intro */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: "#B8922A" }} />
              <span className="text-[10px] tracking-[0.28em] uppercase font-medium" style={{ color: "#B8922A" }}>Güncel İçerikler</span>
            </div>
            <h2 className="font-cormorant text-5xl font-light max-w-lg leading-tight" style={{ color: "#0F1E35" }}>
              Diş Sağlığı <span className="italic font-medium" style={{ color: "#B8922A" }}>Rehberi</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed max-w-xl" style={{ color: "#8A7E70" }}>
              Uzmanlarımızın kaleminden diş sağlığı ipuçları, tedavi bilgileri ve sektörden haberler.
            </p>
          </div>

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="overflow-hidden flex flex-col group glass-card glass-card-hover transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="h-48 flex items-center justify-center relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #F5F0EA 0%, #EDE5D8 100%)" }}>
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l" style={{ borderColor: "rgba(184,146,42,0.4)" }} />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r" style={{ borderColor: "rgba(184,146,42,0.4)" }} />
                  <svg className="w-10 h-10 relative z-10 transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}
                    style={{ color: "rgba(184,146,42,0.4)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-medium tracking-[0.18em] uppercase px-3 py-1"
                      style={{ color: "#B8922A", border: "1px solid rgba(184,146,42,0.25)" }}>
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: "#8A7E70" }}>{post.readTime}</span>
                  </div>

                  <h3 className="font-cormorant text-xl font-semibold mb-2 leading-snug hover-gold">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#8A7E70" }}>{post.excerpt}</p>

                  <div className="flex items-center justify-between mt-6 pt-5"
                    style={{ borderTop: "1px solid rgba(184,146,42,0.1)" }}>
                    <span className="text-xs" style={{ color: "#8A7E70" }}>{post.date}</span>
                    <span className="text-[10px] font-semibold tracking-[0.15em] uppercase transition-colors duration-300"
                      style={{ color: "#B8922A" }}>
                      Devamını Oku →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
