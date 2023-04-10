import React from "react";
import projectitem from "./projectitem";
import Portfolioitem from "./projects";
function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <h1 className="text-4xl text-center font-semibold underline p-50">
          PROJECTS
        </h1>
        {projectitem.map((project) => (
          <Portfolioitem
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
