function Address() {
  return (
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
  );
}

export default Address;
