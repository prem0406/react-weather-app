import { useEffect, useState } from "react";
import CardWrapper from "./modules/cardWrapper";
import Header from "./modules/header";
import HourSection from "./modules/hourSection";
import { getWeather } from "./services/service";

function App() {
  //sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3
  const [data, setData] = useState({});
  useEffect(() => {
    getWeather(5, 5, Intl.DateTimeFormat().resolvedOptions().timeZone)
      .then((res) => {
        setData({ ...res });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Header current={data?.current} />
      <CardWrapper daily={data?.daily} />
      <HourSection hourly={data?.hourly} />
    </div>
  );
}

export default App;
