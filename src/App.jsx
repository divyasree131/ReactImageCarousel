import "./styles.css";
import slides from "./data/ImageData";
import { Carousel } from "./components/Carousel";

export default function App() {
  return (
    <div className="App">
      <Carousel slides={slides} />
    </div>
  );
}
