import { BsArrowRight } from "react-icons/bs";

const Button = ({
  text = "DESCARGAR CV",
  btnClassName = "theme-btn",
  arrow = false,
  onClick,
  type = "button",
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      console.log("Button clicked from component!");
    }
  };
  return (
    <button className={btnClassName} onClick={handleClick} type={type}>
      {text}
      {arrow && <BsArrowRight className="ms-2" size={25} />}
    </button>
  );
};

export default Button;
