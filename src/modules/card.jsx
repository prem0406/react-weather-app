import React from "react";

const Card = () => {
  return (
    <div className="px-4 py-1 border-solid border border-sky-500 rounded flex flex-col items-center">
      <img src="images/sun.svg" alt="sun" className="h-10 w-10" />
      <div className="mt-2 text-xs text-blue-900">Tuesday</div>
      <div className="mt-1">
        <span>57</span>
        &deg;
      </div>
    </div>
  );
};

export default Card;
