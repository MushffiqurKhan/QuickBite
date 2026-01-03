import React from "react";
import "./Categories.css";
import categoriesData from "../JSON/CategoriesJSON/Categories.json";
import { useNavigate } from "react-router-dom";


function Categories() {
   const navigate = useNavigate();
  return (
    <section className="categories">
      <div className="heading">
        <h2>Explore Categories</h2>
      </div>
      <div className="categories_container">
        {categoriesData.map((categories) => (
            <div className="card" key={categories.id}>
                <img src={categories.img} alt={categories.name} />
                <h3>{categories.name}</h3>
                <p>{categories.desc}</p>
             <button
              className="order-btn"
              onClick={() => navigate("/categoriesPage")}
            >
              View Details
            </button>
            </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
