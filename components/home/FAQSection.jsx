import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { Button } from "@/material";
import { FaqList } from "@/data/FaqList";
import FAQs from "../shared/FAQs";
import CTA from "../shared/CTA";

const FAQSection = () => {
  // faq section styles
  const styles = {
    container: "content mb-28 laptop:mb-24 mobile:mb-20",

    heading: {
      container: "flex items-center justify-between mobile:justify-center mb-10 laptop:mb-8 mobile:mb-5",
      title: "heading-02 mobile:text-center",
      action: "mobile:hidden secondary-button pl-4 pr-2",
    },

    faqs: "grid grid-cols-2 mobile:grid-cols-1 gap-6 laptop:gap-4 mobile:gap-2 mb-20 laptop:mb-16 mobile:mb-5",

    action: "hidden mobile:block mb-12",
    actionButton: "w-full secondary-button pl-4 pr-2",
  };

  return (
    <section className={styles.container}>
      {/* heading */}
      <div className={styles.heading.container}>
        {/* title */}
        <h2 className={styles.heading.title}>Frequently Asked Questions</h2>
        {/* action for desktop */}
        <Link href="/contact/#faq">
          <Button variant="outlined" className={styles.heading.action}>
            More Questions <BiChevronRight />
          </Button>
        </Link>
      </div>

      {/* content */}
      <FAQs faqs={FaqList.slice(0, 6)} containerStyles={styles.faqs} />

      {/* action for mobile */}
      <Link href="/contact/#faq" className={styles.action}>
        <Button variant="outlined" className={styles.actionButton}>
          More Questions <BiChevronRight />
        </Button>
      </Link>

      {/* cta */}
      <CTA />
    </section>
  );
};

export default FAQSection;
