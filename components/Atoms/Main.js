import "twin.macro";

export default function Main({ children }) {
  return <main tw="min-h-[calc(100vh - 8rem)] pt-[4.5rem]">{children}</main>;
}
