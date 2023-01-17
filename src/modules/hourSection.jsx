import React from "react";
import HourRow from "./hourRow";

const HourSection = () => {
  return (
    <div mt-4>
      <table className="w-full text-center border-spacing-0">
        <tbody>
          <HourRow />
          <HourRow />
          <HourRow />
          <HourRow />
        </tbody>
      </table>
    </div>
  );
};

export default HourSection;
