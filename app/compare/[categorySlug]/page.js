import ComparisonPageTemplate from "@/src/views/ComparisonPageTemplate";

export async function generateMetadata({ params }) {
  const { categorySlug } = await params;

  return {
    title: `${categorySlug.replaceAll("-", " ")} Comparison`,
    description: "Health CPA comparison page template.",
  };
}

export default async function Page({ params }) {
  const { categorySlug } = await params;
  return <ComparisonPageTemplate categorySlug={categorySlug} />;
}
