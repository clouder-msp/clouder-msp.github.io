import styled from "styled-components";

export const Main = styled.main`
  min-height: ${props => `calc(100vh - ${props.theme.height.footer})`};

  padding-top: ${props => props.theme.height.header};
  font-family: "nanum";
`;

export const Section1 = styled.section`
  width: 100vw;
  height: ${props => `calc(100vh - ${props.theme.height.header})`};


  background-color: ${props => props.theme.color.main};

  display: flex;
  /* background-size: cover; */
`;

export const Welcome = styled.h1`
  text-align: center;
  font-size: 60px;
  color: white;
  margin: auto;
`

export const Section2 = styled.section`
  padding-top: 125px;
  padding-bottom: 130px;
`;

export const InnerCon2 = styled.div`
  margin: 0 auto;
  max-width: 1260px;
  text-align: right;
`

export const InnerHeader2 = styled.h2`
  font-size: 48px;
  font-weight: 700;
  padding-bottom: 60px
`
export const InnerText2 = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #555555;
  line-height: 1.6;
`

export const Section3 = styled.section`
  padding-top: 125px;
  padding-bottom: 130px;
`;

export const InnerCon3 = styled.div`
  margin: 0 auto;
  max-width: 1260px;
`

export const InnerHeader3 = styled.h2`
  font-size: 48px;
  font-weight: 700;
  padding-bottom: 60px
`
export const InnerText3 = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #555555;
  line-height: 1.6;
`

export const InnerUL = styled.ul`
`

export const InnerLI1 = styled.li`
  margin-top: 60px;
`
export const InnerLI2 = styled.li`
  margin-top: 60px;
`
export const InnerLI3 = styled.li`
  margin-top: 60px;
`
export const InnerLI4 = styled.li`
  margin-top: 60px;
`

export const InnerLITitle = styled.h4`
  font-size: 32px;  
  font-weight: 700;
  margin-left: 160px;
  margin-bottom: 10px;
  padding-bottom: 12px;
`

export const InnerLIText = styled.p`
  font-size: 16px;
  margin-left: 160px;
`
export const InnerLIImage = styled.img`
  position: absolute;
  width: 120px;
  margin-top: 5px;
  margin-left: 20px;
`