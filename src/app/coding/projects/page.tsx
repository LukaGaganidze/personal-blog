"use client";
import { projectData } from "@/types/coding-projects-types";
import classes from "./Projects.module.scss";

import ProjectItem from "../../../sections/coding/projects/projectItem/ProjectItem";

import { useContext } from "react";
import { ProjectsCtx } from "@/context/coding-projects-context";

const Projects = () => {
  const { projectsData } = useContext(ProjectsCtx);
  console.log(projectsData);
  return (
    <div className={classes["projects"]}>
      {projectsData.map((item: projectData) => {
        return <ProjectItem key={item.id} data={item} />;
      })}
    </div>
  );
};

export default Projects;
