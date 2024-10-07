import {
  Cloud,
  Layers,
  MonitorSmartphone,
  Users,
  Wrench,
  Zap,
  Brush,
  Code,
  Cpu,
  Rocket,
} from "lucide-react";

//For Navbar.jsx File
export const NavItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Features",
    path: "/features",
  },
  {
    id: 3,
    title: "Workflow",
    path: "/workflow",
  },
  {
    id: 4,
    title: "Pricing ",
    path: "/pricing",
  },
  {
    id: 5,
    title: "Testimony",
    path: "/testimony",
  },
];

//For Hero.jsx File
export const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Staggers the animation of child elements
      delayChildren: 0.2, // Adds a delay before the children animations start
    },
  },
};

export const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const gradientVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// For Features.jsx File
export const featuresItems = [
  {
    id: 1,
    title: "Intuitive Tools",
    description:
      "Build VR experiences with user-friendly tools designed for creators of all skill levels.",
    icon: <Wrench />,
  },
  {
    id: 2,
    title: "Real Time Collaboration",
    description:
      "Collaborate with your team in real-time to bring your virtual projects to life faster.",
    icon: <Users />,
  },
  {
    id: 3,
    title: "Cross-Platform Support",
    description:
      "Deploy your VR creations seamlessly across multiple platforms including mobile, desktop, and more.",
    icon: <MonitorSmartphone />,
  },
  {
    id: 4,
    title: "Customizable Assets",
    description:
      "Choose from a vast library of assets or create your own to fully personalize your VR environments.",
    icon: <Layers />,
  },
  {
    id: 5,
    title: "High-Performance Rendering",
    description:
      "Experience fast, high-quality rendering for smooth, immersive VR applications.",
    icon: <Zap />,
  },
  {
    id: 6,
    title: "Secure Cloud Storage",
    description:
      "Safely store and manage your VR projects with our encrypted cloud storage solutions.",
    icon: <Cloud />,
  },
];

// For Workflow.jsx File
export const workFlow = [
  {
    id: 1,
    title: "Design",
    description:
      "Create a detailed design plan that outlines your VR project's structure, goals, and target audience.",
    icon: <Brush />,
  },
  {
    id: 2,
    title: "Build",
    description:
      "Develop immersive experiences by coding and structuring your virtual world using advanced tools and techniques.",
    icon: <Code />,
  },
  {
    id: 3,
    title: "Optimize",
    description:
      "Fine-tune your VR environment for optimal performance and smooth user interactions across devices.",
    icon: <Cpu />,
  },
  {
    id: 4,
    title: "Collaborate",
    description:
      "Work closely with your team to test and refine the experience, ensuring it meets the highest standards.",
    icon: <Users />,
  },
  {
    id: 5,
    title: "Launch",
    description:
      "Deploy your VR experience and share it with your audience, ready to explore and engage with your virtual world.",
    icon: <Rocket />,
  },
];

// For Pricing.jsx File
export const pricingItems = [
  {
    id: 1,
    title: "Starter",
    price: "$9.99",
    description: "Get started with a limited feature set.",
    features: [
      "Private Board Sharing",
      "10 projects",
      "Unlimited collaborators",
      "1 GB storage",
    ],
    mostUsed: false,
  },
  {
    id: 2,
    title: "Basic",
    price: "$19.99",
    description: "Build your first few VR projects.",
    features: [
      "Private Board Sharing",
      "20 projects",
      "Unlimited collaborators",
      "5 GB storage",
    ],
    mostUsed: false,
  },
  {
    id: 3,
    title: "Professional",
    price: "$49.99",
    description: "Manage a large number of VR projects.",
    features: [
      "Private Board Sharing",
      "50 projects",
      "Unlimited collaborators",
      "15 GB storage",
    ],
    mostUsed: true,
  },
  {
    id: 4,
    title: "Enterprise",
    price: "$59.99",
    description: "For large-scale VR projects.",
    features: [
      "Private Board Sharing",
      "Unlimited projects",
      "Unlimited collaborators",
      "Custom storage",
    ],
    mostUsed: false,
  },
];
