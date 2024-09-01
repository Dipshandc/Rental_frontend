import { IoGitNetworkSharp } from "react-icons/io5";
import { FaClover } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineHomeWork } from "react-icons/md";

const about_us = [
  {
    logo: IoGitNetworkSharp,
    title: "Diversity",
    description:
      "We offer a wide range of rental options to meet diverse needs, from residential properties to commercial spaces, ensuring there's something for everyone.",
  },
  {
    logo: FaClover,
    title: "Quick Support",
    description:
      "Our dedicated support team is always ready to assist you, ensuring a seamless rental experience from inquiry to move-in and beyond.",
  },
  {
    logo: FaUserFriends,
    title: "Client Connection",
    description:
      "We prioritize building strong connections with our clients, offering personalized services and tailored rental solutions that meet individual preferences.",
  },
  {
    logo: MdOutlineHomeWork,
    title: "Multiple Options",
    description:
      "Choose from a variety of rental options, including furnished and unfurnished properties, flexible lease terms, and prime locations to suit your lifestyle.",
  },
];

import { FaRegArrowAltCircleRight } from "react-icons/fa";
export default function About() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <section
          className="w-full bg-cover bg-center h-[580px] relative px-3 py-3"
          style={{ backgroundImage: "url('/images/aboutus.png')" }}
        >
          <div className="relative z-10 flex flex-col items-center justify-center text-white h-full">
            <h1 className="text-4xl font-bold mb-4 text-center max-w-3xl mx-auto">
              Impactful solutions for rental through technology
            </h1>
            <p className="text-xl mb-6 text-center max-w-3xl mx-auto">
              We're more than a rental provider. We're your dedicated partner
              for success. Our commitment to excellence and collaborative
              approach means we deliver innovative solutions that exceed
              expectations.
            </p>
            <a href="#more">
              <div className=" border-[2px] border-white  hover:border-black hover:bg-white hover:text-black text-white flex items-center justify-center px-4 py-3 rounded-full gap-2">
                <span>Learn More</span>
                <FaRegArrowAltCircleRight />
              </div>
            </a>
          </div>
        </section>
        <section
          className="w-full bg-cover bg-white bg-center h-[655px] relative"
          style={{ backgroundImage: "url('/images/white.png')" }}
        >
          <div
            id="more"
            className="relative z-10 flex flex-col items-center  justify-center text-black h-full"
          >
            <h2 className="text-4xl font-bold mb-4 text-center max-w-3xl mx-auto">
              Who we are
            </h2>
            <p className="text-xl mb-6 text-center max-w-3xl mx-auto">
              Rental is a Nepal-based startup focused on delivering digital
              strategy, growth, design, and development services to both private
              and public sectors for rental services. Our team of experienced
              developers is dedicated to helping customer-facing products, with
              a proven track record of delivering successful commercial
              products. We specialize in business applications, enterprise-grade
              software, and application development, and are committed to
              turning ideas into products that people love to use. Trust us to
              bring our expertise and knowledge to your next project.
            </p>
          </div>
        </section>
        <section
          className="w-full bg-black relative h-[600px] max-auto mt-12"
          style={{ backgroundImage: "url('/images/aboutus.png')" }}
        >
          <div className="container grid grid-cols-1 justify-start sm:grid-cols-2 lg:grid-cols-3 p-0 gap-6">
            {about_us.map((about, index) => {
              const Icon = about.logo;
              return (
                <div
                  key={index}
                  className="w-auto h-[260px] p-5 rounded-lg justify-center text-center bg-slate-200 text-black shadow-zinc-500 border-[2px]"
                >
                  <div className="flex">
                    <Icon size={15} className="size-7" />{" "}
                    <div className="justify-center ml-auto mr-auto">
                      <h3 className="text-3xl font-bold">{about.title}</h3>
                    </div>
                  </div>
                  <p className=" mt-3 text-xl">{about.description}</p>
                </div>
              );
            })}
            <img className="size-full" src="images/demo.jpg" alt="demoimg" />
          </div>
        </section>
      </main>
    </>
  );
}
