import React, { useEffect, useState } from "react";
import "./ServicesList.css";

const ServicesList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("Services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div class="servicesList p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {services.map((service) => (
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full" src={service.img} alt="Mountain" />
          <img
            src={service.logo}
            alt="services logo"
            className="mt-[-30px] ml-5"
          ></img>
          <div class="px-6 py-6">
            <div class="font-bold text-xl mb-2">{service.name}</div>
            <p class="text-gray-700 text-base">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
