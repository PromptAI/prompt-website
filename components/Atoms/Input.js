import React from 'react';
import "twin.macro";

function Input({ rows, ...rest }, ref) {
  return rows > 0 ? (
    <textarea
      ref={ref}
      tw="outline-0 bg-gray-200/60 h-8 p-2 w-full"
      rows={rows}
      {...rest}
    />
  ) : (
    <input ref={ref} tw="outline-0 bg-gray-200/60 h-8 px-2 w-full" {...rest} />
  );
}

export default React.forwardRef(Input);
