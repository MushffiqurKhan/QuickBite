import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import "./App.css";
import Categories from "./Component/Categories/Categories";
import Discount from "./Component/Discount/Discount";
import Features from "./Component/Features/Features";
import Footer from "./Component/Footer/Footer";
import AboutUs from "./Component/About/AboutUs";
import { Route, Routes } from "react-router-dom";
import CategoriesPage from "./Component/CategoriesPage/CategoriesPage";

function App() {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
              <Discount />
              <Features />
            </>
          }
        />

        {/* ABOUT PAGE */}
        <Route path="/about" element={<AboutUs />} />
        {/* CategoriesPage */}
        <Route path="/categoriesPage" element={<CategoriesPage />} />
      </Routes>

      {/* Fixed Footer */}
      <Footer />
    </>
  );
}

export default App;
