import React from "react";
import Image from "next/image";

function Services() {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-items-center
      mt-10
        bg-emerald-700 "
      >
        <div
          className="text-white font-bold text-3xl 
              p-5"
        >
          Services
        </div>
      </div>
      <div className="flex flex-col items-center text-xl text-blue-900 font-bold ">
        <div className="services">Auditing and action plans</div>
        <div className="services">Risk assessments</div>
        <div className="services">Business continuity plans</div>
        <div className="services">Policies procedures</div>
        <div className="services">Accident and incident investigation</div>
        <div className="services">ISO guidance and support</div>
        <div className="services">
          Event safety - safety officer advisory role
        </div>
        <div className="services">Event management and planning</div>
      </div>
      <div className="flex flex-col">
        <div className="bg-emerald-700 mt-5 text-gray-300 font-medium p-20 text-lg basis-1/2">
          We can provide guidance with all health and safety matters including
          noise, air monitoring and LEV testing, vibration, work equipment,
          working at height, manual handling, workplace stress, legionella
          management, ionising radiation and fire safety
        </div>
        <Image
          className="basis-1/2"
          src="https://media.istockphoto.com/photos/safety-first-picture-id1283836460?k=20&m=1283836460&s=612x612&w=0&h=unk6KAEEyDSS98IUfn1QvKDhqbphq9-DXX3J4txWYoo="
          width={14}
          height={9}
          layout="responsive"
          alt="safety first"
        />
      </div>
    </div>
  );
}

export default Services;
