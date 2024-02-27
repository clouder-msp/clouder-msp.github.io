import styled from "styled-components";

export const Main = styled.main`
  min-height: ${props => `calc(100vh - ${props.theme.height.footer})`};
  
  padding-top: ${props => props.theme.height.header};
  font-family: "nanum";
`;

export const Section1 = styled.section`
  width: 100vw;

  padding-top: 12vh;
  padding-bottom: 13vh;

  background-color: ${props => props.theme.color.light};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerCon1 = styled.div`
  margin: 0 auto;
  max-width: 70vw;
  text-align: left;
`

export const InnerText = styled.p`
  font-size: 1.3vw;
  margin-top: 2vh;
  text-align: center;
`