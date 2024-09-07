import { useState } from "react";

function Email() {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const handleChangeEmail = (event) => {
    const valueInput = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(valueInput);
    setIsEmail(
      emailRegex.test(valueInput) ? "" : "Invalid phone number (13 digits)"
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="name">Email :</label>
      <input
        type="email"
        name="Email"
        id="emailInput"
        value={email}
        placeholder="Enter your Email"
        className={`p-2 rounded-xl shadow bg-white/80 ${
          email.length > 12 ? "border-2 border-green-500" : "bg-white/80"
        }`}
        onChange={handleChangeEmail}
      />
      {isEmail && !email.length > 12 && (
        <p className="text-[12px] text-green-600">
          {isEmail ? "Valid Email" : "Invalid Email"}
        </p>
      )}
    </div>
  );
}

export default Email;
