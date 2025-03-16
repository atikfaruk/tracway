import { Card, CardBody, CardFooter, CardHeader, Button } from "@/material";
import Link from "next/link";
import Image from "next/image";

const PackageCard = ({ cover, title, slug, date, description }) => {
  return (
    <Card className="w-full">
      <CardHeader color="blue-gray" className="relative">
        <Image src={cover} alt={title} width={500} height={300} sizes="100vw" className="w-full h-auto" />
      </CardHeader>
      <CardBody>
        <h3 className="heading-03 !leading-normal line-clamp-1">{title}</h3>
        <h4 className="heading-04 mb-4 text-black/50">{date}</h4>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="paragraph text-justify-forced !line-clamp-4"
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Link href={`/programs/${slug}`}>
          <Button>Explore</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
