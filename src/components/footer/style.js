import styled from "styled-components";

export const Warpper = styled.div`
  width: 100vw;

  padding: 0 40px;

  background-color: rebeccapurple;
`;

export const Footer = styled.footer`
  max-width: ${props => props.theme.width.wrapper};
  height: ${props => props.theme.height.footer};

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;