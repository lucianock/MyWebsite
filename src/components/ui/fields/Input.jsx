const Input = ({
  type = "text",
  value = "",
  handleChange = () => console.log("Typing"),
  placeholder = "Type..",
  name = "client_name",
  className = "form-control bg-transparent rounded-0",
  required = true,
  label = "",
}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        className={className}
        required={required}
        onChange={(e) => handleChange(e)}
      />
      {label && <label>{label}</label>}
    </>
  );
};

export default Input;
