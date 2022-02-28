import Head from "next/head";
import Image from "next/image";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Dusan Forrai</title>
        <meta
          name="Dusan Forrai Consulting"
          content="Get in touch for more details"
        />
      </Head>

      <main className="flex flex-col max-w-5xl mx-auto">
        {/* Professional Healht and Safety Services */}
        <div className="">
          <div className="relative">
            <Image
              className="basis-1/2"
              src="https://media.istockphoto.com/photos/this-software-help-me-to-keep-track-of-everything-picture-id1126458618?k=20&m=1126458618&s=612x612&w=0&h=w8_8dcHxcSEYydO0OQVkiI_2PhosSTi-zFj91c9M9f4="
              width={14}
              height={7}
              layout="responsive"
              alt="safety first"
              // quality={60}
            />
            <div className="flex flex-col bg-emerald-700 md:absolute top-2/4">
              <div
                className="text-white font-bold text-3xl 
              pt-5 pl-5 pr-5"
              >
                Professional Health and Safety Services
              </div>
              <div className="pl-5 py-3 text-white">
                Helping you keep people safe and meet legal requirements
              </div>
            </div>
          </div>
          <div className="flex items-center justify-evenly ">
            <div className="p-10 text-xl font-bold text-center">
              Expert advice from Chartered and experienced Health and Safety
              Professionals
            </div>
          </div>
          <div className="relative ">
            <Image
              className="basis-1/2"
              src="https://media.istockphoto.com/photos/banner-civil-engineer-inspect-structure-at-construction-site-against-picture-id1341045277?k=20&m=1341045277&s=612x612&w=0&h=j9_CjGb04cUOrSLTMRyCADP3LeN9-7X4XCOlzPv5MT4="
              width={612}
              height={262}
              layout="responsive"
              alt="safety first"
              // quality={60}
            />
            <div
              className="flex flex-col 
              bg-orange-700  lg:max-w-md lg:absolute 
              lg:top-10 lg:right-5 "
            >
              <div
                className="text-white  
              px-5 pt-5"
              >
                Being in breach of health and safety legislation can have some
                significant consequences for a small business. Fines have been
                increasing and a prosecution does nothing for trade. Its also
                important to keep people safe.
              </div>
              <div
                className="text-white  
                px-5 pt-5"
              >
                We can help you to meet your legal obligations and produce the
                documentation and procedures required by your clients. We can
                also act as the competent person required by regulation 7 of the
                Management of Health and Safety at Work Regulations.
              </div>
              <div
                className="text-white 
              p-5"
              >
                The responsibility for the safety of a business rests with the
                owner, but help may cost you less than you think.
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <Services />
        {/* About */}
        <div></div>
      </main>
    </div>
  );
}
