import Name from "./Name";
import Number from "./Number";
import Email from "./Email";
import Address from "./address";
import Zipcode from "./Zipcode";
import Buttons from "./Buttons";
import ImageForm from "./ImageForm";
function Forms() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <main className="bg-white max-w-6xl p-4 rounded-xl container mx-auto mt-[20px]">
      <h2 className="text-center text-4xl">Validation Forms</h2>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center "
        onSubmit={handleSubmit}
      >
        <ImageForm />
        <div className="flex flex-col gap-4 mt-16">
          <Name />
          <Number />
          <Email />
          <Address />
          <Zipcode />
        </div>
        <Buttons />
        
      </form>
    </main>
  );
}

export default Forms;
