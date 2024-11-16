import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Import the logo

const navigation = [
  { name: "Home", to: "/mode", current: true },
  { name: "Already Enrolled", to: "/enrolled", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/"); // Route to login page
  };

  // Determine if the current path should hide the Sign Out button
  const hideSignOut =
    location.pathname === "/" || location.pathname === "/register";

  return (
    <Disclosure as="nav" className="bg-gray-50 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
            {/* Logo with Link */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => navigate("/mode")}
            >
              <img src={logo} alt="Coaching Logo" className="h-16 w-auto " />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    location.pathname === item.to
                      ? "text-black font-semibold"
                      : "text-gray-600 hover:text-black hover:underline",
                    "rounded-md px-3 py-2 text-sm font-medium transition duration-300"
                  )}
                  aria-current={
                    location.pathname === item.to ? "page" : undefined
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Sign Out Button (conditionally render) */}
          {!hideSignOut && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
              <button
                onClick={handleSignOut}
                className="bg-red-500 text-white rounded-md px-4 py-2 text-sm font-semibold hover:bg-red-600 transition duration-300"
              >
                Sign Out
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </Disclosure.Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as={Link}
              to={item.to}
              className={classNames(
                location.pathname === item.to
                  ? "bg-gray-700 text-white"
                  : "text-gray-600 hover:bg-gray-300 hover:text-black",
                "block rounded-md px-3 py-2 text-base font-medium transition duration-300"
              )}
              aria-current={location.pathname === item.to ? "page" : undefined}
            >
              {item.name}
            </Disclosure.Button>
          ))}
          {/* Sign Out Button for Mobile (conditionally render) */}
          {!hideSignOut && (
            <Disclosure.Button
              as="button"
              onClick={handleSignOut}
              className="w-full text-left bg-red-500 text-white block rounded-md px-4 py-2 text-base font-medium hover:bg-red-600 transition duration-300"
            >
              Sign Out
            </Disclosure.Button>
          )}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
