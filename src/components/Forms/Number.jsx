import { useState } from "react";

function Number() {
  const [number, setNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNumberChange = (event) => {
    const value = event.target.value;
    const phoneNumberRegex = /^\d{13}$/;
    setNumber(value);
    setErrorMessage(
      phoneNumberRegex.test(value) ? "" : "Invalid phone number (13 digits)"
    );
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
        className={`p-2 rounded-xl shadow ${
          number.length === 13 ? "border-2 border-green-500" : "bg-white/80"
        }`}
        onChange={handleNumberChange}
      />
      {errorMessage  && number.length>0 (
        <p className="text-[12px] text-green-600">{errorMessage}</p>
      )}
    </div>
  );
}

export default Number;
