"use client";

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react";

const FAQs = ({ faqs, containerStyles }) => {
  const [open, setOpen] = useState(0);

  // handle accordion
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  // faq section styles
  const styles = {
    container: containerStyles,
    question: "label text-neutral-600 hover:text-black border-neutral-300 [&>span]:ml-0",
    indicator: (active) =>
      `will-change-transform transition-transform duration-300 ease-out ${active && "-rotate-180"}`,
    answer: "prose-content",
  };

  return (
    <div className={styles.container}>
      {/* faqs */}
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          open={open === index + 1}
          icon={<BiChevronDown className={styles.indicator(open === index + 1)} />}
        >
          {/* question */}
          <AccordionHeader onClick={() => handleOpen(index + 1)} className={styles.question}>
            {faq.question}
          </AccordionHeader>
          {/* answer */}
          <AccordionBody dangerouslySetInnerHTML={{ __html: faq.answer }} className={styles.answer}></AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQs;
