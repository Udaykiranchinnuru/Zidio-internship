import React from "react";

function InputControl({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="font-medium text-base">{label}</label>}
      <input
        type="text"
        className="border border-gray-300 outline-none p-2.5 text-base rounded-lg focus:border-blue-500 hover:border-gray-400"
        {...props}
      />
    </div>
  );
}

export default InputControl;
