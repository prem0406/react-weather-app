import React from "react";
import { CELSIUS, INCH, KMH } from "../Utility/constants";
import { getIconUrl } from "../Utility/utility";

const Header = ({ current, tempUnit, speedUnit, precipUnit }) => {
  return (
    <div
      style={{ backgroundImage: `url(${getIconUrl(current?.iconCode, true)})` }}
      className={`flex bg-cover`}
    >
      <div className="w-2/4 flex justify-center items-center p-2 m-2 border-r-2 border-r-black">
        <img
          src={getIconUrl(current?.iconCode)}
          alt="sun"
          className=" h-12 w-12 sm:h-20 sm:w-20"
        />
        <div className="text-2xl sm:text-3xl ml-4 text-white text-shadow">
          <span>{current?.currentTemp || 57} </span>
          &deg;{tempUnit === CELSIUS ? "C" : "F"}
        </div>
      </div>

      <div className="p-4 sm:p-8 w-2/4 grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] gap-2 text-shadow">
        <div className="text-white text-xs sm:text-sm">
          <div className="font-bold uppercase">High</div>
          <div>
            <span>{current?.highTemp || 57}</span>
            &deg;{tempUnit === CELSIUS ? "C" : "F"}
          </div>
        </div>

        <div className="text-white text-xs sm:text-sm">
          <div className="font-bold uppercase">FL High</div>
          <div>
            <span>{current?.highFeelsLike || 57}</span>
            &deg;{tempUnit === CELSIUS ? "C" : "F"}
          </div>
        </div>

        <div className="text-white text-xs sm:text-sm">
          <div className="font-bold uppercase">Wind</div>
          <div>
            <span>{current?.windSpeed || 57}</span>
            <span className="text-xs font-light">
              {speedUnit === KMH ? "km/h" : "mph"}
            </span>
          </div>
        </div>

        <div className="text-white text-xs sm:text-sm">
          <div className="font-bold uppercase">Low</div>
          <div>
            <span>{current?.lowTemp || 57}</span>
            &deg;{tempUnit === CELSIUS ? "C" : "F"}
          </div>
        </div>

        <div className="text-white text-xs sm:text-sm">
          <div className="font-bold uppercase">FL Low</div>
          <div>
            <span>{current?.lowFeelsLike || 57}</span>
            &deg;{tempUnit === CELSIUS ? "C" : "F"}
          </div>
        </div>

        <div className="text-white text-xs sm:text-sm">
          <div className="font-bold uppercase">Precip</div>
          <div>
            <span>{current?.precip || 57}</span>
            <span className="text-xs font-light">
              {precipUnit === INCH ? "in" : "mm"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
