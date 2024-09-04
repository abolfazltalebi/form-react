import { useState } from "react";
import imageForm from "../../../public/form-image.webp";
function Forms() {
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
  function changeName(e) {
    const value = e.target.value;
    setName(value);
  }
  return (
    <main className="bg-white max-w-6xl p-4 rounded-xl container mx-auto mt-[150px]">
      <h2 className="text-center text-4xl">Validation Forms</h2>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center "
        onSubmit={handleSubmit}
      >
        <div>
          <img src={imageForm} className="w-full h-auto " alt="From Image" />
        </div>
        <div className="flex flex-col gap-4 mt-16">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              name="name"
              value={name}
              id=""
              placeholder="Enter your name"
              className="p-2 rounded-xl shadow bg-white/80"
              onChange={changeName}
            />

            {name.length == 0 || name == "@ /" ? (
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-red-600"></div>
                <p className="text-[12px] text-red-600">
                  Please Enter Your Name
                </p>
              </div>
            ) : (
              <p className="text-[12px] text-green-900">
                thank you mr. <span className="span font-bold">{name}</span>{" "}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Number">Number :</label>
            <input
              type="text"
              name="Number"
              id=""
              placeholder="Enter your Number"
              className="p-2 rounded-xl shadow bg-white/80"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Email :</label>
            <input
              type="Email"
              name="Email"
              id=""
              placeholder="Enter your Email"
              className="p-2 rounded-xl shadow bg-white/80"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Address">Address :</label>
            <input
              type="text"
              name="Address"
              id=""
              placeholder="Enter your Address"
              className="p-2 rounded-xl shadow bg-white/80"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Zipcode">Zipcode :</label>
            <input
              type="text"
              name="Zipcode"
              id=""
              placeholder="Enter your Zipcode"
              className="p-2 rounded-xl shadow bg-white/80"
            />
          </div>
        </div>
        <div className="flex items-center justify-center my-6 col-span-4">
          <button className="bg-orange-600 px-12 py-3 rounded-xl text-white ">
            Send
          </button>
        </div>
      </form>
    </main>
  );
}

export default Forms;
