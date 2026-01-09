import SideTitle from "@/components/layout/SideTitle";
import ServiceItem from "@/components/services/ServiceItem";
import { services } from "@/data/services";

const Services: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-white px-6 lg:px-24 py-16">
      <SideTitle text="SERVICES" />

      <div className="flex flex-col gap-16 items-center justify-center">  
        {services.map((service, index) => (
  <ServiceItem
    key={service.title}
    service={service}
    reverse={index % 2 !== 0}
  />
))}

      </div>
    </section>
  );
};
export default Services;