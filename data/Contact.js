import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export const contact = [
  {
    title: "Location",
    label: "3rd floor, House 5/5, Block A, Lalmatia, Dhaka 1207",
    icon: <BiMap />,
    tooltip: "Find us on map",
    link: "https://maps.app.goo.gl/tvbsgRrvtrF3oVJx9",
  },
  {
    title: "Email",
    label: "contact@tracway.com.bd",
    icon: <BiEnvelope />,
    tooltip: "Leave a mail for support",
    link: "mailto:contact@tracway.com.bd",
  },
  {
    title: "Phone",
    label: "+880 1511-945-901",
    icon: <BiPhone />,
    tooltip: "Call us for inquiry",
    link: "tel:+8801511945901",
  },
];
