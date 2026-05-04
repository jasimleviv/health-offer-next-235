import CategoryPage from "@/src/views/CategoryPage";
import { healthCategories } from "@/src/data/fakeData";

export async function generateMetadata({ params }) {
  const { categorySlug } = await params;
  const category = healthCategories.find((item) => item.slug === categorySlug);

  return {
    title: `${category?.label || "Category"} Health Offers`,
    description: `Browse ${category?.label || categorySlug} health CPA articles and sample offers.`,
  };
}

export default async function Page({ params }) {
  const { categorySlug } = await params;
  return <CategoryPage categorySlug={categorySlug} />;
}
