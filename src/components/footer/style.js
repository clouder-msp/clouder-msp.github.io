import styled from "styled-components";

export const Warpper = styled.div`
  width: 100vw;

  padding: 0 4vh;

  background-color: #222222;
`;

export const Footer = styled.footer`
  max-width: ${props => props.theme.width.wrapper};
  height: ${props => props.theme.height.footer};

  margin: 0 auto;

`;

export const TextP1 = styled.p`
  color: white;
`
export const TextP2 = styled.p`
  color: gray;
`

export const Contact = styled.a`
color: lightgray`