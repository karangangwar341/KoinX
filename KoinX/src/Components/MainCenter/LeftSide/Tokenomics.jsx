import React from "react";
import DonutChart from "../../../APICalls and charts/DonutChart";
const sections = [
  { label: "Crowdsale investors: ", color: "#2260e6", percent: 80 },
  { label: "Foundation: ", color: "#FFA500", percent: 20 },
];

const Tokenomics = () => {
  return (
    <div className="about-bitcoin mt-5 bg-white rounded-md p-4">
      <h1 className="font-semibold pb-5 " style={{ fontSize: 23 }}>
        Tokenomics
      </h1>
      <p className=" font-bold py-2">Initial Distribution</p>
      <DonutChart sections={sections} />
      <p className=" mt-5 mb-8 font-medium text-black/80">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
        repudiandae! Exercitationem harum molestias recusandae reprehenderit est
        voluptas, vero tenetur aperiam itaque obcaecati illum saepe accusantium
        repellendus suquaerat, iure, quam
        consectetur libero corporis itaque alias iste eos voluptatibus ducimus,
        autem maiores mollitia! Veritatis placeat aspernatur quo dolorum
        suscipit! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Consequatur temporibus, iste incidunt doloremque hic quod a voluptatem,
        aut quos numquam asperiores amet. Incidunt distinctio, voluptatum vel
        impedit fuga ratione quam.
      </p>
    </div>
  );
};

export default Tokenomics;
