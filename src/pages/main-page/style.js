import styled from "styled-components";

export const Main = styled.main`
  min-height: ${props => `calc(100vh - ${props.theme.height.footer})`};

  padding-top: ${props => props.theme.height.header};
`;

export const Section1 = styled.section`
  width: 100vw;
  height: ${props => `calc(100vh - ${props.theme.height.header})`};

  background-color: ${props => props.theme.color.main};
  background-image: url("https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149369791.jpg?w=1380&t=st=1702550829~exp=1702551429~hmac=4847b649ee9dbc24f50bcadcd60888d1e63826389959c67db2d432543e57786a");
  background-repeat: no-repeat;
  background-position: center;
  /* background-size: cover; */
`;

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
  list-style-image: url( "https://bit.ly/2GqYPc7" );
  margin-top: 60px;
  margin-left: 100px;
`
export const InnerLI2 = styled.li`
  list-style-image: url( "https://bit.ly/2GqYPc7" );
  margin-top: 60px;
  margin-left: 100px;
`
export const InnerLI3 = styled.li`
  list-style-image: url( "https://bit.ly/2GqYPc7" );
  margin-top: 60px;
  margin-left: 100px;
`
export const InnerLI4 = styled.li`
  list-style-image: url( "https://bit.ly/2GqYPc7" );
  margin-top: 60px;
  margin-left: 100px;
`

export const InnerLITitle = styled.h4`
  font-size: 32px;  
  font-weight: 700;
  margin-bottom: 10px;
  padding-bottom: 12px;
`

export const InnerLIText = styled.p`
  font-size: 16px
`
