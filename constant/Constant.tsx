import { FaBook, FaCog, FaDesktop, FaHeadset, FaInfinity, FaLaptop, FaLayerGroup, FaMobileAlt, FaShieldAlt } from "react-icons/fa";
// import { FaLaptop } from "react-icons/fa6";

export const navLinks = [
  {
    id: 1,
    href: "#hero",
    label: "Home",
  },
  {
    id: 2,
    href: "#whychoose",
    label: "About",
  },
  {
    id: 3,
    href: "#feature",
    label: "Feature",
  },
  {
    id: 4,
    href: "#review",
    label: "Reviews",
  },
  {
    id: 5,
    href: "#price",
    label: "Pricing",
  },
  {
    id: 6,
    href: "/",
    label: "Contact",
  },
];

export const features = [
  {
    icon: <FaLayerGroup style={{ fill: "rgb(185, 28, 28)" }} />,
    title: "50+ Unique Design Block",
  },
  {
    icon: <FaLaptop style={{ fill: "rgb(59, 130, 246)" }} />,
    title: "Multiple Layouts",
  },
  {
    icon: <FaMobileAlt style={{ fill: "rgb(234, 179, 8)" }} />,
    title: "Mobile First Design",
  },
  {
    icon: <FaDesktop style={{ fill: "rgb(147, 51, 234)" }} />,
    title: "Fully Responsive",
  },
  {
    icon: <FaCog style={{ fill: "rgb(20, 184, 166)" }} />,
    title: "Customizable Features",
  },
  {
    icon: <FaHeadset style={{ fill: "rgb(34, 197, 94)" }} />,
    title: "Humanly Supported",
  },
  {
    icon: <FaInfinity style={{ fill: "rgb(236, 72, 153)" }} />,
    title: "Lifetime Updates",
  },
  {
    icon: <FaBook style={{ fill: "rgb(99, 102, 241)" }} />,
    title: "Rich Documentation",
  },
  {
    icon: <FaShieldAlt style={{ fill: "rgb(251, 146, 60)" }} />,
    title: "Enhanced Security",
  },
];

export const responsive = {
  lg: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  md: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  sm: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const priceFeatures = [
  "unlimited connections",
  "basic actions & triggers",
  "draft payments",
  "unlimited flows & supports",
  "lifetime updates",
]