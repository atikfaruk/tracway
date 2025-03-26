import PageHeading from "@/components/shared/PageHeading";
import UnderConstruction from "@/components/shared/UnderConstruction";

const Tracker = () => {
  return (
    <main className="main">
      {/* heading */}
      <PageHeading
        bg="https://res.cloudinary.com/dazc5yfhr/image/upload/v1742988347/pexels-alex-andrews-271121-1203808_1_atgdpf.jpg"
        title="Tracker"
      />

      {/* under construction */}
      <UnderConstruction />
    </main>
  );
};

export default Tracker;
