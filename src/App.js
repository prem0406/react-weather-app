import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useGeolocation from "./hooks/useGeolocation";
import CardWrapper from "./modules/cardWrapper";
import Header from "./modules/header";
import HourSection from "./modules/hourSection";
import UnitSection from "./modules/unitSection";
import { getWeather } from "./services/service";
import { CELSIUS, INCH, KMH } from "./Utility/constants";

function App() {
  const [tempUnit, setTempUnit] = useState(CELSIUS);
  const [speedUnit, setSpeedUnit] = useState(KMH);
  const [precipUnit, setPrecipUnit] = useState(INCH);

  const { data: coord, loading } = useGeolocation();

  const { isLoading, error, data } = useQuery({
    enabled: !loading,
    queryKey: ["getWeather", tempUnit, speedUnit, precipUnit],
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

  // if (isLoading)
  //   return (
  //     <div className="flex flex-col justify-center items-center mt-20 text-2xl text-green-500">
  //       Please wait...
  //     </div>
  //   );

  if (error)
    return (
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="text-lg text-red-500">Sorry! This website is down.</div>
        <div className="mt-10">{error?.message}</div>
      </div>
    );

  return (
    <div className={isLoading ? "blur-sm" : ""}>
      <UnitSection onUnitChange={onUnitChange} />
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
