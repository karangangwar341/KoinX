import React from "react";
import team1 from "../images/team1.png";
import team2 from "../images/team2.png";
import team3 from "../images/team3.png";
const teammembers = [
  {
    name: "John Smith",
    roll: "Designation here",
    photo: team1,
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis doloribus, laboriosam sapiente eligendi nemo quod. Dolor ullam sapiente error corrupti laborum odio. Commodi  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis doloribus, laboriosam sapiente eligendi nemo quod. Dolor ullam sapiente error corrupti laborum odio. Commodi rem iste odio hic eos nihil porr",
  },
  {
    name: "Elina Williams",
    roll: "Designation here",
    photo: team2,
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis doloribus, laboriosam sapiente eligendi nemo quod. Dolor ullam sapienteLorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis doloribus, laboriosam sapiente eligendi nemo quod. Dolor ullam sapiente error corrupti laborum odio. Commodi  error corrupti laborum odio. Commodi rem iste odio hic eos nihil porr",
  },
  {
    name: "John Smith",
    roll: "Designation here",
    photo:  team3,
    description:
      " Lorem, ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis doloribus, laboriosam sapiente eligendi nemo quod. Dolor ullam sapiente error corrupti laborum odio. Commodi  sit amet consectetur adipisicing elit. Corporis doloribus, laboriosam sapiente eligendi nemo quod. Dolor ullam sapiente error corrupti laborum odio. Commodi rem iste odio hic eos nihil porr",
  },
];
const Team = () => {
  return (
    <div className="bg-white rounded-md p-4 mt-5">
      <h1 className="font-semibold pb-5 " style={{ fontSize: 23 }}>
        About Bitcoin
      </h1>
      <p className="pb-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
        doloribus, laboriosam sapiente eligendi nemo quod. Dolor ullam sapiente
        error corrupti laborum odio. Commodi rem iste odio hic eos nihil porro.
      </p>

      {teammembers.map((element, index) => (
         <section key={index} className="flex mt-6 items-center text-lg text-black  bg-blue-100/60 rounded-md px-8 py-4">
       <section className=" flex-col justify-center items-center">
        <img src={element.photo} alt={element.name} className="rounded-md h-40 pb-4" />
        <p className="text-black font-bold text-center w-36">{element.name}</p>
        <p className="text-black/60 text-sm e-36 text-center">{element.roll}</p>
       </section>
       <p style={{fontSize:14}} className="ml-8 font-medium  text-black/80">{element.description}</p>
       </section>
      ))}
    </div>
  );
};

export default Team;
