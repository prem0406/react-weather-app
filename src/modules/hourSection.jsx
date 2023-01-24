import React from "react";
import HourRow from "./hourRow";

const HourSection = ({ hourly = [], tempUnit, speedUnit, precipUnit }) => {
  return (
    <div className="mt-4">
      <table className="w-full text-center border-spacing-0">
        <tbody className="[&>*:nth-child(even)]:bg-blue-500">
          {hourly.map((hour) => (
            <HourRow
              hour={hour}
              tempUnit={tempUnit}
              speedUnit={speedUnit}
              precipUnit={precipUnit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HourSection;
