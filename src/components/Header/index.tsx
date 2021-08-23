import { Container, Content } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src="/logo.svg" alt="dt money" />
        <button>New Transaction</button>
      </Content>
    </Container>
  );
};
