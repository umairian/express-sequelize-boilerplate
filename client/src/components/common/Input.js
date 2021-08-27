import React from "react";

export function Input({
  name,
  value,
  readOnly,
  onChange,
  type,
  className = "",
}) {
  return (
    <input
      readOnly={readOnly}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      className={`input ${className}`}
    />
  );
}
