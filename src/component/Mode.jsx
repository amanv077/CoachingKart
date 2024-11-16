import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Import Navbar
import "./HomePage.css"; // Import external styles

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <HeroSection />
      <FloatingAnimations />
    </div>
  );
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <h1>Empower Your Learning Journey</h1>
      <p>
        Discover the best coaching tailored to your needs. Choose from online,
        offline, or hybrid options and unlock your full potential with our
        expert guidance.
      </p>
      <div className="hero-buttons">
        <button onClick={() => navigate("/online")}>
          Explore Online Coaching
        </button>
        <button onClick={() => navigate("/offline")}>
          Explore Offline Coaching
        </button>
        <button onClick={() => navigate("/enrolled")}>
          View Enrolled Courses
        </button>
      </div>
    </section>
  );
};

const FloatingAnimations = () => (
  <div className="floating-animations">
    {/* Book */}
    <img
      src="https://cdn-icons-png.flaticon.com/512/484/484560.png"
      alt="Book"
      className="animate-floating"
      style={{ position: "absolute", top: "20%", left: "15%", width: "50px" }}
    />
    {/* Graduation Cap */}
    <img
      src="https://cdn-icons-png.flaticon.com/512/2977/2977965.png"
      alt="Graduation Cap"
      className="animate-floating-slow"
      style={{ position: "absolute", top: "30%", left: "80%", width: "70px" }}
    />
    {/* Pencil */}
    <img
      src="https://cdn-icons-png.flaticon.com/512/127/127472.png"
      alt="Pencil"
      className="animate-floating"
      style={{
        position: "absolute",
        bottom: "10%",
        right: "10%",
        width: "40px",
      }}
    />
  </div>
);

export default HomePage;
