import React from "react";
import { FaTachometerAlt, FaTint } from 'react-icons/fa';

function Pressure({ dailyDetails }) {
  return (
    <div className="flex flex-row w-full my-6 md:mx-auto">
      <div className="bg-bals-blue w-1/2 h-16 ml-2 mr-3 p-2 flex items-center bg">
        <FaTachometerAlt size={24} className="mr-2" />
        <div>
          <p>Pressure</p>
          <p>{dailyDetails.pressure} hPa</p>
        </div>
      </div>
      <div className="bg-bals-blue w-1/2 mr-2 h-16 p-2 flex items-center bg">
        <FaTint size={24} className="mr-2" />
        <div>
          <p>Humidity</p>
          <p>{dailyDetails.humidity} %</p>
          
        </div>
      </div>
    </div>
  );
}

export default Pressure;
