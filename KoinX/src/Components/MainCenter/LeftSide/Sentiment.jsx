import React, { useRef } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
const Sentiment = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 100; // Adjust based on your section width
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 100; // Adjust based on your section width
    }
  };
 
  const estimates = [
    { name: "Buy", percentage: 76, color: "#34c724" },
    { name: "Hold", percentage: 8, color: "#bbc2ba" },
    { name: "Sell", percentage: 16, color: "#ff0000" }
 ];

  return (
    <div className="rounded-xl w-full bg-white p-5 mt-4">
      <h1 className="font-semibold text-2xl py-3">Sentiment</h1>
      <section className="flex items-center mb-4 text-black/80 font-medium text-lg">
        <h2>Key Events</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="grey"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
      </section>
      <div className=" relative flex items-center justify-center">
        <button
          className="absolute w-12 h-12 bg-white rounded-full left-4 p-2"
          onClick={scrollLeft}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-black/70"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto"
          style={{
            scrollbarWidth: "none", // For Firefox
            msOverflowStyle: "none", // For Internet Explorer and Edge
            "&::-webkit-scrollbar": {
              display: "none", // For Chrome, Safari, and Opera
            },
          }}
        >
          <section
            className=" flex-shrink-0 rounded-xl bg-blue-100 p-4 flex gap-3"
            style={{ width: "500px" }}
          >
            <span className=" rounded-full p-2 h-10 bg-blue-600/90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-blue-600/90"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
              </svg>
            </span>
            <section>
              <p className="font-semibold mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                culpa velit accusamus impedit dolor elige
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                esse nam iure laboriosam ducimus est sunt perspiciatis enim!
                Excepturi s reiciendis sit optio necessitatibus rem doloribus,
                unde iusto quas cum labore laudantium asperiores modi culpa.
              </p>
            </section>
          </section>
          <section
            className=" flex-shrink-0 rounded-xl bg-green-100/60 p-4  flex gap-3"
            style={{ width: "500px" }}
          >
            <span className=" rounded-full p-2 h-10 bg-green-600/90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="None"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            </span>
            <section>
              <p className="font-semibold mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                culpa velit accusamus impedit dolor elige
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                esse nam iure laboriosam ducimus est sunt perspiciatis enim!
                Excepturi s reiciendis sit optio necessitatibus rem doloribus,
                unde iusto quas cum labore laudantium asperiores modi culpa.
              </p>
            </section>
          </section>
        </div>
        <button
          className="absolute w-12 h-12 right-4 bg-white rounded-full  p-2 "
          onClick={scrollRight}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <section className="flex items-center mt-6 mb-3 text-black/80 font-medium text-lg">
        <h2>Analyst Estimates</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="grey"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
      </section>
      <div className=" flex items-center">
        <section
          className="rounded-full font-semibold items-center text-center py-8 h-32 w-32  text-green-500/80 bg-green-400/20 "
          style={{ fontSize: 48 }}
        >
          <h1>76%</h1>
        </section>
        <section className="pl-8 w-full">
        {estimates.map((element, index) => (
         <section key={index} className="flex gap-3 items-center text-lg text-black/50 font-semibold">
         <p className=" w-16">{element.name}</p>
         <div style={{ width: '75%', backgroundColor: '#ffffff', borderRadius: '5px' }}>
      <ProgressBar completed={element.percentage} baseBgColor="#ffffff" bgColor={element.color} height="13px" />
    </div>

         {/* <p className="w-12">{element.percentage}%</p> */}
       </section>
      ))}
        </section>
      </div>
    </div>
  );
};

export default Sentiment;
