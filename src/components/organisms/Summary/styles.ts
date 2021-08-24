import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.section`
  max-width: 900px;
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;

  padding: 2rem 1rem;

  div {
    background: var(--lighter-black);
    color: var(--light-black);
    padding: 2rem;
    border-radius: 0.25rem;
    margin-top: -7.5rem;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: normal;
    }
  }
  .highlight {
    background: var(--green);
    color: var(--shape);
  }
`;
