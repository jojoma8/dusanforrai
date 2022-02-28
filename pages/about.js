import Image from "next/image";
import React from "react";

function about() {
  return (
    <div className="flex flex-col max-w-5xl mx-auto">
      <div
        className="flex flex-col items-center justify-items-center
      mt-8
        bg-emerald-700 "
      >
        <div
          className="text-white font-bold text-3xl 
              p-5"
        >
          About
        </div>
      </div>
      <div className="mt-10">
        <Image
          className="basis-1/2"
          src="https://media.istockphoto.com/photos/man-holding-blue-helmet-close-up-picture-id1178982949?k=20&m=1178982949&s=612x612&w=0&h=HWf-VgwUsZvsuoGk65Z4kT3ZD7Cs3hNUbTvnK6Z1k3w="
          width={14}
          height={9}
          layout="responsive"
          alt="safety first"
        />
        <div>
          <div className="bg-orange-700 mt-8 text-gray-200 font-medium p-20 text-lg basis-1/2">
            Dusan has worked in most sectors and provided consultancy, training
            and auditing services to organisations including construction
            companies, food manufacturers, pharmaceutical companies, engineering
            companies, local authorities, housing associations, leisure
            organisations, hospitals and care providers. Dusan has worked as an
            examiner for NEBOSH at both National Certificate and National
            Diploma Level. He has designed and delivered training courses in
            various subject areas including legionella management, hazardous
            substance legislation, managing asbestos, manual handling, managing
            contractors, chemical awareness, permit to work systems and accident
            investigation.
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
