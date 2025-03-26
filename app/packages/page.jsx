import PageHeading from "@/components/shared/PageHeading";
import UnderConstruction from "@/components/shared/UnderConstruction";

const Packages = () => {
  return (
    <main className="main">
      {/* heading */}
      <PageHeading bg="/pages/about-bg.jpg" title="Tour packages" />

      {/* under construction */}
      <UnderConstruction />
    </main>
  );
};

export default Packages;
