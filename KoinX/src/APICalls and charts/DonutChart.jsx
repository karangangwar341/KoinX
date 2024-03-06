import React from 'react';

const DonutChart = ({ sections }) => {
 // Calculate the conic-gradient CSS property value
 const gradientValue = sections.map((section, index) => {
    const { color, percent } = section;
    const startDegrees = (sections.slice(0, index).reduce((acc, curr) => acc + curr.percent, 0) * 3.6);
    const endDegrees = startDegrees + (percent * 3.6);
    return `${color} ${startDegrees}deg ${endDegrees}deg`;
 }).join(', ');

 // Define the CSS for the donut chart
 const donutStyle = {
    width: '160px', // Adjust the size of the donut chart
    height: '160px',
    borderRadius: '50%',
    background: `conic-gradient(${gradientValue})`,
    position: 'relative',
    clipPath: 'circle(80% at 50% 50%)', // Create the donut hole
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const centerStyle = {
    width: '110px',
    height: '110px',
    borderRadius: '50%',
    background: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
 return (
    <div className='mt-5' style={{ display: 'flex', alignItems: 'center', }}>
      <div style={donutStyle}>
      <div style={centerStyle}></div>
      </div>
      
      <div style={{ marginLeft: '20px' }}>
        {sections.map((section, index) => (
          <div className='flex py-2 justify-start items-center gap-3' key={index}>
            <div style={{ height: '12px', width: '12px', backgroundColor: section.color, borderRadius: '50%' }}></div>
            <div className=' flex gap-2'><p>{section.label }</p>  <p>   {section.percent }%</p></div>
          </div>
        ))}
      </div>
    </div>
 );
};

export default DonutChart;
