import { ISwiperImgsArr } from "@/interfaces/swiper";
import {
  Instagram,
  Linkedin,
  Locate,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { CSSProperties } from "react";

import slide1 from "../assets/images/slide_1.webp";
import slide2 from "../assets/images/slide_2.webp";
import slide3 from "../assets/images/slide_3.webp";
import slide4 from "../assets/images/slide_4.webp";

export const ShopName: string = "TechShop";

export const paymentIcons = [
  "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png",
  "https://cdn0.iconfinder.com/data/icons/shift-ecommerce/32/Master_Card-512.png",
];

export const InputErrorStyle: CSSProperties = {
  borderBottom: "1px solid red",
};

export const headerLinks =
  "flex items-center h-full text-zinc-800 rounded-sm gap-2 py-2 px-2 duration-150 ease-in-out hover:bg-accent hover:text-accent-foreground";

export const socialLinks = [
  { Icon: Twitter, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Linkedin, href: "#" },
];

export const SwiperImgsArr: ISwiperImgsArr[] = [
  {
    path: slide1,
    alt: "slide 1",
  },
  {
    path: slide2,
    alt: "slide 2",
  },
  {
    path: slide3,
    alt: "slide 3",
  },
  {
    path: slide4,
    alt: "slide 4",
  },
];
