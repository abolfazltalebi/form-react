import { useState } from "react";

function Name() {
  const [names, setNames] = useState("");
  function handleNameChange(e) {
    const value = e.target.value;
    setNames(value);
  }
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        value={names}
        id="nameInput"
        name="name"
        placeholder="Enter your name"
        className={`p-2 shadow rounded-xl ${
          names.length > 5 ? "border-2 border-green-500" : "bg-white/80"
        }`}
        onChange={handleNameChange}
        required
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
  );
}

export default Name;
