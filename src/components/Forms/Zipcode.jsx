import { useState } from "react";

function Zipcode() {
  const [zipcode, setZipCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [massage, setMassage] = useState("");
  function handleZipCode(e) {
    const valueZipCode = e.target.value;
    const DigitsRegex = /^\d*$/;
    if (!DigitsRegex.test(valueZipCode)) {
      setErrorMessage("Only digits are allowed");
      setMassage("");
    } else {
      setZipCode(valueZipCode);
      setErrorMessage("");
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
    <div className="flex flex-col gap-2">
      <label htmlFor="Zipcode">Zipcode :</label>
      <input
        type="text"
        name="Zipcode"
        id=""
        placeholder="Enter your Zipcode"
        className={`p-2 rounded-xl shadow focus:outline outline-gray-300 ${
          zipcode.length === 11 && !errorMessage
            ? "border-2 border-green-500"
            : "bg-white/80"
        }`}
        onChange={handleZipCode}
      />
      {errorMessage && (
        <p className="text-[12px] text-red-600">{errorMessage}</p>
      )}
      {massage  && (
        <p className="text-[12px] text-green-600">{massage}</p>
      )}
    </div>
  );
}

export default Zipcode;
