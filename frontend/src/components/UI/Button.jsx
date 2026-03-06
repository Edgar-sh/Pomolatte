const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="whitespace-nowrap font-lato font-extrabold text-pomolatte-text-button text-xl bg-pomolatte-button py-3.5 px-3 rounded-2xl drop-shadow-[0px_4px_1px_rgba(0,0,0,0.25)]"
    >
      {children}
    </button>
  );
};

export default Button;
