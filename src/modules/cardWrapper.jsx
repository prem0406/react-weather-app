import React from "react";
import Card from "./card";

const CardWrapper = ({ daily = [], tempUnit }) => {
  return (
    <div className="p-4 md:px-12 grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-2 justify-center">
      {daily.map((day, index) => (
        <Card day={day} tempUnit={tempUnit} key={day.timestamp} />
      ))}
    </div>
  );
};

export default CardWrapper;
