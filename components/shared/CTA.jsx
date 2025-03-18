import { Button } from "@/material";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  // cta styles
  const styles = {
    container: "w-full rounded-3xl laptop:rounded-2xl mobile:rounded-xl overflow-hidden relative",
    background: "w-full h-full object-cover object-[center_20%]",
    content:
      "w-full aspect-[32/9] mobile:aspect-[16/9] bg-primary/80 backdrop-blur-sm backdrop-saturate-200 flex flex-col justify-center items-center relative p-10 laptop:p-8 mobile:p-5",
    heading: "heading-02 mobile:!text-[28px] text-white text-center mb-3 laptop:mb-2 mobile:mb-1",
    subheading: "label !leading-snug text-white text-center mb-8 laptop:mb-6 mobile:mb-5",
    button: "primary-button !font-bold !border-white hover:!text-white !backdrop-saturate-100 !tracking-wide py-4 px-6",
  };

  return (
    <div className={styles.container}>
      {/* background */}
      <Image
        src="/customer-support.jpg"
        alt="customer support"
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 740px, (max-width: 1535px) 940px, 1340px"
        className={styles.background}
      />

      {/* overlay */}
      <div className={styles.overlay}>
        {/* content */}
        <div className={styles.content}>
          {/* heading  */}
          <h2 className={styles.heading}>Have more questions?</h2>
          {/* subheading  */}
          <h4 className={styles.subheading}>
            At Tracway, we prioritize our customers. <br /> Get in touch for any inquiries:
          </h4>

          {/* contact button */}
          <Link href="/contact">
            <Button size="lg" color="white" className={styles.button}>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
