import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import CommonBanner from "../../Share/CommonBanner/CommonBanner";
import detailsImg from "../../../Asset/Details/home.png";
import callVector from "../../../Asset/Page1/callVector.png";
import "./ServicesDetails.css";

const ServicesDetails = () => {
  // const [data, setData] = useState([]);
  // const { id } = useParams("");
  // console.log("services id", id);

  // useEffect(() => {
  //   fetch("/Services.json")
  //     .then((response) => response.json())
  //     .then((service) => {
  //       const newData = service.find((s) => s.id === id);
  //       setData(newData);
  //     });
  // }, [id]);

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="">
      <CommonBanner></CommonBanner>

      <div className="ServiceDetailsSection">
        <div className="DetailsHeading">
          <h1>Home <span className="underlineArrow">Purchases</span></h1>
          <p>
            Our brokers work with banks, credit unions, online lenders, private
            companies <br /> and many others to find the mortgage that is best
            for YOU.
          </p>
        </div>
        <div className="detailsContent">
          <div className="detailsImgSection ">
            <img src={detailsImg} className="detailsImg" alt=""></img>
          </div>
          <div className="detailsTinyBox">
          
          </div>
          <h1>How to Get Help with the Mortgage Stress Test in 2022-23</h1>
          <p>
            You could not have picked a better time to buy your first home.
            Coming out of 2020-21 mortgage rates have hit historic lows. Both
            fixed and variable rates are favorable and are expected to remain so
            for the forseeable future. But with economic recovery unfolding
            before our eyes those rates will gradually climb with increases in
            the Bank of Canada prime rate and bond yield. Terms will become less
            enticing as lenders become less desperate to attract your hard
            earned dollar. The time to act is now, but given you’re uncertainty
            you should not approach lenders alone. No first-time buyer ever
            should. Why? Because not only do Carloni Mortgage Brokers assist
            with nearly every step of the home purchasing process
            (pre-approvals, etc.) we get you access to unadvertised rates. This
            is made possible due to our longstanding relationships with lenders
            and other financiers in Penticton and the Southern Interior of BC.
            We get “bulk discounts” (so to speak) which we pass on to YOU.
            Looking for their dream property in Penticton BC? Your search begins
            with Carloni Mortgage Brokers.
          </p>
          <p>Provide access to a variety of home buyer programs (individuals, couples, families, self-employed persons,)</p>
          <p>Provide access to lower unadvertised mortgage rates</p>
          <p>Provide access to private mortgage options</p>

          <div className="subDetails">
            <h3>
              Get Started on the Home Buying Process with a Simple Phone Call
            </h3>
            <button className="bg-blue-950 headerBtn  btn btn-outline btn-white border-white text-white">
            <img src={callVector} alt="call vector" className="mr-3 callVector"></img> Call Now 250-493-9111
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
