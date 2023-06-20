import "twin.macro";

export default function Container({ children, ...rest }) {
  return (
    <div tw="container mx-auto xl:max-w-screen-xl!" {...rest}>
      {children}
    </div>
  );
}
