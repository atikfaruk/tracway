import PageHeading from "@/components/shared/PageHeading";
import UnderConstruction from "@/components/shared/UnderConstruction";

const About = () => {
  return (
    <main className="main">
      {/* heading */}
      <PageHeading
        bg="https://res.cloudinary.com/dazc5yfhr/image/upload/v1742985996/pexels-vlada-karpovich-7368308_pghk54.jpg"
        title="About"
      />

      {/* under construction */}
      <UnderConstruction />
    </main>
  );
};

export default About;
