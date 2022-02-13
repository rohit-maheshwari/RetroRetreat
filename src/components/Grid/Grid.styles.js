import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 10rem;
`;
