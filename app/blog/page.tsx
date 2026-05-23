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
    <div className="bg-[#FAF7F2] min-h-screen font-outfit">
      <PageHero
        title="Blog"
        crumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "Blog" }]}
      />

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#8B7355]" />
              <span className="text-[#8B7355] text-[11px] tracking-[0.22em] uppercase font-medium">Güncel İçerikler</span>
            </div>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-light text-[#1C1A15] max-w-lg leading-tight">
              Diş Sağlığı <span className="italic">Rehberi</span>
            </h2>
            <p className="text-[#6B5F4E] mt-4 text-[15px] leading-relaxed max-w-xl">
              Uzmanlarımızın kaleminden diş sağlığı ipuçları, tedavi bilgileri ve sektörden haberler.
            </p>
          </div>

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-[#DDD0B8] overflow-hidden hover:border-[#8B7355] transition-colors duration-300 flex flex-col group"
              >
                {/* Thumbnail */}
                <div className="h-44 bg-gradient-to-br from-[#F2ECE0] to-[#EDE0C8] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#B8966A]/50" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#B8966A]/50" />
                  <svg className="w-9 h-9 text-[#B8966A]/40 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-medium text-[#8B7355] tracking-[0.18em] uppercase border border-[#DDD0B8] px-2.5 py-1">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#9B8E7D]">{post.readTime}</span>
                  </div>

                  <h3 className="font-cormorant text-xl font-medium text-[#1C1A15] mb-2 leading-snug group-hover:text-[#8B7355] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#6B5F4E] text-sm leading-relaxed flex-1">{post.excerpt}</p>

                  <div className="flex items-center justify-between mt-5 pt-5 border-t border-[#F2ECE0]">
                    <span className="text-xs text-[#9B8E7D]">{post.date}</span>
                    <span className="text-xs font-medium text-[#8B7355] tracking-widest uppercase group-hover:text-[#B8966A] transition-colors">
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
