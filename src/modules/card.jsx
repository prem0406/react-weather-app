import React from "react";
import { DAY_FORMATTER, getIconUrl } from "../Utility/utility";

const Card = ({ day }) => {
  return (
    <div className="px-4 py-1 border-solid border border-sky-500 rounded flex flex-col items-center">
      <img src={getIconUrl(day?.iconCode)} alt="sun" className="h-10 w-10" />
      <div className="mt-2 text-xs text-blue-900">
        {DAY_FORMATTER.format(day.timestamp)}
      </div>
      <div className="mt-1">
        <span>{day?.maxTemp || 57}</span>
        &deg;
      </div>
    </div>
  );
};

export default Card;
