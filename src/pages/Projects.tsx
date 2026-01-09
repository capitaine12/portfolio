import SideTitle from "@/components/layout/SideTitle";
import ProjectCard from "@/components/Project/ProjectCard";
import ProjectModal from "@/components/Project/ProjectModal";
import { projects } from "@/data/projects.data";
import type { Project } from "@/types/types";
import { useState } from "react";

const Projects: React.FC = () =>{
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="relative min-h-screen bg-white px-6 lg:px-24 py-16">
      <SideTitle text="PROJETS" />

      <div className="grid md:grid-cols-1 md:gap-10 lg:grid-cols-3 gap-10">
     
        {projects.map((project) => (
  <ProjectCard
    key={project.id}
    project={project}
    onClick={() => setSelected(project)}
  />
))}

      </div>

      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
};
export default Projects;