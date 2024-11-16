import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Ensure Register page exists and is set up in routing

// Shared Tailwind CSS class strings
const containerClasses = "flex items-center justify-center";
const textMutedClasses = "text-sm text-gray-500";
const buttonClasses =
  "bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded-md";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Navigate to Mode page on form submission
    navigate("/mode");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar /> {/* Insert Navbar here */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-lg">
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
    <h2 className="text-3xl font-extrabold text-gray-800">
      Login To CoachingKart
    </h2>
    <p className={`mt-2 ${textMutedClasses}`}>Choose your role to login</p>
  </div>
);

const LoginForm = ({ onSubmit }) => (
  <form className="mt-8 space-y-6" onSubmit={onSubmit}>
    <input type="hidden" name="remember" value="true" />
    <div className="rounded-md shadow-sm -space-y-px">
      <InputField id="email" type="email" placeholder="Email address" />
      <InputField id="password" type="password" placeholder="Password" />
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
      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      placeholder={placeholder}
    />
  </div>
);

const RememberMe = () => (
  <div className={containerClasses}>
    <input
      id="remember-me"
      name="remember-me"
      type="checkbox"
      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
    />
    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-500">
      Remember me
    </label>
  </div>
);

const ForgotPassword = () => (
  <div className="text-sm">
    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
      Forgot your password?
    </a>
  </div>
);

const SubmitButton = ({ onClick }) => (
  <div>
    <button
      type="submit"
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={onClick}
    >
      Sign in
    </button>
  </div>
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
  const navigate = useNavigate(); // Use the navigate hook here

  const handleSignUp = () => {
    navigate("register"); // Navigate to /register on click
  };

  return (
    <div className="mt-6 text-center">
      <p className={textMutedClasses}>
        Don't have an account?{" "}
        <button
          onClick={handleSignUp}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Sign up
        </button>
      </p>
    </div>
  );
};

export default Login;
