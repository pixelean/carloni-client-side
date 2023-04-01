import React from "react";
// 



const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Pre-Approval",
      description:
        "Frist Time homne buyer programs for as little as 5% downpayment, and much more Pre-quality and shop whith confidence",
    //   img: medicine,
    },
    {
      _id: 2,
      name: "Purchases",
      description:
        "Frist Time homne buyer programs for as little as 5% downpayment, and much more Pre-quality and shop whith confidence.",
    //   img: Phiseotherapy,
    },
    {
      _id: 3,
      name: "Refinnances & Equity Loans",
      description:
        "Frist Time homne buyer programs for as little as 5% downpayment, and much more Pre-quality and shop whith confidence",
    //   img: surgery,
    },
    {
      _id: 4,
      name: "Self-Employed",
      description:
        "Frist Time homne buyer programs for as little as 5% downpayment, and much more Pre-quality and shop whith confidence",
    //   img: pregnent,
    },
    {
      _id: 5,
      name: "Renewals",
      description:
        "Frist Time homne buyer programs for as little as 5% downpayment, and much more Pre-quality and shop whith confidence",
    //   img: urology,
    },
    {
      _id: 6,
      name: "Private Mortgages",
      description:
        "Frist Time homne buyer programs for as little as 5% downpayment, and much more Pre-quality and shop whith confidence",
    //   img: dental,
    },
  ];
  return (
    <div>
      <div>
        <div className="text-center my-10">
          <h3 className="text-primary font-bold text-5xl ">Penticton Morgage Service</h3>
          <h1 className="text-3xl">Our brokers work with banks,credit unicns,online lenders,private companies
and many others to find the mortgage that is best for YOU.</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={service.img}
                  alt="services name"
                  className="rounded-xl h-32 w-28"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{service.name}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
