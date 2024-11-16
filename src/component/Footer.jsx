const Footer = () => {
  return (
    <div className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto text-gray-900 py-10 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-3">
            Download the Coaching~Kart App
          </h3>
          <p className="text-lg text-gray-600">
            Find the right class, faster and easier!
          </p>

          {/* Store Buttons */}
          <div className="flex justify-center my-10 space-x-4">
            {/* Google Play Store */}
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 w-56 shadow-sm hover:shadow-md transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                alt="Google Play Store"
                className="w-8 md:w-10"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-600">Download on</p>
                <p className="text-sm md:text-base font-medium">
                  Google Play Store
                </p>
              </div>
            </div>

            {/* Apple Store */}
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 w-56 shadow-sm hover:shadow-md transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                alt="Apple Store"
                className="w-8 md:w-10"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-600">Download on</p>
                <p className="text-sm md:text-base font-medium">Apple Store</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-200 pt-6 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-600">
          <p className="order-2 md:order-1 mt-6 md:mt-0 text-center md:text-left">
            &copy; Coaching~Kart, {new Date().getFullYear()} All rights
            reserved.
          </p>
          <div className="order-1 md:order-2 space-x-4 text-center">
            <a href="#" className="hover:underline">
              About Us
            </a>
            <a href="#" className="border-l pl-4 hover:underline">
              Contact Us
            </a>
            <a href="#" className="border-l pl-4 hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
