import React from "react";
import { getIconUrl } from "../Utility/utility";

const Header = ({ current }) => {
  return (
    <div className="flex bg-[url('asset/images/bg-cloud.jpg')]">
      <div className="w-2/4 flex justify-center items-center p-2 m-2 border-r-2 border-r-black">
        <img
          src={getIconUrl(current?.iconCode)}
          alt="sun"
          className="h-20 w-20"
        />
        <div className="text-3xl ml-4 text-white">
          <span>{current?.currentTemp || 57}</span>
          &deg;
        </div>
      </div>

      <div className="p-8 w-2/4 grid grid-cols-3 grid-rows-2 gap-2">
        <div className="text-white">
          <div className="text-sm font-bold uppercase">High</div>
          <div>
            <span>{current?.highTemp || 57}</span>
            &deg;
          </div>
        </div>

        <div className="text-white">
          <div className="text-sm font-bold uppercase">FL High</div>
          <div>
            <span>{current?.highFeelsLike || 57}</span>
            &deg;
          </div>
        </div>

        <div className="text-white">
          <div className="text-sm font-bold uppercase">Wind</div>
          <div>
            <span>{current?.windSpeed || 57}</span>
            <span className="text-xs font-light">mph</span>
          </div>
        </div>

        <div className="text-white">
          <div className="text-sm font-bold uppercase">Low</div>
          <div>
            <span>{current?.lowTemp || 57}</span>
            &deg;
          </div>
        </div>

        <div className="text-white">
          <div className="text-sm font-bold uppercase">FL Low</div>
          <div>
            <span>{current?.lowFeelsLike || 57}</span>
            &deg;
          </div>
        </div>

        <div className="text-white">
          <div className="text-sm font-bold uppercase">Precip</div>
          <div>
            <span>{current?.precip || 57}</span>
            <span className="text-xs font-light">in</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
