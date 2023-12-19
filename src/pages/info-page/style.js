import styled from "styled-components";

export const Main = styled.main`
  min-height: ${props => `calc(100vh - ${props.theme.height.footer})`};
  
  padding-top: ${props => props.theme.height.header};
`;

export const Section1 = styled.section`
  width: 100vw;

  padding-top: 125px;
  padding-bottom: 130px;

  background-color: ${props => props.theme.color.light};

  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const InnerCon1 = styled.div`
  margin: 0 auto;
  max-width: 1260px;
  text-align: left;
`