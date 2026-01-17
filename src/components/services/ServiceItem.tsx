import type { Service } from "@/types/types";

interface Props {
  service: Service;
  reverse?: boolean;
}

const ServiceItem = ({ service, reverse }: Props) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center w-full overflow-hidden">

      {/* Image */}
      <div
        className={`
          w-full
          max-w-md
          h-52
          overflow-hidden
          bg-gray-200
          mx-auto
          ${reverse ? "md:order-2" : "md:order-1"}
        `}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-content"
        />
      </div>

      {/* Texte */}
      <div
        className={`
          w-full
          max-w-md
          mx-auto
          ${reverse ? "md:order-1 md:text-right" : "md:order-2"}
        `}
      >
        <h2 className="text-2xl font-bold mb-6">
          {service.title}
        </h2>

        <ul>
          {service.description.map((text, i) => (
            <li key={i} className="text-sm mb-4 leading-relaxed">
              {text}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default ServiceItem;
