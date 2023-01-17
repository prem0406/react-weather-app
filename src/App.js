import CardWrapper from "./modules/cardWrapper";
import Header from "./modules/header";
import HourSection from "./modules/hourSection";

function App() {
  //sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3
  return (
    <div>
      <Header />
      <CardWrapper />
      <HourSection />
    </div>
  );
}

export default App;
