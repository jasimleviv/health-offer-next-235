import ReviewPageTemplate from "@/src/views/ReviewPageTemplate";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  return {
    title: `${slug.replaceAll("-", " ")} Review`,
    description: "Health CPA review page template.",
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <ReviewPageTemplate slug={slug} />;
}
