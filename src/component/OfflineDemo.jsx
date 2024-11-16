/* eslint-disable react/prop-types */
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const OfflineDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you! Our team will contact you shortly to arrange your offline demo."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      preferredDate: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-6">
          Book Your Offline Demo Session
        </h1>
        <p className="text-lg text-center text-gray-700 mb-10">
          Experience the Coaching-Kart difference firsthand. Fill out the form
          below, and our team will arrange a personalized offline demo session
          for you at your convenience.
        </p>

        {/* Facilities Section */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            Facilities You will Receive
          </h2>
          <ul className="text-lg text-gray-700 space-y-3 list-disc list-inside">
            <li>Expert guidance from experienced instructors.</li>
            <li>Access to a fully equipped learning environment.</li>
            <li>Complimentary course materials and study guides.</li>
            <li>Hands-on practice sessions tailored to your needs.</li>
            <li>Post-demo career consultation and roadmap planning.</li>
          </ul>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow-xl rounded-lg mb-12"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Fill Out Your Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Preferred Date Field */}
            <div>
              <label
                htmlFor="preferredDate"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Preferred Demo Date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Google Map Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Visit Us at Our Center
          </h2>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0867911131484!2d-122.4012716846825!3d37.7850910797589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064fdbf4b5d%3A0x6c798df6f1f7ad4f!2sGoogle!5e0!3m2!1sen!2sus!4v1681329486293!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OfflineDemo;
