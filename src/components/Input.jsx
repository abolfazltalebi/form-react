const Input = (inputs) => {
  const { label, type, name, value, onChange, placeholder,className } = inputs;
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
        className={className}
      />
    </div>
  );
};

export default Input;
