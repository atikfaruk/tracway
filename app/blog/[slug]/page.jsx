import PageHeading from "@/components/shared/PageHeading";
import UnderConstruction from "@/components/shared/UnderConstruction";

const BlogDetails = () => {
  return (
    <main className="main">
      {/* heading */}
      <PageHeading bg="/pages/about-bg.jpg" title="Blog details" />

      {/* under construction */}
      <UnderConstruction />
    </main>
  );
};

export default BlogDetails;
