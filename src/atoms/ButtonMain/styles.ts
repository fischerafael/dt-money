import styled from "styled-components";

export const Container = styled.button`
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
`;
