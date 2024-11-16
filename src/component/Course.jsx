/* eslint-disable react/prop-types */
import { useState } from "react";
import Navbar from "./Navbar";

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
          src="https://community.thriveglobal.com/wp-content/uploads/2017/09/coaching-2738523_1920.jpg"
          alt="Coaching Image"
          className={`${sharedClasses.image} `}
        />
      </div>
      <div className="">
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
  onEnroll,
}) => (
  <div className={`${sharedClasses.card} h-96`}>
    <img
      src="https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg"
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
    <p className="text-sm">
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
    },
    {
      title: "Physics for Competitive Exams",
      teachers: "Alice Johnson, Mark Lee",
      subjects: "Mechanics, Thermodynamics",
      price: 3000,
      startDate: "February 10, 2024",
      duration: "4 months",
    },
    {
      title: "Chemistry Essentials",
      teachers: "Michael Brown, Sarah Wilson",
      subjects: "Organic, Inorganic, Physical Chemistry",
      price: 2000,
      startDate: "March 5, 2024",
      duration: "2 months",
    },
    {
      title: "English Language Proficiency",
      teachers: "Robert White, Jennifer Scott",
      subjects: "Grammar, Vocabulary, Writing",
      price: 1500,
      startDate: "April 1, 2024",
      duration: "6 weeks",
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
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Buy Now</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-xl font-semibold">{course.title}</h3>
        <p>
          <strong>Subjects:</strong> {course.subjects}
        </p>
        <p>
          <strong>Price:</strong> ₹{course.price}
        </p>
        <p>
          <strong>Duration:</strong> {course.duration}
        </p>
        <p>
          <strong>Teachers:</strong> {course.teachers}
        </p>
        <button className="mt-4 text-blue-600 hover:underline" onClick={onBack}>
          Back
        </button>
      </div>

      <h3 className="text-2xl font-bold mb-4">Student Details</h3>
      <form className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={studentDetails.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={studentDetails.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="number">
            Phone Number
          </label>
          <input
            type="text"
            id="number"
            name="number"
            value={studentDetails.number}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">Total Amount: ₹{totalAmount}</p>
          <button type="submit" className={sharedClasses.button}>
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
    </div>
  );
};

export default App;
