"use client";

import { Toaster } from "react-hot-toast";

const ToasterContext = () => {
  return (
    <Toaster
      toastOptions={{
        style: { scale: 1.25 },
      }}
    />
  );
};

export default ToasterContext;
