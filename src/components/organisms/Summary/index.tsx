import { Container, Content } from "./styles";

export const Summary = () => {
  return (
    <Container>
      <Content>
        <div>
          <header>
            <p>Income</p>
            <img src="/income.svg" alt="" />
          </header>
          <strong>R$ 1000,00</strong>
        </div>
        <div>
          <header>
            <p>Expanses</p>
            <img src="/expanses.svg" alt="" />
          </header>
          <strong>R$ 700,00</strong>
        </div>
        <div className="highlight">
          <header>
            <p>Total</p>
            <img src="/total.svg" alt="" />
          </header>
          <strong>R$ 300,00</strong>
        </div>
      </Content>
    </Container>
  );
};
