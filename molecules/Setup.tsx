import { Fragment, ReactNode } from "react";
import AppStyles from "./AppStyles";

type TSetupProps = {
  children: ReactNode;
};

export default function Setup({ children }: TSetupProps) {
  return (
    <Fragment>
      <AppStyles />
      {children}
    </Fragment>
  );
}
