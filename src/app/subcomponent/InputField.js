
const InputField = ({ classname, value, name, placeholder, type, onChange }) => (
  
    <div className="form-group">
      <input        
        type={type}
        value={value}
        name={name}
        className={`${classname} "form-component"`}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  );
  
  export default InputField;