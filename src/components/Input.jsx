const Input = (inputs) => {
  const { label, type, name, value, onChange, placeholder } = inputs;
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-2">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border p-2 shadow rounded-xl bg-white/80 focus:outline outline-gray-300"
      />
    </div>
  );
};

export default Input;
