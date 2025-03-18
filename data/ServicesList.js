import { TbEPassport, TbPackages, TbPlaneTilt } from "react-icons/tb";
import { BiBus, BiHotel } from "react-icons/bi";

export const services = [
  {
    title: "Flight",
    link: "#flight",
    icon: <TbPlaneTilt />,
    caption: "Book flight at the best prices from 1000+ airlines",
  },
  {
    title: "Hotel",
    link: "#hotel",
    icon: <BiHotel />,
    caption: "Reserve hotels from 250k hotels worldwide",
  },
  {
    title: "Bus & Train",
    link: "#bus-train",
    icon: <BiBus />,
    caption: "Book bus and train tickets anywhere",
  },
  {
    title: "Visa",
    link: "/visa",
    icon: <TbEPassport />,
    caption: "Get expert assistance for visa",
  },
  {
    title: "Tour Packages",
    link: "/tour-packages",
    icon: <TbPackages />,
    caption: "Explore customized tour packages",
  },
];
