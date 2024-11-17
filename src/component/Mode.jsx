import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <HeroSection />
      <SupportSection />
      <CourseFeatures />
      <Testimonials />
      <FloatingAnimations />
      <Footer />
    </div>
  );
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section bg-gray-50 text-black p-16 text-center rounded-lg shadow-lg">
      <h1 className="text-5xl font-extrabold mb-4">
        Empower Your Learning Journey
      </h1>
      <p className="text-lg mb-6">
        Discover the best coaching tailored to your needs. Choose from online,
        offline, or hybrid options and unlock your full potential with our
        expert guidance.
      </p>
      <div className="hero-buttons flex justify-center gap-6">
        <button
          className="bg-blue-800 hover:bg-blue-900 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300"
          onClick={() => navigate("/online")}
        >
          Explore Online Coaching
        </button>
        <button
          className="bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300"
          onClick={() => navigate("/offline")}
        >
          Explore Offline Coaching
        </button>
        <button
          className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-lg hover:bg-white hover:text-blue-800 transition duration-300"
          onClick={() => navigate("/enrolled")}
        >
          View Enrolled Courses
        </button>
      </div>
    </section>
  );
};

const SupportSection = () => (
  <section className="support-section bg-gray-100 py-16 text-center">
    <h2 className="text-3xl font-semibold mb-6">
      Need Help? We are Here For You
    </h2>
    <p className="text-lg mb-4 text-gray-700">
      Our dedicated support team is always ready to assist you. Whether you have
      questions about course content, enrollment, or technical issues, we're
      just a message away!
    </p>
    <button
      className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      onClick={() => alert("Support is available!")}
    >
      Contact Support
    </button>
  </section>
);

const CourseFeatures = () => (
  <section className="course-features bg-white py-16 text-center">
    <h2 className="text-3xl font-semibold mb-6">Why Choose Our Courses?</h2>
    <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      <div className="feature-card p-6 bg-blue-50 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
        <p className="text-gray-700">
          Learn from the best in the field with experienced and certified
          instructors.
        </p>
      </div>
      <div className="feature-card p-6 bg-blue-50 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Flexible Schedules</h3>
        <p className="text-gray-700">
          Study at your own pace with flexible schedules for both online and
          offline courses.
        </p>
      </div>
      <div className="feature-card p-6 bg-blue-50 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Interactive Learning</h3>
        <p className="text-gray-700">
          Engage with interactive assignments, quizzes, and real-time
          discussions to enhance your learning.
        </p>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="testimonials bg-gray-50 py-16 text-center">
    <h2 className="text-3xl font-semibold mb-6">What Our Students Say</h2>
    <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      <div className="testimonial-card p-6 bg-white rounded-lg shadow-lg">
        <p className="text-lg mb-4">
          "The coaching was outstanding! The instructors were knowledgeable, and
          the course content was well-organized."
        </p>
        <p className="font-semibold">Jane Doe</p>
        <p className="text-gray-600">Business Analyst</p>
      </div>
      <div className="testimonial-card p-6 bg-white rounded-lg shadow-lg">
        <p className="text-lg mb-4">
          "I loved the flexibility of online learning. I could study at my own
          pace and still interact with the instructors."
        </p>
        <p className="font-semibold">John Smith</p>
        <p className="text-gray-600">Software Developer</p>
      </div>
      <div className="testimonial-card p-6 bg-white rounded-lg shadow-lg">
        <p className="text-lg mb-4">
          "An excellent learning experience! The support team was always ready
          to help with any questions I had."
        </p>
        <p className="font-semibold">Sara Lee</p>
        <p className="text-gray-600">Marketing Specialist</p>
      </div>
    </div>
  </section>
);

const FloatingAnimations = () => (
  <div className="floating-animations">
    {/* Book */}
    <img
      src="https://cdn-icons-png.flaticon.com/512/484/484560.png"
      alt="Book"
      className="animate-floating"
      style={{ position: "absolute", top: "15%", left: "10%", width: "50px" }}
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
