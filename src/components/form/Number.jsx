import { useState } from "react";

function Number() {
  const [number, setNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");

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

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="Number">Number:</label>
      <input
        type="text"
        name="Number"
        id="numberInput"
        value={number}
        placeholder="+9890000000"
        className={`p-2 rounded-xl shadow focus:outline outline-gray-300 ${
          number.length === 11 && !errorMessage
            ? "border-2 border-green-500"
            : "bg-white/80"
        }`}
        onChange={handleNumberChange}
      />

    
    </div>
  );
}

export default Number;
