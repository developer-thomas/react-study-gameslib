// eslint-disable-next-line react/prop-types
const TextInput = ({ label, value, setValue, id }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="text" name={id} id={id} value={value} onChange={(ev) => setValue(ev.target.value)} />
    </div>
  );
};

export default TextInput;
