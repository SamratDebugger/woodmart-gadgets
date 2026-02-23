import { FaLaptop } from "react-icons/fa6";
import { GoCpu } from "react-icons/go";
import { IoMdTv } from "react-icons/io";
import { IoCameraOutline, IoGameControllerOutline } from "react-icons/io5";
import { LuMouse, LuWashingMachine } from "react-icons/lu";
import { MdSmartphone } from "react-icons/md";
const iconClass = "my-1.5 inline-block size-4";

export const menus = [
  {
    id: 1,
    item: "Laptops and tablets & pcs",
    icon: <FaLaptop className={iconClass} />,
    href: "#",
  },
  {
    id: 2,
    item: "Computer and office",
    icon: <LuMouse className={iconClass} />,
    href: "#",
  },
  {
    id: 3,
    item: "Hardware and Components",
    icon: <GoCpu className={iconClass} />,
    href: "#",
  },
  {
    id: 4,
    item: "Smartphone",
    icon: <MdSmartphone className={iconClass} />,
    href: "#",
  },
  {
    id: 5,
    item: "Games and entertainment",
    icon: <IoGameControllerOutline className={iconClass} />,
    href: "#",
  },
  {
    id: 6,
    item: "tv & Hifi",
    icon: <IoMdTv className={iconClass} />,
    href: "#",
  },
  {
    id: 7,
    item: "Photo & Video",
    icon: <IoCameraOutline className={iconClass} />,
    href: "#",
  },
  {
    id: 8,
    item: "Home Appliance",
    icon: <LuWashingMachine className={iconClass} />,
    href: "#",
  },
];
