import ArticlePage from "@/src/views/ArticlePage";
import { fakeData, getArticleBySlug } from "@/src/data/fakeData";

export async function generateStaticParams() {
  return fakeData.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  return {
    title: article?.seo.title || "Health Article",
    description: article?.seo.description || "Health CPA article.",
    openGraph: {
      title: article?.seo.title,
      description: article?.seo.description,
      images: [article?.seo.ogImage || "/globe.svg"],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <ArticlePage slug={slug} />;
}
