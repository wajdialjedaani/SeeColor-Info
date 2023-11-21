import { tts, align, color } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "explore",
    title: "Explore",
  },
];

export const feature = [
  {
    id: "feature-1",
    icon: tts,
    title: "Text to Speech",
    content:
      "Convert written text into spoken words, making websites more accessible to individuals with visual impairments or reading difficulties.",
  },
  {
    id: "feature-2",
    icon: align,
    title: "Text Configurations",
    content:
      "Adjust website'content to make it more inclusive and easily accessible to individuals with disabilities.",
  },
  {
    id: "feature-3",
    icon: color,
    title: "Color Schemes",
    content:
      "Modify the visual display settings of websites to improve the legibility and clarity of on-screen content for individuals with visual impairments.",
  },
];

export const footerLinks = [
  {
    title: "Navigation",
    links: [
      {
        name: "Home",
        link: "/#home",
      },
      {
        name: "Project",
        link: "/#project",
      },
      {
        name: "Features",
        link: "/#features",
      },
      {
        name: "Explore",
        link: "/#explore",
      },
    ],
  },
  {
    title: "Compliance",
    links: [
      {
        name: "WCAG 2.1",
        link: "https://www.w3.org/TR/WCAG21/",
      },
      {
        name: "ADA Title III",
        link: "https://www.ada.gov/resources/web-guidance/",
      },
    ],
  },
  {
    title: "Social",
    links: [
      {
        name: "Facebook",
        link: "",
      },
      {
        name: "Instagram",
        link: "",
      },
      {
        name: "Twitter",
        link: "",
      },
      {
        name: "LinkedIn",
        link: "",
      },
    ],
  },
];
