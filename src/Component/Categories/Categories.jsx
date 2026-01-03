import React from "react";
import "./Categories.css";
import categoriesData from "../JSON/CategoriesJSON/Categories.json";
import { Link } from "react-router-dom";


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
                <Link to="/categoriesPage">
                <button className="order-btn">View Details</button>
                </Link>
            </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
