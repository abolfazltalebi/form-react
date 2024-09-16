import { useState } from "react";
import Buttons from "./components/form/Buttons";
import ImageForm from "./components/form/ImageForm";
import Input from "./components/Input";

function App() {
  // State for individual form fields
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    isEmailValid: true,
    number: "",
    address: "",
    zipcode: "",
    errorMessage: "",
    infoMessage: "",
    errorMessageZip: "",
    message: "",
  });

  // Function to update form state
  const updateFormState = (field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Field types for Input component
  const fieldTypes = {
    name: "text",
    email: "email",
    number: "tel",
    address: "text",
    zipcode: "text",
  };

  // Handle input change for form data
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    updateFormState(name, value);
  }

  // Handle form submission


  // Handle email input change
  function handleChangeEmail(event) {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    updateFormState("email", value);
    updateFormState("isEmailValid", emailRegex.test(value));
  }

  // Handle number input change
  const handleNumberChange = (event) => {
    const value = event.target.value;
    const onlyDigitsRegex = /^\d*$/;
    if (!onlyDigitsRegex.test(value)) {
      updateFormState("errorMessage", "Only numbers are allowed");
      updateFormState("infoMessage", "");
    } else {
      updateFormState("number", value);
      updateFormState("errorMessage", "");
      const remainingChars = 11 - value.length;
      if (remainingChars > 0) {
        updateFormState("infoMessage", `${remainingChars} more digits`);
      } else if (remainingChars === 0) {
        updateFormState("infoMessage", "Valid number");
      } else {
        updateFormState("infoMessage", "");
      }
    }
  };

  // Handle zipcode input change
  function handleZipCode(e) {
    const value = e.target.value;
    const digitsRegex = /^\d*$/;
    if (!digitsRegex.test(value)) {
      updateFormState("errorMessageZip", "Only numbers are allowed");
      updateFormState("message", "");
    } else {
      updateFormState("zipcode", value);
      updateFormState("errorMessageZip", "");
      const remainingChars = 10 - value.length;
      if (remainingChars > 0) {
        updateFormState("message", `${remainingChars} more digits`);
      } else if (remainingChars === 0) {
        updateFormState("message", "Valid postal code");
      } else {
        updateFormState("message", "");
      }
    }
  }
  return (
    <main className="bg-white max-w-6xl p-4 rounded-xl container mx-6 md:mx-auto m-auto mt-[5rem]">
      <h2 className="text-center text-4xl">Validation Forms</h2>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center px-2"
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
              value={formState.name}
              placeholder="Enter your username"
              onChange={handleInputChange}
              className={`p-2 shadow rounded-xl ${
                formState.name.length > 5
                  ? "border-2 border-green-500"
                  : "bg-white/80"
              }`}
            />
            {formState.name && (
              <p>
                {formState.name.length === 0 ? (
                  <span className="text-red-600 text-[12px]">
                    Please enter your name
                  </span>
                ) : (
                  <span className="text-green-600 text-[12px]">
                    Thank you, {formState.name.trim()}.
                  </span>
                )}
              </p>
            )}
          </div>
          {/* Email */}
          <div>
            <Input
              label="Email:"
              type={fieldTypes.email}
              name="email"
              value={formState.email}
              placeholder="Enter your email"
              onChange={handleChangeEmail}
              className={`p-2 rounded-xl shadow bg-white/80 ${
                formState.email.length > 12
                  ? "border-2 border-green-500"
                  : "bg-white/80"
              }`}
            />
            {formState.email && (
              <p
                className={`text-[12px] ${
                  formState.isEmailValid ? "text-green-600" : "text-red-500"
                }`}
              >
                {formState.isEmailValid ? "Valid email" : "Invalid email"}
              </p>
            )}
          </div>
          {/* Address */}
          <div>
            <Input
              label="Address:"
              type={fieldTypes.address}
              name="address"
              value={formState.address}
              placeholder="Enter your address"
              onChange={handleInputChange}
              className={`p-2 rounded-xl shadow ${
                formState.address.length > 5
                  ? "border-2 border-green-600"
                  : "bg-white/80"
              }`}
            />
            {formState.address && (
              <p>
                {formState.address.length === 0 ? (
                  <span className="text-red-600 text-[12px]">
                    Please enter your address
                  </span>
                ) : (
                  <span className="text-green-600 text-[12px]">Thank you</span>
                )}
              </p>
            )}
          </div>
          {/* Phone number */}
          <div>
            <Input
              label="Phone number:"
              type={fieldTypes.number}
              name="number"
              value={formState.number}
              onChange={handleNumberChange}
              placeholder="09123456789"
              className={`p-2 rounded-xl shadow focus:outline outline-gray-300 ${
                formState.number.length === 11 && !formState.errorMessage
                  ? "border-2 border-green-500"
                  : "bg-white/80"
              }`}
            />
            {formState.errorMessage && (
              <p className="text-[12px] text-red-600">
                {formState.errorMessage}
              </p>
            )}
            {formState.infoMessage && !formState.errorMessage && (
              <p className="text-[12px] text-green-600">
                {formState.infoMessage}
              </p>
            )}
          </div>
          {/* Postal code */}
          <div>
            <Input
              label="Postal code:"
              type={fieldTypes.zipcode}
              name="zipcode"
              value={formState.zipcode}
              placeholder="Enter your postal code"
              onChange={handleZipCode}
              className={`p-2 rounded-xl shadow focus:outline outline-gray-300 ${
                formState.zipcode.length === 10 && !formState.errorMessageZip
                  ? "border-2 border-green-500"
                  : "bg-white/80"
              }`}
            />
            {formState.errorMessageZip && (
              <p className="text-[12px] text-red-600">
                {formState.errorMessageZip}
              </p>
            )}
            {formState.message && (
              <p className="text-[12px] text-green-600">{formState.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 justify-center my-6 col-span-4">
          <Buttons />
        </div>
      </form>
    </main>
  );
}

export default App;
