import React from "react";
import image1 from "../images/image2.png";
import image2 from "../images/image3.png";
import { Button } from "bootstrap";
const AboutBitcoin = () => {
  return (
    <div className="about-bitcoin mt-5 bg-white rounded-md p-4">
      <h1 className="font-semibold pb-5 " style={{ fontSize: 23 }}>
        About Bitcoin
      </h1>
      <p className=" font-bold py-2">What is Bitcoin?</p>
      <p>
        Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
        from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
        all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
        and a max supply of 21 M BTC.
      </p>
      <section className=" h-0.5 my-4 bg-black/10" />
      <p className=" font-bold py-2">Lorem ipsum dolor sit</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam odio
        aut dolorem, eaque id quos, esse quis sequi illum animi explicabo natus
        ratione nihil ipsa accusamus. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Eveniet suscipit cupiditate ea dignissimos atque quod
        iusto? Accusamus iste eaque iusto. Ullam atque itaque architecto
        voluptas dolorum deserunt, ut sequi dicta! lorem Lorem ipsum dolor
        <br />
        <br />
        sit amet consectetur, adipisicing elit. Quidem expedita eos dolores unde
        ut, neque reprehenderit iusto provident minima obcaecati dolorem? Et,
        facilis perspiciatis totam nobis aperiam qui repellat
        <br />
        <br /> cum?lorem loremNesciunt architecto ipsa vel. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Libero, culpa illo ullam aliquid
        aspernatur mollitia, odit, fuga facere excepturi atque molestias beatae
        quo ipsam magni distinctio in veritatis hic iste! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Libero est, possimus delectus nam cum
        dolore quasi corrupti, sed enim adipisci quis? Esse eos explicabo nisi
        pariatur dolores ratione reprehenderit fugiat?Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Voluptatem quisquam atque perspiciatis,
        fugit, tempora officia ratione ducimus culpa, illum beatae non
        aspernatur eius alias. Sit numquam unde quasi impedit
        <br />
        <br />
        facilis?lorem'lorem'Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Sint, sequi amet sunt consectetur temporibus libero harum adipisci
        ipsum id molestias est vitae nulla unde officiis corporis, animi quos,
        fugiat sed.lorem Lorem ipsum dolor sit amet consectetur adipisicing
        pariatur fuga, culpa delectus vitae cupiditate autem architecto
        officiis, soluta error debitis velit ab adipisci inventore? Ducimus eum
        sequi repudiandae!
      </p>
      <section className=" h-0.5 my-4 bg-black/10" />

      <h1 className="font-semibold pb-5 " style={{ fontSize: 23 }}>
        Already holding Bitcoin?
      </h1>
      <div className=" flex flex-wrap gap-6">
        <section
          style={{ width: "380px" }}
          className=" flex rounded-md p-2  bg-gradient-to-r from-blue-500 to-green-500"
        >
          <img src={image1} className=" rounded-md w-34 h-32"></img>
          <section className="pr-8 pl-4">
            <h1 className="text-white font-semibold text-2xl text-wrap">
              Calculate your Profits
            </h1>
            <button className="flex mt-4 text-center gap-1 p-1 text-sm font-semibold bg-white rounded-lg ">
              <p>Check Now</p>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </section>
        </section>
        <section
          style={{ width: "380px" }}
          className=" flex  rounded-md p-2  bg-gradient-to-r from-blue-500 to-green-500"
        >
          <img src={image2} className=" rounded-md w-34 h-32"></img>
          <section className="pr-8 pl-4">
            <h1 className="text-white text-wrap font-semibold text-2xl">
              Calculate your tax liability
            </h1>
            <button className="flex mt-4 text-center gap-1 p-1 text-sm font-semibold bg-white rounded-lg ">
              <p>Check Now</p>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </section>
        </section>
      </div>
      <section className=" h-0.5 my-4 bg-black/10" />
      <p>
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in' eget. Ullamcorper
        dui
      </p>
    </div>
  );
};

export default AboutBitcoin;
