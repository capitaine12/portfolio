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
    <div className="flex items-center flex-col gap-4  container mx-auto px-4 py-12">
        <div className="font-bold text-5xl md:grid-cols-2 ">
            {Contacts.map((contact) => (
                <a key={contact.name} href={contact.link} target="_blank" rel="noopener noreferrer" 
                className="flex items-center space-x-4 transition-colors duration-300 hover:text-gray-600 mb-6">
                   
                    <span className="text-xl">{socialIcons[contact.icon]}</span>
                    <span className="uppercase">{contact.name}</span>
                </a>
            ))}
        </div>
        <p className="text-lg  text-gray-700 ">Un projet, une idée ou une collaboration ? Discutons-en.</p>
    </div>
    </section>
    );
    };
export default Contact;