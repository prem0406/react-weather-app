import React from "react";
import HourRow from "./hourRow";

const HourSection = ({ hourly = [] }) => {
  return (
    <div className="mt-4">
      <table className="w-full text-center border-spacing-0">
        <tbody className="[&>*:nth-child(even)]:bg-blue-500">
          {hourly.map((hour) => (
            <HourRow hour={hour} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HourSection;
