import React from "react";

const TextField = ({ label, type, required }) => {
  return (
    <div className="w-full">
      <span>{label}</span> {required && <span className="text-red-500">*</span>}
      <input
        type={`${type}`}
        className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-transparent mt-2"
      />
    </div>
  );
};

export default TextField;
