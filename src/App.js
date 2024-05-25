import "./styles.css";
import { slides } from "./data/ImageData.json";
import { Carousel } from "./components/Carousel";

export default function App() {
  console.log(slides);
  return (
    <div className="App">
      <Carousel slides={slides} />
    </div>
  );
}
