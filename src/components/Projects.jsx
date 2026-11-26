import React, { useState } from "react";
import { projectsData } from "../assets/assets";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <div id="projects" className="text-TextColor px-6 md:px-12 lg:px-20 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mt-2 bg-clip-text head-HeadColor" >
          My Personal Projects
        </h2>
        <p className="mt-4 text-TextColor max-w-2xl mx-auto">
          A showcase of personal projects built with modern web technologies.
          <br />
          Here are some of my featured project works
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="relative bg-BgCardColor rounded-2xl border-2 border-CardBorderColor shadow-md hover:shadow-xl transition-all"
          >
            <div className="h-48 w-full overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="flex items-center justify-between p-4">
              <div>
                <h3 className="text-lg font-bold head-HeadColor">{project.title}</h3>
                <p className="text-sm font-semibold text-TextColor">{project.client}</p>
                <p className="text-sm font-bold head-FocusColor">{project.period}</p>
              </div>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mr-2 shrink-0 p-2 text-blue-400 hover:text-blue-600"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>

            <div className="px-4 pb-7">
              <div className="mt-3 text-sm text-TextColor space-y-3">
                <p className="font-thin">{project.description}</p>

                {project.features && (
                  <ul className="list-disc pl-5 space-y-1 text-sm font-thin">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}

                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs  head-HeadColor font-bold border border-CardBorderColor rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-4 mt-5 flex-row justify-start items-end">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_self"
                      rel="noopener noreferrer"
                      className="text-blue-500 p-2 rounded-4xl text-sm font-bold hover:underline hover:text-blue-500"
                    >
                      ▶ Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 bg-CardColor text-TextColor rounded-lg hover:head-HeadColor cursor-pointer transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
