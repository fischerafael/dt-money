import { ButtonMain } from "../../../atoms/ButtonMain";
import { Container, Content } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src="/logo.svg" alt="dt money" />
        <ButtonMain>New Transaction</ButtonMain>
      </Content>
    </Container>
  );
};
