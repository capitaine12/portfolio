import SideTitle from "@/components/layout/SideTitle";
import { Contacts } from "@/data/Contact";
import { BsEnvelopeAt, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Contact: React.FC = () => {
    const socialIcons = {
        Instagram: <BsInstagram size={30} />,
        LinkedIn: <BsLinkedin size={30} />,
        whatsapp: <BsWhatsapp size={30} />,
        Email: <BsEnvelopeAt size={30} />,
    }
  return (
    <section className="relative min-h-screen bg-white px-6 lg:px-24 py-16">
        <SideTitle text="CONTACT" />
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-12">

  <div className="flex flex-col gap-10 text-center lg:text-left">
    <span className="text-red-800 px-2.5 text-center bg-red-300"> les liens ne fonctions pas pour le moment</span>
    {Contacts.map((contact) => (
      <a
        key={contact.name}
        href={contact.link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group flex items-center gap-6
          text-4xl md:text-5xl font-bold tracking-wide
          transition-all duration-300
          hover:translate-x-2 hover:opacity-80
        "
      >
        <span className="text-2xl text-gray-700 placeholder-opacity-100 group-hover:opacity-100 transition">
          {socialIcons[contact.icon]}
        </span>

        <span className="uppercase">
          {contact.name}
        </span>
      </a>
    ))}
  </div>

  <p className="text-base md:text-lg text-gray-600 text-center max-w-md">
    Un projet, une idée ou une collaboration ? Discutons-en.
  </p>

</div>

    </section>
    );
    };
export default Contact;