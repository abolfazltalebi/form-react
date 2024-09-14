import { useState } from "react";
import Buttons from "./components/form/Buttons";
import ImageForm from "./components/form/ImageForm";
import Input from "./components/Input";

function App() {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    zipcode: "",
  });

  // State for individual form fields
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipCode] = useState("");

  // State for error and info messages
  const [errorMessage, setErrorMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  const [errorMessageZip, setErrorMessageZip] = useState("");
  const [massage, setMassage] = useState("");

  // Field types for Input component
  const fieldTypes = {
    name: "text",
    email: "email",
    number: "number",
    address: "text",
    zipcode: "text",
  };

  // Handle input change for form data
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  // Handle name input change
  function handleNameChange(e) {
    const value = e.target.value;
    setNames(value);
  }

  // Handle email input change
  function handleChangeEmail(event) {
    const valueInput = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(valueInput);
    setIsEmail(
      emailRegex.test(valueInput) ? "" : "Invalid phone number (13 digits)"
    );
  }

  // Handle address input change
  function handleChangeAddress(e) {
    const valueAddress = e.target.value;
    setAddress(valueAddress);
  }

  // Handle number input change
  const handleNumberChange = (event) => {
    const value = event.target.value;
    const onlyDigitsRegex = /^\d*$/;
    if (!onlyDigitsRegex.test(value)) {
      setErrorMessage("Only digits are allowed");
      setInfoMessage("");
    } else {
      setNumber(value);
      setErrorMessage("");
      const remainingChars = 11 - value.length;
      if (remainingChars > 0) {
        setInfoMessage(
          `${remainingChars} ${remainingChars === 1 ? "digit" : "digits"}`
        );
      } else if (remainingChars === 0) {
        setInfoMessage("Valid number");
      } else {
        setInfoMessage("");
      }
    }
  };

  // Handle zipcode input change
  function handleZipCode(e) {
    const valueZipCode = e.target.value;
    const DigitsRegex = /^\d*$/;
    if (!DigitsRegex.test(valueZipCode)) {
      setErrorMessageZip("Only digits are allowed");
      setMassage("");
    } else {
      setZipCode(valueZipCode);
      setErrorMessageZip("");
      const remainingChars = 11 - valueZipCode.length;
      if (remainingChars > 0) {
        setMassage(`
          ${remainingChars} ${remainingChars === 1 ? "very good" : "good"}
          `);
      } else if (remainingChars === 0) {
        setMassage("Valid number");
      } else {
        setMassage("");
      }
    }
  }

  return (
    <main className="bg-white max-w-6xl p-4 rounded-xl container mx-6 md:mx-auto m-auto mt-[20px]">
      <h2 className="text-center text-4xl">Validation Forms</h2>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center px-2 "
        onSubmit={handleSubmit}
      >
        <div>
          <ImageForm />
        </div>
        <div className="flex flex-col gap-4 mt-16">
          {/* Username input */}
          <div>
            <Input
              label="userName:"
              type={fieldTypes.name}
              name="name"
              value={names}
              placeholder={`Enter your UserName`}
              onChange={handleNameChange}
              className={`p-2 shadow rounded-xl ${
                names.length > 5 ? "border-2 border-green-500" : "bg-white/80"
              }`}
            />
            {names && (
              <p>
                {names.length == 0 ? (
                  <span className="text-red-600 text-[12px]">
                    please enter your name
                  </span>
                ) : (
                  <span className="text-green-600 text-[12px]">
                    Thank you, {names.trim()}.
                  </span>
                )}
              </p>
            )}
          </div>
          {/* Email input */}
          <div>
            <Input
              label="email:"
              type={fieldTypes.email}
              name="email"
              value={email}
              placeholder={`Enter your email`}
              onChange={handleChangeEmail}
              className={`p-2 rounded-xl shadow bg-white/80 ${
                email.length > 12 ? "border-2 border-green-500" : "bg-white/80"
              }`}
            />
            {isEmail && !email.length > 12 && (
              <p className="text-[12px] text-green-600">
                {isEmail ? "Valid Email" : "Invalid Email"}
              </p>
            )}
          </div>
          {/* Address input */}
          <div>
            <Input
              label="addres:"
              type={fieldTypes.address}
              name="name"
              value={address}
              placeholder={`Enter your UserName`}
              onChange={handleChangeAddress}
              className={`p-2 rounded-xl shadow ${
                address.length > 5 ? "border-2 border-green-600" : "bg-white/80"
              }`}
            />
            {address && (
              <p>
                {address.length == 0 && (
                  <span className="text-red-600 text-[12px]">
                    please enter your address
                  </span>
                )}
                {address.length == 1 && (
                  <span className="text-green-600 text-[12px]">thanck you</span>
                )}
              </p>
            )}
          </div>
          {/* Number input */}
          <div>
            <Input
              label="number:"
              type={fieldTypes.number}
              name="number"
              value={number}
              onChange={handleNumberChange}
              placeholder="+9890000000"
              className={`p-2 rounded-xl shadow focus:outline outline-gray-300 ${
                number.length === 11 && !errorMessage
                  ? "border-2 border-green-500"
                  : "bg-white/80"
              }`}
            />
            {errorMessage && (
              <p className="text-[12px] text-red-600">{errorMessage}</p>
            )}
            {infoMessage && !errorMessage && (
              <p className="text-[12px] text-green-600">{infoMessage}</p>
            )}
          </div>
          {/* Zipcode input */}
          <div>
            <Input
              label="zipCode:"
              type={fieldTypes.zipcode}
              name="name"
              value={zipcode}
              placeholder={`Enter your zipcode`}
              onChange={handleZipCode}
              className={`p-2 rounded-xl shadow focus:outline outline-gray-300 ${
                zipcode.length === 11 && !errorMessage
                  ? "border-2 border-green-500"
                  : "bg-white/80"
              }`}
            />
            {errorMessageZip && (
              <p className="text-[12px] text-red-600">{errorMessageZip}</p>
            )}
            {massage && <p className="text-[12px] text-green-600">{massage}</p>}
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
