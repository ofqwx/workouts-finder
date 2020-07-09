import { Node } from "react";
import { Setup } from "../molecules";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

type TAppProps = {
  Component: Node;
  pageProps: any;
};

export default function App({ Component, pageProps }: TAppProps) {
  return (
    <Setup>
      <Component {...pageProps} />
    </Setup>
  );
}
