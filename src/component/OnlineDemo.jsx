import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaCheckCircle, FaPhoneAlt, FaRegLightbulb } from "react-icons/fa"; // Importing icons

const OnlineDemo = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-8 px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Take a Demo Before Your Decision
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Discover how our course can benefit you with a short demo. Make an
            informed decision before enrolling! Get a sneak peek at what you’ll
            be learning and how we help you succeed.
          </p>
          <p className="text-lg text-blue-600 font-semibold mb-6">
            Ready to take the first step toward your future? Watch our demo now!
          </p>
        </div>

        {/* Demo Video Section */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-4xl aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/SEO9YPzSH-0?si=AhxaV_7ytwcEg3-T"
              title="Course Demo"
              className="w-full h-full rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Why Choose Our Course?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Our online courses are designed with your success in mind. Join us
            to unlock new opportunities, with personalized instruction, a
            flexible schedule, and high-quality content tailored to your needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Cards */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-left">
              <FaCheckCircle className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Expert-Led Instruction
              </h3>
              <p className="text-gray-600">
                Learn from seasoned experts with real-world experience. Our
                instructors are committed to your learning journey.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-left">
              <FaPhoneAlt className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Whether you need help with coursework or technical support,
                we're here for you around the clock.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-left">
              <FaRegLightbulb className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Interactive Learning
              </h3>
              <p className="text-gray-600">
                Engage with interactive modules, quizzes, and practical
                assignments to enhance your understanding.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Our students love the practical and interactive approach to
            learning. Here's what they have to say:
          </p>

          <div className="flex justify-center gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-left">
              <p className="text-gray-600 italic mb-4">
                "This course changed my life! The instructors were top-notch,
                and I gained skills I can use immediately."
              </p>
              <p className="font-semibold text-gray-800">John D.</p>
              <p className="text-gray-500">Software Engineer</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-left">
              <p className="text-gray-600 italic mb-4">
                "The flexibility of online learning fit perfectly with my
                schedule. The content was engaging and easy to follow."
              </p>
              <p className="font-semibold text-gray-800">Sarah W.</p>
              <p className="text-gray-500">Digital Marketer</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mb-12">
          <Link
            to="/enrolled"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Back to Enroll Page
          </Link>

          <button
            onClick={() => alert("Support is available! at 6260546770")}
            className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
          >
            Get Support
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 mb-8">
          <p>&copy; 2024 Your Coaching Center. All rights reserved.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OnlineDemo;
