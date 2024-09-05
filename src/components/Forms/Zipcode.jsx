
function Zipcode() {
  return (
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
  );
}

export default Zipcode;
