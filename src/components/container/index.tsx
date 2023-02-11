import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Container: React.FC<Props> = ({ children }: Props) => {
  return <div className="max-w-[1000px] mx-auto p-4 m-6">{children}</div>;
};
