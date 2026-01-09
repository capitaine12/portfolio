import { FaReact, FaLaravel, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import type { Project } from "@/types/types";
import { FaHtml5, FaSquareJs } from "react-icons/fa6";

const stackIcons = {
  react: <FaReact size={25}/>,
  tailwind: <SiTailwindcss size={25} />,
  laravel: <FaLaravel size={25} />,
  vue: <FaReact size={25} />,
  html: <FaHtml5 size={25}/>,
  css: <FaCss3Alt size={25} />,
  javascript: <FaSquareJs size={25} />,
  nodejs: <FaSquareJs size={25} />,
  django: <FaLaravel size={25} />,
  flutter: <FaReact size={25} />,

};

type Props = {
  project: Project;
  onClick: () => void;
};

const ProjectCard = ({ project, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-xl overflow-hidden shadow hover:scale-[1.02] transition"
    >
      <img
        src={project.thumbnail}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex items-center justify-between">
        <h3 className="font-bold text-lg">{project.title}</h3>

        <div className="flex items-center gap-4 text-lg">
          {project.stacks.map((stack) => (
            <span key={stack} className="opacity-70">
              {stackIcons[stack]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
