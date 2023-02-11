import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const NotFound = ({ children }: Props) => {
  return <div className="justify-center items-center text-xl">{children}</div>;
};
