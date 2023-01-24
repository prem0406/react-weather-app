import React from "react";

const UnitSection = ({ onUnitChange }) => {
  return (
    <div className="flex gap-2 items-center ml-4">
      <div>
        <label htmlFor="temp-unit" className="mr-1 text-xs text-slate-800">
          Temp Unit
        </label>
        <select
          name="temp-unit"
          id="temp-unit"
          onChange={onUnitChange}
          className="bg-transparent font-bold border border-cyan-100 rounded"
        >
          <option value="celsius"> &deg;C</option>
          <option value="fahrenheit"> &deg;F</option>
        </select>
      </div>
      <div>
        <label htmlFor="speed-unit" className="mr-1 text-xs text-slate-800">
          Wind Unit
        </label>
        <select
          name="speed-unit"
          id="speed-unit"
          onChange={onUnitChange}
          className="bg-transparent font-bold border border-cyan-100 rounded"
        >
          <option value="kmh">km/h</option>
          <option value="mph">mph</option>
        </select>
      </div>
      <div>
        <label htmlFor="precip-unit" className="mr-1 text-xs text-slate-800">
          Precip Unit
        </label>
        <select
          name="precip-unit"
          id="precip-unit"
          onChange={onUnitChange}
          className="bg-transparent font-bold border border-cyan-100 rounded"
        >
          <option value="inch">inch</option>
          <option value="mm">mm</option>
        </select>
      </div>
    </div>
  );
};

export default UnitSection;
