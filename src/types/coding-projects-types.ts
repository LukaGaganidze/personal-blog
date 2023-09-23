// Explicitly specify the type of coffeeData
import { StaticImageData } from "next/image";

export type ProjectsContextType = {
  projectsData: projectData[];
};

export type projectData = {
  projectLink: string;
  header: string;
  text1: string;
  text2: string;
  img1: StaticImageData;
  img2: StaticImageData;
  img3: StaticImageData;
  id: number;
  gitLink: string;
  lastOne: boolean;
};
