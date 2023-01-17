import React from "react";

const HourRow = () => {
  return (
    <tr className="bg-sky-500">
      <td className="p-2">
        <div className="flex flex-col items-center">
          <div className="uppercase text-xs text-blue-900">Tuesday</div>
          <div>15</div>
        </div>
      </td>
      <td>
        <img src="images/sun.svg" alt="sun" className="h-10 w-10" />
      </td>
      <td>
        <div className="flex flex-col items-center">
          <div className="uppercase text-xs text-blue-900">Temp</div>
          <div>
            <span>57</span>
            &deg;
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col items-center">
          <div className="uppercase text-xs text-blue-900">FL Temp</div>
          <div>
            <span>57</span>
            &deg;
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col items-center">
          <div className="uppercase text-xs text-blue-900">Wind</div>
          <div>15</div>
        </div>
      </td>
      <td>
        <div className="flex flex-col items-center">
          <div className="uppercase text-xs text-blue-900">Precip</div>
          <div>15</div>
        </div>
      </td>
    </tr>
  );
};

export default HourRow;
