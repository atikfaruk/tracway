"use client";

import { useState } from "react";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import Link from "next/link";

const Dropdown = ({ handler, list, placement = "bottom", offset = 20, hover = true }) => {
  const [showMenu, setShowMenu] = useState(false);

  // dropdown styles
  const styles = {
    handler: "cursor-pointer",

    list: {
      container: "glass shadow-none rounded-xl flex flex-col gap-2 mobile:hidden",
      link: "border-none outline-none",
      item: "group flex items-center gap-6 p-4 hover:!bg-black/5",
      icon: "flex items-center justify-center text-2xl text-neutral-500 group-hover:text-primary transition-colors duration-300 ease-out",
      info: "flex flex-col gap-1",
      title: "label text-neutral-800 group-hover:text-primary transition-colors duration-300 ease-out",
      caption: "caption text-neutral-500",
    },
  };

  return (
    <Menu open={showMenu} handler={setShowMenu} placement={placement} offset={{ mainAxis: offset }} allowHover={hover}>
      {/* handler */}
      <MenuHandler>
        <a className={styles.handler}>{handler}</a>
      </MenuHandler>

      {/* list */}
      <MenuList className={styles.list.container}>
        {list.map((item, index) => (
          // item
          <Link key={index} href={item.link} className={styles.list.link}>
            <MenuItem className={styles.list.item}>
              {/* icon */}
              <span className={styles.list.icon}>{item.icon}</span>
              {/* info */}
              <div className={styles.list.info}>
                {/* title */}
                <h4 className={styles.list.title}>{item.title}</h4>
                {/* caption */}
                <h5 className={styles.list.caption}>{item.caption}</h5>
              </div>
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
