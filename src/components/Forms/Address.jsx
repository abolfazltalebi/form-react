import { useState } from "react";

function Address() {
  const [address, setAddress] = useState("");
  function handleChangeAddress(e) {
    const valueAddress = e.target.value;
    setAddress(valueAddress);
  }
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="Address">Address :</label>
      <input
        type="text"
        name="Address"
        id=""
        placeholder="Enter your Address"
        className={`p-2 rounded-xl shadow ${
          address.length > 5 ? "border-2 border-green-600" : "bg-white/80"
        }`}
        onChange={handleChangeAddress}
      />
      {address && (
        <p>
          {address.length == 0 ? (
            <span className="text-red-600 text-[12px]">
              please enter your name
            </span>
          ) : (
            <span className="text-green-600 text-[12px]">{address}</span>
          )}
        </p>
      )}
    </div>
  );
}

export default Address;
