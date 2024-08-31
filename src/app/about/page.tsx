import { FaRegArrowAltCircleRight } from "react-icons/fa";
export default function About() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <section
          className="w-full bg-cover bg-center h-[400px] relative px-3 py-3"
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
            <a href="h">
              <div className="bg-black border-[2px] border-white  hover:border-black hover:bg-white hover:text-black text-white flex items-center justify-center px-4 py-3 rounded-full gap-2">
                <span>Learn More</span>
                <FaRegArrowAltCircleRight />
              </div>
            </a>
          </div>
        </section>
        <section
          className="w-full bg-cover bg-center h-[400px] relative px-3 py-3"
          style={{ backgroundImage: "url('/images/aboutus.png')" }}
        >
          <div className="relative z-10 flex flex-col items-center justify-center text-white h-full">
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
      </main>
    </>
  );
}
