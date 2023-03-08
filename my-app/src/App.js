
import './App.css';
import {MyCycle} from "./development/MyCycle/MyCycle";
import {CarouselMain} from "./Carousel";
import "./carousel.css"
function App() {
  return <>
    <CarouselMain/>
    <MyCycle className="mainContainer"/>
  </>
}

export default App;
