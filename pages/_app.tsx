import { ReactNode } from "react";
import { Setup } from "../molecules";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

type TAppProps = {
  Component: ReactNode;
  pageProps: any;
};

export default function App({ Component, pageProps }: TAppProps) {
  return (
    <Setup>
      <Component {...pageProps} />
    </Setup>
  );
}
