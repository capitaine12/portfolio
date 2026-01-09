import type { Service } from "@/types/types";

interface Props {
    service: Service;
    reverse?: boolean;
}

const ServiceItem = ({ service, reverse }: Props) => {
    return (
        <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Image */}
            <div className={`w-[400px] h-52 overflow-hidden bg-gray-200
                    ${reverse ? "md:order-2" : "md:order-1"}
                    `}>
                    <img src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"/>
            </div>

            {/* Texte */}
            <div className={`w-[400px] h-52
                    ${reverse ? "md:order-1 text-right" : "md:order-2"}
                    `}>
                <h2 className="text-2xl font-bold mb-6">
                    {service.title}
                </h2>
                <ul>
                {service.description.map((text: string, i: number) => (
                    <li key={i} className="text-sm mb-4">
                        {text}
                    </li>
                ))}
                </ul>

            </div>
        </div>
    );
};
export default ServiceItem;