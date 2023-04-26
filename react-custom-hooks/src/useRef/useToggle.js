import React, { useState } from "react";

const useToggle = (defaultValue) => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return { toggle, show };
};

export default useToggle;
