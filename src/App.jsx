import Buttons from "./components/form/Buttons";
import ImageForm from "./components/form/ImageForm";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    zipcode: "",
  });
  const [number, setNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  const fieldTypes = {
    name: "text",
    email: "email",
    password: "password",
    address: "text",
    zipcode: "text",
  };
  // handle input change
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  // handle submit
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  // handle number


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
          {Object.keys(formData).map((item) => (
            <Input
              key={item}
              label={item}
              type={fieldTypes[item]}
              name={item}
              value={formData[item]}
              onChange={handleInputChange}
              placeholder={`Enter your ${item}`}
              number={number}
              errorMessage={errorMessage}
              infoMessage={infoMessage}
              
            />
          ))}
        </div>
        <div className="flex flex-col items-center gap-6 justify-center my-6 col-span-4">
          <Buttons />
        </div>
      </form>
    </main>
  );
}

export default App;
