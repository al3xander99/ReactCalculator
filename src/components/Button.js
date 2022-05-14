const Button = ({ color, text, onClick, value, className = "btn" }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={className}
      value={value}
    >
      {text}
    </button>
  );
};

export default Button;
