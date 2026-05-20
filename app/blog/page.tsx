import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Diş Kliniği",
  description: "Diş sağlığı hakkında uzman görüşleri, ipuçları ve güncel bilgiler.",
};

const posts = [
  {
    slug: "dis-firçalama-teknikleri",
    category: "Ağız Bakımı",
    title: "Doğru Diş Fırçalama Teknikleri",
    excerpt:
      "Dişlerinizi doğru fırçalamak, çürük ve dişeti hastalıklarını önlemenin en temel adımıdır. Uzmanlar bu konuda ne söylüyor?",
    date: "12 Mayıs 2026",
    readTime: "3 dk okuma",
  },
  {
    slug: "implant-hakkinda-bilinmeyenler",
    category: "İmplant",
    title: "İmplant Hakkında Bilinmeyenler",
    excerpt:
      "İmplant tedavisi kimler için uygundur, kaç seansta tamamlanır ve uzun vadede ne kadar dayanır? Tüm sorularınıza yanıt.",
    date: "5 Mayıs 2026",
    readTime: "5 dk okuma",
  },
  {
    slug: "gulus-tasarimi-nedir",
    category: "Estetik",
    title: "Gülüş Tasarımı Nedir?",
    excerpt:
      "Dijital gülüş tasarımı ile hayalinizdeki gülüşe kavuşmak artık çok daha kolay. Süreç nasıl işliyor, öğrenin.",
    date: "28 Nisan 2026",
    readTime: "4 dk okuma",
  },
  {
    slug: "kanal-tedavisi-korkulacak-bir-sey-yok",
    category: "Kanal Tedavisi",
    title: "Kanal Tedavisi: Korkulacak Bir Şey Yok",
    excerpt:
      "Modern tekniklerle kanal tedavisi artık ağrısız ve hızlı. Tedavi sürecini ve sonrasında nelere dikkat etmeniz gerektiğini anlattık.",
    date: "20 Nisan 2026",
    readTime: "4 dk okuma",
  },
  {
    slug: "bruksizm-gece-dis-sikma",
    category: "Bruksizm",
    title: "Uyurken Diş Sıkıyor musunuz?",
    excerpt:
      "Bruksizm (gece diş sıkma) hem dişlerinize hem de çene kaslarınıza zarar verir. Belirtileri ve çözüm yolları neler?",
    date: "14 Nisan 2026",
    readTime: "3 dk okuma",
  },
  {
    slug: "cocuklarda-dis-sagligi",
    category: "Çocuk Diş Sağlığı",
    title: "Çocuklarda Diş Sağlığına Dikkat",
    excerpt:
      "İlk diş muayenesi ne zaman yapılmalı? Çocuklarda ağız sağlığı alışkanlıkları nasıl kazandırılır? Ebeveynler için rehber.",
    date: "7 Nisan 2026",
    readTime: "5 dk okuma",
  },
];

const categoryColors: Record<string, string> = {
  "Ağız Bakımı": "bg-green-100 text-green-700",
  İmplant: "bg-blue-100 text-blue-700",
  Estetik: "bg-purple-100 text-purple-700",
  "Kanal Tedavisi": "bg-orange-100 text-orange-700",
  Bruksizm: "bg-yellow-100 text-yellow-700",
  "Çocuk Diş Sağlığı": "bg-pink-100 text-pink-700",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <section className="bg-[#075985] pt-10 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-[#0c6ea3] px-8 py-12 text-center shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              Blog
            </h1>
            <p className="text-sm text-[#BAE6FD]">
              <Link href="/" className="hover:text-white transition-colors">
                Ana Sayfa
              </Link>
              <span className="mx-2 text-[#7DD3FC]">/</span>
              <span className="text-white font-medium">Blog</span>
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 pt-14 pb-6 text-center -mt-4">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#0EA5E9] mb-2">
          Güncel İçerikler
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4">
          Diş Sağlığı Rehberi
        </h2>
        <p className="text-[#4B5563] max-w-2xl mx-auto text-sm leading-relaxed">
          Uzmanlarımızın kaleminden diş sağlığı ipuçları, tedavi bilgileri ve sektörden haberler.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 py-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Thumbnail placeholder */}
              <div className="h-44 bg-gradient-to-br from-[#075985] to-[#0c6ea3] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                  {[100, 160, 220].map((size) => (
                    <div
                      key={size}
                      className="absolute rounded-full border border-white"
                      style={{ width: size, height: size }}
                    />
                  ))}
                </div>
                <svg
                  className="w-10 h-10 text-[#7DD3FC] opacity-50 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-gray-100 text-gray-600"}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-[#9CA3AF]">{post.readTime}</span>
                </div>
                <h3 className="font-bold text-[#111827] text-base mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-[#4B5563] text-sm leading-relaxed flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                  <span className="text-xs text-[#9CA3AF]">{post.date}</span>
                  <span className="text-xs font-semibold text-[#0EA5E9] hover:text-[#0369A1] cursor-pointer transition-colors">
                    Devamını Oku →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
