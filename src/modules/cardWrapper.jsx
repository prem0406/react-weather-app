import React from "react";
import Card from "./card";

const CardWrapper = ({ daily = [], tempUnit }) => {
  return (
    <div className="p-4 grid grid-flow-col auto-cols-auto gap-2 justify-center">
      {daily.map((day) => (
        <Card day={day} tempUnit={tempUnit} />
      ))}
    </div>
  );
};

export default CardWrapper;
