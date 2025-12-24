import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Features.css";

const featuresData = [
  { title: "Fast Delivery", desc: "Hot & fresh food delivered fast.", icon: "🚀" },
  { title: "Top Restaurants", desc: "Best restaurants near you.", icon: "🍽️" },
  { title: "Easy Ordering", desc: "Order food in just a few clicks.", icon: "📱" },
  { title: "Live Tracking", desc: "Track your food in real-time.", icon: "📍" },
];

function Features() {
  const controls = useAnimation();

  const startSlider = () => {
    controls.start({
      x: "-50%", // slide left
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startSlider();
  }, []);

  return (
    <section className="features">
      <h2 className="features-heading">Why Choose Our Food</h2>

      <div className="slider">
        <motion.div
          className="features-container"
          animate={controls}
          onMouseEnter={() => controls.stop()}   // ⏸ Pause smoothly
          onMouseLeave={startSlider}             // ▶ Resume smoothly
        >
          {[...featuresData, ...featuresData].map((item, index) => (
            <motion.div
              className="feature-card"
              key={index}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
