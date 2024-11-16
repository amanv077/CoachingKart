// Shared Tailwind CSS class strings
const inputClasses =
  "mt-1 block w-full p-2 border border-input rounded-md bg-background text-foreground";
const labelClasses = "block text-sm font-medium text-muted-foreground";
const containerClasses =
  "min-h-screen bg-background text-foreground flex flex-col";
const navLinkClasses = "hover:text-primary";

import Footer from "./Footer";
// Use the new Navbar component here
import Navbar from "./Navbar"; // Adjust the import path as needed

const FormInput = ({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
}) => (
  <div>
    <label htmlFor={id} className={labelClasses}>
      {label}
    </label>
    <input
      type={type}
      id={id}
      className={inputClasses}
      placeholder={placeholder}
      required={required}
    />
  </div>
);

const FormSelect = ({ id, label, options, required = false }) => (
  <div>
    <label htmlFor={id} className={labelClasses}>
      {label}
    </label>
    <select id={id} className={inputClasses} required={required}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const FormTextArea = ({ id, label, rows, placeholder, required = false }) => (
  <div>
    <label htmlFor={id} className={labelClasses}>
      {label}
    </label>
    <textarea
      id={id}
      className={inputClasses}
      rows={rows}
      placeholder={placeholder}
      required={required}
    ></textarea>
  </div>
);

const FormRadioGroup = ({ label, name, options, required = false }) => (
  <div>
    <span className={labelClasses}>{label}</span>
    <div className="mt-2 flex items-center space-x-4">
      {options.map((option) => (
        <label key={option.value} className="flex items-center">
          <input
            type="radio"
            name={name}
            value={option.value}
            className="form-radio text-primary"
            required={required}
          />
          <span className="ml-2 text-foreground">{option.label}</span>
        </label>
      ))}
    </div>
  </div>
);

const StudentProfileForm = () => (
  <div className="flex-grow flex items-center justify-center p-4">
    <div className="max-w-lg w-full bg-card p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-card-foreground">
        Create Student Profile
      </h1>
      <form className="space-y-4">
        <FormInput
          id="full-name"
          label="Full Name"
          placeholder="Enter your full name"
          required
        />
        <FormInput
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <FormInput
          id="phone"
          label="Phone Number"
          type="tel"
          placeholder="Enter your phone number"
          required
        />
        <FormInput id="dob" label="Date of Birth" type="date" required />
        <FormInput
          id="school-name"
          label="School Name"
          placeholder="Enter your school name"
          required
        />

        <FormSelect
          id="subject"
          label="Subject of Interest"
          options={[
            { value: "", label: "Select a subject" },
            { value: "math", label: "Mathematics" },
            { value: "science", label: "Science" },
            { value: "english", label: "English" },
            { value: "history", label: "History" },
          ]}
          required
        />

        <FormSelect
          id="course"
          label="Course"
          options={[
            { value: "", label: "Select a course" },
            { value: "basic", label: "Basic" },
            { value: "intermediate", label: "Intermediate" },
            { value: "advanced", label: "Advanced" },
          ]}
          required
        />

        <FormTextArea
          id="address"
          label="Address"
          rows="3"
          placeholder="Enter your address"
          required
        />

        <FormRadioGroup
          label="Preferred Coaching Mode"
          name="coaching-mode"
          options={[
            { value: "online", label: "Online" },
            { value: "offline", label: "Offline" },
          ]}
          required
        />

        <FormInput
          id="guardian-name"
          label="Guardian's Name"
          placeholder="Enter guardian's name"
          required
        />
        <FormInput
          id="emergency-contact"
          label="Emergency Contact"
          type="tel"
          placeholder="Enter emergency contact number"
          required
        />

        <div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/80"
          >
            Create Profile
          </button>
        </div>
      </form>
    </div>
  </div>
);

const Register = () => (
  <div className={containerClasses}>
    <Navbar /> {/* Use the new Navbar component here */}
    <StudentProfileForm />
    <Footer />
  </div>
);

export default Register;
