import { Fragment, Node } from "react";
import AppStyles from "./AppStyles";

type TSetupProps = {
  children: Node;
};

export default function Setup({ children }: TSetupProps) {
  return (
    <Fragment>
      <AppStyles />
      {children}
    </Fragment>
  );
}
