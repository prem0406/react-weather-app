import React from "react";
import { DAY_FORMATTER, getIconUrl, HOUR_FORMATTER } from "../Utility/utility";

const HourRow = ({ hour }) => {
  return (
    <tr className="bg-sky-500">
      <td className="p-2">
        <div className="flex flex-col items-center">
          <div className="uppercase text-xs text-blue-900">
            {DAY_FORMATTER.format(hour?.timestamp)}
          </div>
          <div>{HOUR_FORMATTER.format(hour?.timestamp)}</div>
        </div>
      </td>
      <td>
        <img src={getIconUrl(hour?.iconCode)} alt="sun" className="h-10 w-10" />
      </td>
      <td>
        <div className="flex flex-col items-center">
          <div className="uppercase text-xs text-blue-900">Temp</div>
          <div>
            <span>{hour?.temp || 57}</span>
            &deg;
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col items-center">
          <div className="uppercase text-xs text-blue-900">FL Temp</div>
          <div>
            <span>{hour?.feelsLike}</span>
            &deg;
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col items-center">
          <div className="uppercase text-xs text-blue-900">Wind</div>
          <div>
            <span>{hour?.windSpeed || 15}</span>
            <span className="text-xs font-light">mph</span>
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col items-center">
          <div className="uppercase text-xs text-blue-900">Precip</div>
          <div>
            <span>{hour?.precip ?? 15}</span>
            <span className="text-xs font-light">in</span>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default HourRow;
