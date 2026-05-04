import OffersHubPage from "@/src/views/OffersHubPage";

export async function generateMetadata({ params }) {
  const { offerType } = await params;

  return {
    title: `${offerType.replaceAll("-", " ")} Health Offers`,
    description: "Health CPA offer hub with reusable offer modules.",
  };
}

export default async function Page({ params }) {
  const { offerType } = await params;
  return <OffersHubPage offerType={offerType} />;
}
