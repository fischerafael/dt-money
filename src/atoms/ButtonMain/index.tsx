import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const ButtonMain = ({ children, ...props }: Props) => {
  return <Container {...props}>{children}</Container>;
};
