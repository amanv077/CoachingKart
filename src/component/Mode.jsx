/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component

// Shared Tailwind CSS class strings
// const NAV_LINK_CLASSES = "hover:text-primary";
const BUTTON_CLASSES =
  "bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/80";
const FLEX_CENTER_CLASSES = "flex justify-center items-center";

const Mode = () => {
  return (
    <div className="bg-background text-foreground">
      <Navbar /> {/* Use the Navbar component */}
      <HeroSection />
    </div>
  );
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className={`${FLEX_CENTER_CLASSES} flex-col h-screen bg-gradient-to-r from-secondary to-accent text-center`}
    >
      <h1 className="text-4xl font-bold mb-6">Choose Your Coaching Style</h1>
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 sm:mb-6">
        <Button label="Online Coaching" onClick={() => navigate("/online")} />
        <Button label="Offline Coaching" onClick={() => navigate("/offline")} />
        <Button
          label="Already Enrolled"
          onClick={() => navigate("/enrolled")}
        />
      </div>
    </section>
  );
};

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className={BUTTON_CLASSES}>
      {label}
    </button>
  );
};

export default Mode;
