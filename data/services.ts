import { 
  Home, 
  Building2, 
  PenTool, 
  Wrench, 
  Layout, 
  Hammer 
} from "lucide-react";

export const services = [
  {
    id: "interior",
    title: "Interior Work",
    description: "One-stop solution for all interior design needs including modular kitchens, false ceilings, bathroom redesigning, wardrobes, and customized home interiors.",
    icon: Home,
  },
  {
    id: "exterior",
    title: "Exterior Work",
    description: "Premium exterior design solutions using quality materials to enhance the beauty and lifespan of your property.",
    icon: Building2,
  },
  {
    id: "space-planning",
    title: "Space Planning",
    description: "Efficient planning of layouts, storage, lighting, communication flow, and space utilization.",
    icon: Layout,
  },
  {
    id: "carpentry",
    title: "Carpentry Services",
    description: "Custom furniture, office interiors, repairs, woodwork, measuring, assembling, and expert carpentry solutions.",
    icon: Hammer,
  },
  {
    id: "civil",
    title: "Civil Work",
    description: "Surveying, drafting, land development, structural detailing, project management, and civil engineering services.",
    icon: PenTool,
  },
  {
    id: "renovation",
    title: "Renovation",
    description: "Bathroom renovations, kitchen renovations, living room upgrades, and complete home transformations.",
    icon: Wrench,
  },
];
