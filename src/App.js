import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import CardWrapper from "./modules/cardWrapper";
import Header from "./modules/header";
import HourSection from "./modules/hourSection";
import { getWeather } from "./services/service";
import { CELSIUS, INCH, KMH } from "./Utility/constants";

function App() {
  //sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3
  // const [data, setData] = useState({});
  const [tempUnit, setTempUnit] = useState(CELSIUS);
  const [speedUnit, setSpeedUnit] = useState(KMH);
  const [precipUnit, setPrecipUnit] = useState(INCH);
  const [coord, setCoord] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(positionSuccess, positionError);
  }, [tempUnit, speedUnit, precipUnit]);

  const { isLoading, error, data } = useQuery({
    enabled: coord !== null,
    queryKey: ["getWeather"],
    queryFn: () =>
      getWeather(
        coord?.latitude,
        coord?.longitude,
        Intl.DateTimeFormat().resolvedOptions().timeZone,
        tempUnit,
        speedUnit,
        precipUnit
      ),
  });

  function positionSuccess({ coords }) {
    const { latitude, longitude } = coords;
    setCoord({ latitude, longitude });
  }

  function positionError() {
    alert(
      "There was an error getting your location. Please allow us to use your location and refresh the page."
    );
  }

  const onUnitChange = (e) => {
    const { name, value } = e.target;
    if (name === "temp-unit") {
      setTempUnit(value);
      return;
    }

    if (name === "speed-unit") {
      setSpeedUnit(value);
      return;
    }

    setPrecipUnit(value);
  };

  if (isLoading)
    return (
      <div className="flex flex-col justify-center items-center mt-20 text-2xl text-green-500">
        Please wait...
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="text-lg text-red-500">Sorry! This website is down.</div>
        <div className="mt-10">{error?.message}</div>
      </div>
    );

  return (
    <div>
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
      <Header
        current={data?.current}
        tempUnit={tempUnit}
        speedUnit={speedUnit}
        precipUnit={precipUnit}
      />
      <CardWrapper daily={data?.daily} tempUnit={tempUnit} />
      <HourSection
        hourly={data?.hourly}
        tempUnit={tempUnit}
        speedUnit={speedUnit}
        precipUnit={precipUnit}
      />
    </div>
  );
}

export default App;
