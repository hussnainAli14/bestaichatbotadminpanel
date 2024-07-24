import React from "react";

const Button = ({
  buttonType = "primary",
  buttonText = "Approve",
  buttonAction = () => {},
}) => {
  const bgColor =
    buttonType === "primary"
      ? "bg-green-600"
      : buttonType === "secondary"
      ? "bg-yellow-500"
      : buttonType === "danger" && "bg-red-600";

  return (
    <button
      className={`${bgColor} border-none p-2 rounded-md text-center text-white `}
      onClick={buttonAction}
    >
      {buttonText}
    </button>
  );
};

export default Button;
