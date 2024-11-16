// EnrolledClasses.js
import { useState } from "react";
import Navbar from "./Navbar";

const Enrolled = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Course data with more entries
  const courses = [
    {
      id: 1,
      name: "React Basics",
      duration: "3 hours",
      coachingName: "Tech Academy",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Advanced CSS",
      duration: "2 hours",
      coachingName: "Design School",
      rating: 4.7,
    },
    {
      id: 3,
      name: "JavaScript Essentials",
      duration: "5 hours",
      coachingName: "Code Masters",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Python for Beginners",
      duration: "4 hours",
      coachingName: "Tech Academy",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Data Structures",
      duration: "6 hours",
      coachingName: "Code Masters",
      rating: 4.9,
    },
    {
      id: 6,
      name: "UI/UX Fundamentals",
      duration: "3.5 hours",
      coachingName: "Design School",
      rating: 4.7,
    },
  ];

  // Filter courses based on search term
  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to open modal with selected course
  const handleWatchNow = (course) => {
    setSelectedCourse(course);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Enrolled Demo Coaching Classes
        </h2>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search courses..."
            className="p-2 border border-gray-300 rounded-lg w-1/2"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Course Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {course.name}
              </h3>
              <p className="text-gray-500">Duration: {course.duration}</p>
              <p className="text-gray-500">
                Coaching Name: {course.coachingName}
              </p>
              <p className="text-yellow-500 font-bold">
                Rating: {course.rating} ⭐
              </p>
              <button
                onClick={() => handleWatchNow(course)}
                className="bg-blue-500 hover:bg-blue-600 text-white mt-4 px-4 py-2 rounded-lg w-full"
              >
                Watch Now
              </button>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedCourse && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg overflow-hidden w-11/12 md:w-2/3 lg:w-1/2 shadow-lg">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-lg font-semibold">{selectedCourse.name}</h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &#10005;
                </button>
              </div>
              <div className="p-4">
                {/* Responsive Video Wrapper */}
                <div className="relative w-full h-0 pb-[56.25%]">
                  {" "}
                  {/* 16:9 Aspect Ratio */}
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/SEO9YPzSH-0?si=Hmeiu-uup4syL7i3"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Enrolled;
