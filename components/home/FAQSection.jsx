"use client";

import { faqs } from "@/data/FAQs";
import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react";
import { useState } from "react";

const FAQSection = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  // faq section styles
  const styles = {
    container: "content grid-12 mb-28 laptop:mb-24 mobile:mb-20",
    content: "col-span-8 col-start-3 tablet:col-span-full",

    heading: `heading-02 mobile:text-center mb-12 laptop:mb-10 mobile:mb-8`,
  };

  return (
    <section className={styles.container}>
      {/* content */}
      <div className={styles.content}>
        {/* heading */}
        <h2 className={styles.heading}>Frequently Asked Questions</h2>

        <div className="grid grid-cols-2 gap-8 laptop:gap-6 mobile:gap-4 mobile:grid-cols-1">
          {faqs.slice(1, 7).map((faq, index) => (
            <Accordion key={index} open={open === index + 1} className="border-b-neutral-200">
              <AccordionHeader onClick={() => handleOpen(index + 1)} className="heading-04">
                {faq.question}
              </AccordionHeader>
              <AccordionBody className="paragraph text-neutral-800 text-justify">{faq.answer} </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
