import React from "react";
import Card from "./card";

const CardWrapper = () => {
  return (
    <div className="p-4 grid grid-flow-col auto-cols-auto gap-2 justify-center">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardWrapper;
