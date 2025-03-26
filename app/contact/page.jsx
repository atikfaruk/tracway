import PageHeading from "@/components/shared/PageHeading";
import UnderConstruction from "@/components/shared/UnderConstruction";

const Contact = () => {
  return (
    <main className="main">
      {/* heading */}
      <PageHeading
        bg="https://res.cloudinary.com/dazc5yfhr/image/upload/v1742216470/pexels-yankrukov-8867265_2_net6zq.jpg"
        title="Contact"
      />

      {/* under construction */}
      <UnderConstruction />
    </main>
  );
};

export default Contact;
