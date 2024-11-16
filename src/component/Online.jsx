/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const buttonClasses =
  "px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500";
const cardClasses =
  "bg-white text-gray-900 border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300";
const selectClasses =
  "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";
const tagClasses =
  "inline-block px-2 py-1 text-xs font-semibold text-white rounded-full bg-blue-500 mr-2 mb-2";

const Online = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto mt-8 flex flex-col lg:flex-row">
        <Sidebar />
        <CoachingGrid />
      </div>
    </div>
  );
};
const Sidebar = () => (
  <aside className="w-full lg:w-1/4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm mb-4 lg:mb-0">
    <h2 className="text-lg font-semibold mb-3">Filter Options</h2>

    {/* Class Level Filter */}
    <FilterOption
      label="Class Level"
      options={[
        "All Levels",
        "Class 9",
        "Class 10",
        "Class 11",
        "Class 12",
        "Bank/SSC",
        "CAT/CLAT",
        "JEE (Main)",
        "JEE (Advanced)",
        "NEET",
        "BITSAT",
        "AIIMS",
        "KVPY",
        "NDA",
      ]}
    />

    {/* Subject Filter */}
    <FilterOption
      label="Subject"
      options={[
        "All Subjects",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "English",
        "Computer Science",
        "Engineering Drawing",
        "History",
        "Geography",
        "Economics",
      ]}
    />

    {/* Location Filter */}
    <FilterOption
      label="Location"
      options={["All Locations", "Online", "In-Person", "Hybrid"]}
    />

    {/* Price Range Filter */}
    <FilterOption
      label="Price Range"
      options={[
        "All Ranges",
        "₹1000 - ₹5000",
        "₹5000 - ₹10000",
        "₹10000 - ₹20000",
        "₹20000+",
      ]}
    />

    {/* Rating Filter */}
    <FilterOption
      label="Rating"
      options={["All Ratings", "4 Stars & Up", "3 Stars & Up", "2 Stars & Up"]}
    />

    {/* Format Filter */}
    <FilterOption
      label="Format"
      options={[
        "Any Format",
        "Live Classes",
        "Recorded Sessions",
        "Pre-recorded Video Lectures",
        "Mock Tests",
        "Practice Papers",
      ]}
    />
  </aside>
);

const FilterOption = ({ label, options }) => (
  <div className="mb-4">
    <label className="block mb-2 text-sm font-medium">{label}</label>
    <select className={selectClasses}>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </div>
);

const CoachingGrid = () => (
  <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
    {coachingData.map((coaching, index) => (
      <CoachingCard key={index} coaching={coaching} />
    ))}
  </div>
);

const coachingData = [
  {
    name: "Unacademy - Class 10 Science",
    logo: "https://bsmedia.business-standard.com/_media/bs/img/article/2016-08/24/full/1472021363-6508.jpg",
    rating: 4.7,
    range: "₹1000 - ₹7000",
    subject: "Science",
    tags: ["Popular", "High Demand"],
    description: "Comprehensive online coaching for Class 10 Science.",
  },
  {
    name: "Byju's - Mathematics Excellence",
    logo: "https://logos-world.net/wp-content/uploads/2021/08/Byjus-Logo.png",
    rating: 4.5,
    range: "₹3000 - ₹8000",
    subject: "Mathematics",
    tags: ["Trending"],
    description: "Master mathematics with Byju's expert instructors.",
  },
  {
    name: "Vedantu - English Grammar Pro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Vedantulogo_orange.png",
    rating: 4.4,
    range: "₹2000 - ₹6000",
    subject: "English",
    tags: ["Popular"],
    description: "Improve English grammar skills for Class 9 and 10.",
  },
  {
    name: "Toppr - Physics Masterclass",
    logo: "https://play-lh.googleusercontent.com/L2SlZc8k1Jxl56RSj2kg0F7bdTNx-4bvt7aUREf2qsMX9fWnIyxeTuMDRhwim06F2Q",
    rating: 4.8,
    range: "₹4000 - ₹9000",
    subject: "Science",
    tags: ["Popular", "Trending"],
    description: "Learn physics concepts with interactive live sessions.",
  },
  {
    name: "Extramarks - Chemistry Essentials",
    logo: "https://store-images.s-microsoft.com/image/apps.5554.13881465264663516.59d40a51-ea1c-4b6c-90cc-22e255638339.02f8399a-9c5f-493c-a4c0-821f7d9b386b",
    rating: 4.6,
    range: "₹3500 - ₹7500",
    subject: "Science",
    tags: ["Trending"],
    description: "Detailed chemistry coaching covering all fundamentals.",
  },
  {
    name: "Khan Academy - Algebra Basics",
    logo: "https://assets.bitdegree.org/online-learning-platforms/storage/media/khan-academy-review-logo-big.o.png?tr=w-250",
    rating: 4.9,
    range: "₹0 (Free)",
    subject: "Mathematics",
    tags: ["Free", "Beginner Friendly"],
    description:
      "Learn the basics of algebra with Khan Academy's free courses.",
  },
  {
    name: "WhiteHat Jr - Coding for Kids",
    logo: "https://assets-global.website-files.com/61b9a0d531bc5ea62566a3be/626b83e83f4410d67c23ba22_WhiteHatJr%201.jpg",
    rating: 4.3,
    range: "₹5000 - ₹12000",
    subject: "Coding",
    tags: ["Popular", "Kids"],
    description: "Interactive coding classes designed specifically for kids.",
  },
  {
    name: "Simplilearn - Data Science Bootcamp",
    logo: "https://play-lh.googleusercontent.com/uphrWz_e_K_pZrPOmCR34A6grxPtva0kM8bhMSgdycrlxiBC7C_JzGtyJLn1mfrRLrg",
    rating: 4.6,
    range: "₹25000 - ₹50000",
    subject: "Data Science",
    tags: ["Advanced", "Professional"],
    description: "Comprehensive data science bootcamp for professionals.",
  },
  {
    name: "Coursera - Business Analytics",
    logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png?auto=format%2Ccompress&dpr=1",
    rating: 4.7,
    range: "₹5000 - ₹15000",
    subject: "Business",
    tags: ["Trending", "Professional"],
    description: "Learn business analytics from top universities on Coursera.",
  },
  {
    name: "Udemy - Web Development Bootcamp",
    logo: "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/c_fill/w_1280/element/17/172834_default-meta-image-v2.png",
    rating: 4.5,
    range: "₹499 - ₹1999",
    subject: "Web Development",
    tags: ["Affordable", "Trending"],
    description: "Master web development with this highly-rated Udemy course.",
  },
];

const CoachingCard = ({ coaching }) => {
  const navigate = useNavigate();

  return (
    <div className={cardClasses}>
      <img
        src={coaching.logo || "https://via.placeholder.com/150"}
        alt={`${coaching.name} Logo`}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{coaching.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{coaching.subject}</p>
        <p className="text-sm mb-3">{coaching.description}</p>
        <div className="flex flex-wrap">
          {coaching.tags.map((tag, index) => (
            <span key={index} className={tagClasses}>
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-blue-600 font-semibold">{coaching.range}</span>
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
          View Courses
        </button>
      </div>
    </div>
  );
};

export default Online;
