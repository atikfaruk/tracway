import { TbEPassport, TbLuggage, TbPlaneTilt } from "react-icons/tb";
import { BiBus, BiHotel } from "react-icons/bi";

export const ServiceList = [
  {
    title: "Flight",
    link: "?service=travel",
    icon: <TbPlaneTilt />,
    caption: "Book flight at the best prices from 1000+ airlines",
  },
  {
    title: "Hotel",
    link: "?service=travel",
    icon: <BiHotel />,
    caption: "Reserve hotels from 250k hotels worldwide",
  },
  {
    title: "Bus & Train",
    link: "?service=transport",
    icon: <BiBus />,
    caption: "Book bus and train tickets anywhere anytime",
  },
  {
    title: "Visa",
    link: "?service=visa",
    icon: <TbEPassport />,
    caption: "Get expert assistance for visa applications",
  },
  {
    title: "Tour Packages",
    link: "?service=tour",
    icon: <TbLuggage />,
    caption: "Explore customized holiday packages",
  },
];
