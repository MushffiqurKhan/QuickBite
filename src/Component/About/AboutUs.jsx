import React from 'react'
import "./About.css"
import { FaShieldAlt, FaCheckCircle, FaTruck, FaTags, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";


const points = [
  { icon: <FaShieldAlt />, text: "Safe & Secure Ordering" },
  { icon: <FaCheckCircle />, text: "Quality Checked Products" },
  { icon: <FaTruck />, text: "On-Time & Reliable Delivery" },
  { icon: <FaTags />, text: "Transparent Pricing" },
  { icon: <FaHeadset />, text: "Support You Can Rely On" },
];

export default function AboutUs() {
  return (
<div className="about">
  <div className="container">
    <div className="about_contain">
      <h2>About Us</h2>
      <p>
       We are a dedicated team committed to delivering high-quality products and reliable services that you can trust. Every order we process is handled with care, attention, and a strong focus on customer satisfaction. Our mission is to make your experience smooth, secure, and enjoyable — from browsing to delivery. We believe in building long-term relationships by offering value, transparency, and consistent quality you can rely on every time.
      </p>

      <div className="about_points">
        <div>
      {points.map((item, index) => (
        <motion.div
          key={index}
          className="point"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          viewport={{ once: true }}
        >
          <span className="icon">{item.icon}</span>
          <p>{item.text}</p>
        </motion.div>
      ))}
      </div>
    

    </div>

     </div>

    {/* <div className="about_img">
      <img src="/about.png" alt="About Us" />
    </div> */}
  </div>
</div>

  )
}
