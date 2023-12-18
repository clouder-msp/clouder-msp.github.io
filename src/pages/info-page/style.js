import styled from "styled-components";

export const Main = styled.main`
  min-height: ${props => `calc(100vh - ${props.theme.height.footer})`};
  
  padding-top: ${props => props.theme.height.header};
`;