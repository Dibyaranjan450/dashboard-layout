import React from "react";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  error = "",
  className = "",
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <label className="text-sm md:text-sm2 font-medium md:font-semibold">{label}</label>}

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border p-3 md:p-5 rounded-xs md:rounded-xs-12 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...props}
      />

      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default Input;
