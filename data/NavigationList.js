import { BiHome, BiMessageDetail, BiBookReader, BiSearch, BiUser } from "react-icons/bi";

export const NavigationList = [
  { title: "Home", icon: <BiHome />, link: "/" },
  { title: "Blog", icon: <BiBookReader />, link: "/blog" },
  { title: "About", icon: <BiUser />, link: "/about" },
  { title: "Tracker", icon: <BiSearch />, link: "/tracker" },
  { title: "Contact", icon: <BiMessageDetail />, link: "/contact" },
];
