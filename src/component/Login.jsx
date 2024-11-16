/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Shared Tailwind CSS class strings
const containerClasses = "flex items-center justify-between";
const textMutedClasses = "text-sm text-gray-500";
const buttonClasses =
  "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-4 py-2 rounded-lg shadow-md";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Navigate to Mode page on form submission
    navigate("/mode");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-lg w-full space-y-8 p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <Header />
          <LoginForm onSubmit={handleSubmit} />
          <RoleButtons />
          <SignUpPrompt />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Header = () => (
  <div className="text-center">
    <h2 className="text-4xl font-bold text-gray-800">Welcome Back</h2>
    <p className={`mt-2 ${textMutedClasses}`}>
      Login to access your personalized dashboard
    </p>
  </div>
);

const LoginForm = ({ onSubmit }) => (
  <form className="mt-8 space-y-6" onSubmit={onSubmit}>
    <div className="space-y-4">
      <InputField
        id="email"
        type="email"
        placeholder="We are on Early Stage Skip Login"
      />
      <InputField
        id="password"
        type="password"
        placeholder="Just Click On Login "
      />
    </div>
    <div className={containerClasses}>
      <RememberMe />
      <ForgotPassword />
    </div>
    <SubmitButton onClick={onSubmit} />
  </form>
);

const InputField = ({ id, type, placeholder }) => (
  <div>
    <label htmlFor={id} className="sr-only">
      {placeholder}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      autoComplete={id}
      required
      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      placeholder={placeholder}
    />
  </div>
);

const RememberMe = () => (
  <div className="flex items-center">
    <input
      id="remember-me"
      name="remember-me"
      type="checkbox"
      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
    />
    <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
      Remember me
    </label>
  </div>
);

const ForgotPassword = () => (
  <div className="text-sm">
    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
      Forgot password?
    </a>
  </div>
);

const SubmitButton = ({ onClick }) => (
  <button
    type="submit"
    className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    onClick={onClick}
  >
    Sign In
  </button>
);

const RoleButtons = () => (
  <div className="mt-6">
    <p className={`text-center ${textMutedClasses}`}>Or login as:</p>
    <div className="flex justify-center space-x-4 mt-4 flex-wrap">
      <button className={buttonClasses}>Student</button>
      <button className={buttonClasses}>Admin</button>
      <button className={buttonClasses}>Coaching</button>
    </div>
  </div>
);

const SignUpPrompt = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="mt-6 text-center">
      <p className={textMutedClasses}>
        Don’t have an account?{" "}
        <button
          onClick={handleSignUp}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Sign up now
        </button>
      </p>
    </div>
  );
};

export default Login;
