import { useState } from "react";
import foodItems from "../JSON/CategoriesJSON/foodItem";
import "./CategoriesPage.css";

const categories = ["all", "breakfast", "lunch", "drink", "starter"];

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems =
    selectedCategory === "all"
      ? foodItems
      : foodItems.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div className="categories-page">
     
      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* FOOD CARDS */}
      <div className="cards">
        {filteredItems.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} className="card-img"/>
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>
            <button className="order-btn">Order</button>
          </div>
        ))}
      </div>
    </div>
  );
}
