"use client";

import { useState } from "react";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import Link from "next/link";

const NestedNav = ({ handler, list }) => {
  const [showNav, setShowNav] = useState(false);

  // dropdown styles
  const styles = {
    list: "bg-white/90 backdrop-blur backdrop-saturate-200 shadow-none rounded-xl flex flex-col gap-2 mobile:hidden",
    link: "border-none outline-none",
    item: "group flex items-center gap-6 laptop:gap-4 p-4 hover:!bg-black/5",
    icon: "flex items-center justify-center text-2xl laptop:text-xl text-neutral-500 group-hover:text-primary transition-colors duration-300 ease-out",
    info: "flex flex-col gap-1 laptop:gap-0",
    title: "label text-black",
    caption: "caption text-neutral-500",
  };

  return (
    <Menu allowHover open={showNav} handler={setShowNav} placement="bottom" offset={{ mainAxis: 20 }}>
      {/* handler */}
      <MenuHandler>{handler}</MenuHandler>

      {/* list */}
      <MenuList className={styles.list}>
        {list.map((item, index) => (
          // item
          <Link key={index} href={item.link} className={styles.link}>
            <MenuItem className={styles.item}>
              {/* icon */}
              <span className={styles.icon}>{item.icon}</span>
              {/* info */}
              <div className={styles.info}>
                {/* title */}
                <h4 className={styles.title}>{item.title}</h4>
                {/* caption */}
                <h5 className={styles.caption}>{item.caption}</h5>
              </div>
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default NestedNav;
