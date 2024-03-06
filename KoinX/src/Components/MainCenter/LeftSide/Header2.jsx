import React from 'react';

const buttons = ["Overview", "Fundamentals", "News Insights", "Sentiments", "Team", "Technicals", "Tokenomics"];

const Header2 = () => {
  return (
    <div>
    <div className='flex w-full gap-4 py-4 mt-2 overflow-x-scroll' style={{
      scrollbarWidth: 'none', // For Firefox
      msOverflowStyle: 'none', // For Internet Explorer and Edge
      '&::-webkit-scrollbar': { // For Chrome, Safari, and Opera
        display: 'none'
      }
    }}>
      {buttons.map((element, index) => (
        <button key={index} className="relative font-semibold text-black/90 hover:text-blue-700">
          <div className="group">
            {element}
            <div className="absolute top-9 left-0 w-full h-0.5 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </button>
      ))}
    </div>
    <section className='w-full h-0.5 bg-slate-600/10 '>

    </section>
    </div>
  );
};

export default Header2;
