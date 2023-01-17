import React from "react";

const Header = () => {
  return (
    <div className="flex bg-[url('asset/images/bg-cloud.jpg')]">
      <div className="w-2/4 flex justify-center items-center p-2 m-2 border-r-2 border-r-black">
        <img src="images/sun.svg" alt="sun" className="h-20 w-20" />
        <div className="text-3xl ml-4">
          <span>57</span>
          &deg;
        </div>
      </div>

      <div className="p-8 w-2/4 grid grid-cols-3 grid-rows-2 gap-2">
        <div className="text-white">
          <div className="text-sm font-bold text-white uppercase">High</div>
          <div>
            <span>57</span>
            &deg;
          </div>
        </div>

        <div>
          <div>High</div>
          <div>
            <span>57</span>
            &deg;
          </div>
        </div>

        <div>
          <div>High</div>
          <div>
            <span>57</span>
            &deg;
          </div>
        </div>

        <div>
          <div>High</div>
          <div>
            <span>57</span>
            &deg;
          </div>
        </div>

        <div>
          <div>High</div>
          <div>
            <span>57</span>
            &deg;
          </div>
        </div>

        <div>
          <div>High</div>
          <div>
            <span>57</span>
            &deg;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
