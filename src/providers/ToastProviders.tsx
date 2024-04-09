import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

const ToastProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3500
        }}
      />
      {children}
    </>
  );
};

export default ToastProvider;
