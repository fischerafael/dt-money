import styled from "styled-components";

export const Container = styled.header`
  background: var(--black);
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem 10rem;

  button {
    font-size: 1rem;
    background: var(--light-black);
    color: var(--shape);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
