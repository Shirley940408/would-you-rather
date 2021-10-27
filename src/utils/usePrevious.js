import React, { useRef } from "react";

const usePrevious = (value) => {
  const ref = useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
export default usePrevious;
