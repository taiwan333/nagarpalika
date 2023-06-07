import Carousel from "./components/carousel/Carousel";
import { data } from "./components/carousel/CarouselData";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

function App() {
  // console.log(data);
  return (
    <div className="">
      <Header />
      <Navbar />
      <Carousel data={data} />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
