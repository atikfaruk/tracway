import { TbMailFilled, TbMapPinFilled, TbPhoneFilled } from "react-icons/tb";

export const contact = [
  {
    title: "Location",
    label: "3rd floor, House 5/5, Block A, Lalmatia, Dhaka 1207",
    icon: <TbMapPinFilled />,
    tooltip: "Find us on map",
    link: "https://maps.app.goo.gl/tvbsgRrvtrF3oVJx9",
  },
  {
    title: "Email",
    label: "contact@tracway.com.bd",
    icon: <TbMailFilled />,
    tooltip: "Leave a mail for support",
    link: "mailto:contact@tracway.com.bd",
  },
  {
    title: "Phone",
    label: "+880 1511-945-901",
    icon: <TbPhoneFilled />,
    tooltip: "Call us for inquiry",
    link: "tel:+8801511945901",
  },
];
