/* eslint-disable react/prop-types */
import { useState } from "react"; // Import useState for state management
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

// Shared Tailwind CSS classes
const sharedClasses = {
  card: "bg-white text-gray-900 p-6 rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105",
  button:
    "bg-blue-600 text-white p-3 rounded mt-3 hover:bg-blue-700 transition-colors duration-200",
  select:
    "bg-gray-100 text-gray-900 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4",
  flexBetween: "flex justify-between items-center",
  mb4: "mb-4",
  textMuted: "text-gray-600 mb-2",
  rangeInput: "w-full",
  container: "flex flex-col lg:flex-row gap-6", // Responsive flex container
};

// Main component
const Offline = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 text-gray-900">
      <Navbar />
      <div className="p-6">
        <div className={sharedClasses.container}>
          <Aside />
          <Main />
        </div>
      </div>
    </div>
  );
};

// FilterOptions component
const FilterOptions = () => {
  const states = [
    "State",
    "Maharashtra",
    "Delhi",
    "Karnataka",
    "Tamil Nadu",
    "West Bengal",
    "Gujarat",
    "Uttar Pradesh",
    "Rajasthan",
    "Madhya Pradesh",
  ];
  const cities = [
    "City",
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Ahmedabad",
    "Pune",
  ];
  const courses = [
    "Select Course",
    "Class 10",
    "Class 11",
    "Class 12",
    "IIT JEE",
    "NEET",
    "UPSC",
    "CAT",
    "GATE",
    "SSC",
    "Bank PO",
  ];

  return (
    <div className="space-y-4 bg-white p-4 rounded-lg shadow-md">
      <Select options={states} placeholder="State" />
      <Select options={cities} placeholder="City" />
      <Select options={courses} placeholder="Course" />
    </div>
  );
};

// Select component
const Select = ({ options }) => (
  <select className={sharedClasses.select}>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
);

// Aside component
const Aside = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track filter visibility

  const toggleFilters = () => {
    setIsOpen((prev) => !prev); // Toggle the filter visibility
  };

  return (
    <aside className="w-full lg:w-1/4 p-6 bg-blue-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Filters</h2>
      <button
        onClick={toggleFilters}
        className={`${sharedClasses.button} mb-4 w-full`}
      >
        {isOpen ? "Hide Filters" : "Show Filters"}
      </button>
      {isOpen && ( // Conditionally render filters based on state
        <div>
          <FilterOptions />
          <div className="mt-6">
            <Filter label="Price (INR)" min={0} max={50000} unit="₹" />
            <Filter label="Rating" min={0} max={5} step={0.1} />
            <Filter label="Distance (km)" min={0} max={50} unit="km" />
          </div>
        </div>
      )}
    </aside>
  );
};

// Filter component
const Filter = ({ label, min, max, step = 1, unit = "" }) => (
  <div className={sharedClasses.mb4}>
    <label className="block mb-2 text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      className={sharedClasses.rangeInput}
    />
    <div className="flex justify-between text-sm text-gray-600">
      <span>
        {min}
        {unit}
      </span>
      <span>
        {max}
        {unit}
      </span>
    </div>
  </div>
);

// Main component
const Main = () => {
  const coachingCenters = [
    {
      name: "Elite Coaching Center",
      location: "Delhi",
      rating: 4.5,
      img: "https://elitecoachingcenter.com/wp-content/uploads/2014/09/Elite.png",
    },
    {
      name: "Premier Learning Hub",
      location: "Mumbai",
      rating: 4.7,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDb9Y1-AEdUS-XQVgDqS6IquzeBW_QDLOSlg&s",
    },
    {
      name: "Success Academy",
      location: "Bangalore",
      rating: 4.8,
      img: "https://successacademysb.com/wp-content/uploads/2023/04/SASB-Circle-Alternate-Logo-web-1.png",
    },
    {
      name: "Bright Future Institute",
      location: "Chennai",
      rating: 4.6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaxD-V0eSw_ePR46elgtW7sliCewGWk4znOg&s",
    },
    {
      name: "Achiever's Point",
      location: "Hyderabad",
      rating: 4.4,
      img: "https://play-lh.googleusercontent.com/4rtekwvkRfoNIC2UwMlYVGeNA0GerfZcb-1LgJY5ZWsI1i6rJ8JYFEH4f4uKrBQhSA",
    },
    {
      name: "Aspire Coaching",
      location: "Kolkata",
      rating: 4.3,
      img: "https://lh3.googleusercontent.com/proxy/H0m5MFrMBg013azXl0KC9mNQsTIG2yvBV5vF5E_rZQB238CHZOcAl38vqPdv7eDN2QHxORbcpecTH5X8FjTU1JspUzKg5Orslg",
    },
  ];

  return (
    <main className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {coachingCenters.map((center, index) => (
        <CoachingCard key={index} center={center} />
      ))}
    </main>
  );
};

// CoachingCard component
const CoachingCard = ({ center }) => {
  const navigate = useNavigate();

  return (
    <div className={sharedClasses.card}>
      <img
        src={center.img}
        alt={center.name}
        className="w-full h-48 object-contain rounded mb-4"
      />

      <h3 className="text-lg font-bold mb-2">{center.name}</h3>
      <p className={sharedClasses.textMuted}>Location: {center.location}</p>
      <p className={sharedClasses.textMuted}>Rating: {center.rating}</p>
      <button
        className={sharedClasses.button}
        onClick={() => navigate("/course")}
      >
        Enroll Now
      </button>
    </div>
  );
};

export default Offline;
