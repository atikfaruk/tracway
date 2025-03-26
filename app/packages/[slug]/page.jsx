import PageHeading from "@/components/shared/PageHeading";
import UnderConstruction from "@/components/shared/UnderConstruction";
import { getTourPackage } from "@/services";

const PackageDetails = async ({ params }) => {
  const tourPack = await getTourPackage(params.slug);

  return (
    <main className="main">
      {/* heading */}
      <PageHeading bg={tourPack.cover.secure_url} title={tourPack.title} />

      {/* under construction */}
      <UnderConstruction />
    </main>
  );
};

export default PackageDetails;
