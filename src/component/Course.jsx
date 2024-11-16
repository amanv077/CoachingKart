/* eslint-disable react/prop-types */
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Tailwind CSS styling classes for reusable components
const sharedClasses = {
  card: "bg-white text-gray-800 p-4 md:p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl",
  button:
    "mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
  sectionTitle: "text-3xl font-bold mb-6 text-center text-gray-900",
  sectionContainer: "p-8 bg-gray-100",
  sectionContent: "max-w-6xl mx-auto flex flex-col md:flex-row items-center",
  image: "rounded-lg mb-4 h-48 w-full object-cover",
};

const HeroSection = () => (
  <section className="p-8 bg-blue-600 text-white">
    <div className={sharedClasses.sectionContent}>
      <div className="m-5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaTGLuPM8khcA5vxY5F9hsHL0fHvTW1_tJTQ&s"
          alt="Coaching Image"
          className={`${sharedClasses.image}`}
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-2">Excellence Coaching Center</h1>
        <p className="mb-4 text-lg">
          We provide top-notch coaching for competitive exams with experienced
          faculty and comprehensive study materials.
        </p>
        <div className="flex items-center">
          <span className="text-lg font-semibold">Rating:</span>
          <span className="ml-2 text-yellow-500">★★★★☆</span>
        </div>
      </div>
    </div>
  </section>
);

const CourseCard = ({
  title,
  teachers,
  subjects,
  price,
  startDate,
  duration,
  image,
  onEnroll,
}) => (
  <div className={`${sharedClasses.card} h-auto`}>
    <img
      src={image}
      alt="Course Image"
      className={`${sharedClasses.image} h-32`}
    />
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-sm mb-1">
      <strong>Teachers:</strong> {teachers}
    </p>
    <p className="text-sm mb-1">
      <strong>Subjects:</strong> {subjects}
    </p>
    <p className="text-sm mb-1">
      <strong>Price:</strong> ₹{price}
    </p>
    <p className="text-sm mb-1">
      <strong>Start Date:</strong> {startDate}
    </p>
    <p className="text-sm mb-1">
      <strong>Duration:</strong> {duration}
    </p>
    <button className={sharedClasses.button} onClick={onEnroll}>
      Enroll Now
    </button>
  </div>
);

const CoursesSection = ({ onEnroll }) => {
  const courses = [
    {
      title: "Advanced Mathematics",
      teachers: "John Doe, Jane Smith",
      subjects: "Algebra, Geometry, Calculus",
      price: 2500,
      startDate: "January 15, 2024",
      duration: "3 months",
      image:
        "https://i.pinimg.com/736x/6c/2d/40/6c2d40e51b303afa827ba31f73b48223.jpg",
    },
    {
      title: "Physics for Competitive Exams",
      teachers: "Alice Johnson, Mark Lee",
      subjects: "Mechanics, Thermodynamics",
      price: 3000,
      startDate: "February 10, 2024",
      duration: "4 months",
      image:
        "https://t3.ftcdn.net/jpg/02/08/71/98/360_F_208719890_PaMiwolEk5efWiJH9Z1ZQXqEw6AoC6OS.jpg",
    },
    {
      title: "Chemistry Essentials",
      teachers: "Michael Brown, Sarah Wilson",
      subjects: "Organic, Inorganic, Physical Chemistry",
      price: 2000,
      startDate: "March 5, 2024",
      duration: "2 months",
      image: "https://r2.erweima.ai/i/4fP8Fxl1St2EeMZLJGUb4A.png",
    },
    {
      title: "English Language Proficiency",
      teachers: "Robert White, Jennifer Scott",
      subjects: "Grammar, Vocabulary, Writing",
      price: 1500,
      startDate: "April 1, 2024",
      duration: "6 weeks",
      image:
        "https://i.pinimg.com/736x/3c/c0/c3/3cc0c34c35405b8b2c6ae7b5e9cbae9b.jpg",
    },
    // Additional courses
    {
      title: "Web Development Fundamentals",
      teachers: "Jane Doe, Tim Cook",
      subjects: "HTML, CSS, JavaScript",
      price: 2200,
      startDate: "May 20, 2024",
      duration: "3 months",
      image:
        "https://www.pngkey.com/png/detail/249-2496182_web-design-development-web-developer-logo-png.png",
    },
    {
      title: "Machine Learning Basics",
      teachers: "Robert Johnson, Emma Clark",
      subjects: "Data Science, Algorithms",
      price: 3500,
      startDate: "June 1, 2024",
      duration: "5 months",
      image:
        "https://www.pngitem.com/pimgs/m/346-3460443_machine-learning-course-near-me-machine-learning-logo.png",
    },
  ];

  return (
    <section className={sharedClasses.sectionContainer}>
      <h2 className={sharedClasses.sectionTitle}>Available Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            {...course}
            onEnroll={() => onEnroll(course)}
          />
        ))}
      </div>
    </section>
  );
};
const BuyNowPage = ({ course, onBack }) => {
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails({ ...studentDetails, [name]: value });
  };

  const totalAmount = course.price;

  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 via-blue-100 to-white">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Buy Now
      </h2>
      <div className="bg-white p-8 rounded-lg shadow-xl mb-8 max-w-lg mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {course.title}
        </h3>
        <p className="text-gray-600">
          <strong>Subjects:</strong> {course.subjects}
        </p>
        <p className="text-gray-600">
          <strong>Price:</strong> ₹{course.price}
        </p>
        <p className="text-gray-600">
          <strong>Duration:</strong> {course.duration}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Teachers:</strong> {course.teachers}
        </p>
        <button
          className="mt-4 text-blue-600 hover:underline focus:outline-none"
          onClick={onBack}
        >
          Back to Courses
        </button>
      </div>

      <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Student Details
      </h3>
      <form className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto space-y-6">
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={studentDetails.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={studentDetails.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="number"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="number"
            name="number"
            value={studentDetails.number}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold text-gray-800">
            Total Amount: ₹{totalAmount}
          </p>
          <button
            type="submit"
            className="py-3 px-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 transition duration-300"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

const App = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEnroll = (course) => {
    setSelectedCourse(course);
  };

  const handleBack = () => {
    setSelectedCourse(null);
  };

  return (
    <div>
      <Navbar />
      {!selectedCourse ? (
        <>
          <HeroSection />
          <CoursesSection onEnroll={handleEnroll} />
        </>
      ) : (
        <BuyNowPage course={selectedCourse} onBack={handleBack} />
      )}
      <Footer />
    </div>
  );
};

export default App;
