import React from "react";

const CardTag = ({ name, handleTagChange, isSelected, path }) => {
  const buttonStyles = isSelected
    ? "text-primary-500 dark:text-white border-primary-500"
    : "text-slate-500 dark:text-[#ADB7BE] border-slate-500 hover:border-primary-500 dark:hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-3 py-1 sm:px-6 sm:py-3 text-base sm:text-xl cursor-pointer`}
      onClick={() => handleTagChange(path)}
    >
      {name}
    </button>
  );
};

export default CardTag;
