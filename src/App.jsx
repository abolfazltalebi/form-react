import { useState } from "react";
import Buttons from "./components/form/Buttons";
import ImageForm from "./components/form/ImageForm";
import Input from "./components/Input";

function App() {
  const fieldTypes = {
    name: "text",
    email: "email",
    password: "password",
    phone: "number",
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  function validateName(name) {
    let error = "";
    const invalidChars = /[^a-zA-Z0-9]/;
    if (name.length <= 5) {
      error = "Your username must be more than 5 characters";
    } else if (invalidChars.test(name)) {
      error = "The username should only contain letters and numbers.";
    }
    setErrors({ ...errors, name: error });
  }
  function validateEmail(email) {
    let error = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      error = "The email format is not valid";
    }
    setErrors({ ...errors, email: error });
  }
  function validatePassword(password) {
    let error = "";
    let strength = "low";
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongPasswordRegex.test(password)) {
      error =
        "Password must be at least 8 characters long, include uppercase, lowercase letters, numbers, and special characters.";
    } else {
      strength = "strong";
    }
    setErrors({ ...errors, password: error });
  }
  function validatePhone(phone) {
    let error = "";
    const phoneRegex = /^[0-9]{10,13}$/;
    if (!phoneRegex.test(phone)) {
      error = "Phone number must be 10-13 digits";
    }
    setErrors({ ...errors, phone: error });
  }
  function handleChangeName(e) {
    const { value } = e.target;
    setFormData({ ...formData, name: value });
    validateName(value);
  }
  function handleChangeEmail(e) {
    const { value } = e.target;
    setFormData({ ...formData, email: value });
    validateEmail(value);
  }
  function handleChangePassword(e) {
    const { value } = e.target;
    setFormData({ ...formData, password: value });
    validatePassword(value);
  }
  function handleChangePhone(e) {
    const { value } = e.target;
    setFormData({ ...formData, phone: value });
    validatePhone(value);
  }
  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    const hasErrors = Object.values(errors).some((error) => error !== "");
    const allFieldsFilled = Object.values(formData).every(
      (field) => field !== ""
    );
    if (!hasErrors && allFieldsFilled) {
      setFormSubmitted(true);
    } else {
      setFormSubmitted(false);
      alert("Please fill all fields correctly before submitting.");
    }
  }
  return (
    <main className="bg-white max-w-6xl p-4 rounded-xl container mx-6 md:mx-auto m-auto mt-[5rem]">
      <h2 className="text-center text-4xl">Validation Forms</h2>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center px-2"
        onSubmit={handleSubmit}
      >
        <div>
          <ImageForm />
        </div>
        <div className="flex flex-col gap-4 mt-16">
          {/* Username */}
          <div>
            <Input
              label="Username:"
              type={fieldTypes.name}
              name="name"
              value={formData.name}
              placeholder="Enter your username"
              onChange={handleChangeName}
              className={`p-2 shadow rounded-xl ${
                formData.name.length > 5 && !errors.name
                  ? "border-2 border-green-500"
                  : "bg-white/80 border-2 border-gray-200"
              }`}
            />
            {errors.name && (
              <p className="text-red-700 text-sm mt-2 text-[12px]">
                {errors.name}
              </p>
            )}
          </div>
          {/* email */}
          <div>
            <Input
              label="Email:"
              type={fieldTypes.email}
              name="name"
              value={formData.email}
              placeholder="Enter your username"
              onChange={handleChangeEmail}
              className={`p-2 shadow rounded-xl ${
                !errors.email && formData.email
                  ? "border-2 border-green-500"
                  : "bg-white/80 border-2  border-gray-200"
              }`}
            />
            {errors.email && (
              <p className="text-red-700 text-sm mt-2 text-[12px] ">
                {errors.email}
              </p>
            )}
          </div>
          {/* password */}
          <div>
            <Input
              label="Password:"
              type={fieldTypes.password}
              name="name"
              value={formData.password}
              placeholder="Enter your username"
              onChange={handleChangePassword}
              className={`p-2 shadow rounded-xl ${
                !errors.password && formData.password
                  ? "border-2 border-green-500"
                  : "bg-white/80 border-2  border-gray-200"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">{errors.password}</p>
            )}
          </div>
          {/* phone */}
          <div>
            <Input
              label="Phone:"
              type={fieldTypes.phone}
              name="name"
              value={formData.phone}
              placeholder="Enter your username"
              onChange={handleChangePhone}
              className={`p-2 shadow rounded-xl ${
                !errors.phone && formData.phone
                  ? "border-2 border-green-500"
                  : "bg-white/80 border-2  border-gray-200"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
            )}
          </div>
        </div>
        {/* Submit button */}
        <div className="flex flex-col items-center gap-6 justify-center my-6 col-span-4">
          <Buttons />
          {formSubmitted && (
            <p className="text-green-600 text-lg">
              Form submitted successfully!
            </p>
          )}
        </div>
      </form>
    </main>
  );
}

export default App;
