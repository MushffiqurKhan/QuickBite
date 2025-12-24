import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import "./App.css";
import Categories from "./Component/Categories/Categories";
import Discount from "./Component/Discount/Discount";
import Features from "./Component/Features/Features";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories/>
      <Discount/>
      <Features/>
      <Footer/>
    </>
  );
}

export default App;
