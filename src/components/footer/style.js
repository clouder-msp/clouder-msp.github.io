import styled from "styled-components";

export const Warpper = styled.div`
  width: 100vw;

  padding: 0 40px;

  background-color: #222222;
`;

export const Footer = styled.footer`
  max-width: ${props => props.theme.width.wrapper};
  height: ${props => props.theme.height.footer};

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextP = styled.p`
  color: gray;
`