import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Order Food <br /> Fast & Fresh with <span>QuickBite</span>
        </h1>
        <p>
          Discover top restaurants near you and get your favorite food delivered
          at lightning speed.
        </p>

        <div className="hero-search">
          <input type="text" placeholder="Search for restaurants or food..." />
          <button>Search</button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="Food"
        />
      </div>
    </section>
  );
};

export default Hero;
