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
    zipecode: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
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
          {Object.keys(formData).map((item) => {
            return (
              <Input
                key={item}
                label={item}
                type={item === "name" ? "text" : item}
                name={item}
                value={formData[item]}
                onChange={handleInputChange}
                placeholder={`enter your ${item}`}
              />
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-6 justify-center my-6 col-span-4">
          <Buttons />
        </div>
      </form>
    </main>
  );
}

export default App;
