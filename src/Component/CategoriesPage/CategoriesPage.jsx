import { useState } from "react";
import foodItems from "../JSON/CategoriesJSON/foodItem";
import "./CategoriesPage.css";
import OrderModal from "../OrderModel/OrderModal";

const categories = ["all", "breakfast", "lunch", "drink", "starter"];

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedFood, setSelectedFood] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

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
            <div className="button_box">
            <button className="order-btn"
            onClick={() =>{
              setSelectedFood(item)
              setIsModalOpen(true)
            }}>
            Order</button>
            <button className="order-btn">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
  <OrderModal
    food={selectedFood}
    onClose={() => setIsModalOpen(false)}
  />
)}
    </div>
  );
}
