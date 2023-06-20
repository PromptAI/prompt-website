import "twin.macro";
export default function Button({ children, ...rest }) {
  return (
    <button
      tw="p-1 px-4 bg-blue-600 text-white transition-all hover:(shadow shadow-blue-500)"
      {...rest}
    >
      {children}
    </button>
  );
}
