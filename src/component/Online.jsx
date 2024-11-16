/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

// Shared Tailwind CSS classes
const buttonClasses =
  "px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500";
const cardClasses =
  "bg-card text-card-foreground border border-border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300";
const selectClasses =
  "w-full p-1 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";
const tagClasses =
  "inline-block px-2 py-1 text-xs font-semibold text-white rounded-full bg-primary-light mr-2 mb-2";

const Online = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto mt-8 flex flex-col lg:flex-row">
        <Sidebar />
        <CoachingGrid />
      </div>
    </div>
  );
};

const Sidebar = () => (
  <aside className="w-full lg:w-1/4 p-3 bg-card text-card-foreground border border-border rounded-lg mb-4 lg:mb-0">
    <h2 className="text-lg font-semibold mb-3">Filter Options</h2>
    <FilterOption
      label="Class Level"
      options={["All Levels", "Class 9", "Class 10", "Class 11", "Class 12"]}
    />
    <FilterOption
      label="Subject"
      options={["All Subjects", "Mathematics", "Science", "English", "History"]}
    />
    <FilterOption
      label="Location"
      options={["All Locations", "Online", "In-Person", "Hybrid"]}
    />
    <FilterOption
      label="Price Range"
      options={["All Ranges", "₹1000 - ₹5000", "₹5000 - ₹10000", "₹10000+"]}
    />
    <FilterOption
      label="Rating"
      options={["All Ratings", "4 Stars & Up", "3 Stars & Up"]}
    />
    <FilterOption
      label="Format"
      options={["Any Format", "Live Classes", "Recorded Sessions"]}
    />
  </aside>
);

const FilterOption = ({ label, options }) => (
  <div className="mb-2">
    <label className="block mb-1 text-sm font-medium">{label}</label>
    <select className={selectClasses}>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </div>
);

const CoachingGrid = () => (
  <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
    {coachingData.map((coaching, index) => (
      <CoachingCard key={index} coaching={coaching} />
    ))}
  </div>
);

const coachingData = [
  {
    name: "Unacademy - Class 10 Science",
    rating: 4.7,
    range: "₹1000 - ₹7000",
    subject: "Science",
    tags: ["Popular", "High Demand"],
    description: "Comprehensive online coaching for Class 10 Science.",
  },
  {
    name: "Byju's - Mathematics Excellence",
    rating: 4.5,
    range: "₹3000 - ₹8000",
    subject: "Mathematics",
    tags: ["Trending"],
    description: "Master mathematics with Byju's expert instructors.",
  },
  {
    name: "Vedantu - English Grammar Pro",
    rating: 4.4,
    range: "₹2000 - ₹6000",
    subject: "English",
    tags: ["Popular"],
    description: "Improve English grammar skills for Class 9 and 10.",
  },
  {
    name: "Toppr - Physics Masterclass",
    rating: 4.8,
    range: "₹4000 - ₹9000",
    subject: "Science",
    tags: ["Popular", "Trending"],
    description: "Learn physics concepts with interactive live sessions.",
  },
  {
    name: "Extramarks - Chemistry Essentials",
    rating: 4.6,
    range: "₹3500 - ₹7500",
    subject: "Science",
    tags: ["Trending"],
    description: "Detailed chemistry coaching covering all fundamentals.",
  },
];

const CoachingCard = ({ coaching }) => {
  const navigate = useNavigate();

  return (
    <div className={cardClasses}>
      <img
        src="https://community.thriveglobal.com/wp-content/uploads/2017/09/coaching-2738523_1920.jpg"
        alt="Coaching Image"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{coaching.name}</h3>
        <p className="text-sm mb-2 text-gray-500">{coaching.subject}</p>
        <p className="text-sm mb-2">{coaching.description}</p>
        <div className="flex flex-wrap mt-2">
          {coaching.tags.map((tag, index) => (
            <span key={index} className={tagClasses}>
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-primary font-bold">{coaching.range}</span>
          <span className="text-yellow-400">
            {Array.from({ length: Math.floor(coaching.rating) }).map((_, i) => (
              <i key={i} className="fas fa-star"></i>
            ))}
          </span>
        </div>
        <button
          className={`mt-4 ${buttonClasses}`}
          onClick={() => navigate("/course")}
        >
          Take Demo Now
        </button>
      </div>
    </div>
  );
};

export default Online;
