import React from "react";
import "./Categories.css";
import categoriesData from "../JSON/CategoriesJSON/Categories.json";
function Categories() {
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
                <button className="order-btn">View Details</button>
            </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
