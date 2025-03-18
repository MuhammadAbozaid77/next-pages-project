export default function Button({ onClick, children, type, styles }) {
  const buttonType = type === "submit" ? "bg-blue-800 hover:bg-blue-600" : "";
  return (
    <button
      onClick={onClick}
      className={`disabled:pointer-events-none  disabled:opacity-50 disabled:shadow-none w-[100%] rounded-md py-2 px-4 font-semibold text-center text-white transition-all  shadow-md hover:shadow-lg  ${buttonType} ${styles}`}
      type="button"
    >
      {children}
    </button>
  );
}
