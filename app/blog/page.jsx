import PageHeading from "@/components/shared/PageHeading";
import UnderConstruction from "@/components/shared/UnderConstruction";

const Blog = () => {
  return (
    <main className="main">
      {/* heading */}
      <PageHeading
        bg="https://res.cloudinary.com/dazc5yfhr/image/upload/v1742985997/ian-dooley-3NCA3tbaE5I-unsplash_fton7v.jpg"
        title="Blog"
      />

      {/* under construction */}
      <UnderConstruction />
    </main>
  );
};

export default Blog;
