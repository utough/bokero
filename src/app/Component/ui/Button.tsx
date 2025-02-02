import React from "react";

type Title = {
  title: string;
};

const Button = ({ title }: Title) => {
  return (
    <div>
      <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm">
        {title}
      </button>
    </div>
  );
};

export default Button;
