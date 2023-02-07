import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Container: React.FC<Props> = ({ children }: Props) => {
  return <div className="p-4 m-6">{children}</div>;
};
