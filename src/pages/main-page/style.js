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
  font-size: 4vw;
  color: white;
  margin: auto;
`

export const Section2 = styled.section`
  padding: 12vh 5vw 4vh 5vw;
`;

export const InnerCon2 = styled.div`
  margin: 0 auto;
  max-width: 70vw;
  text-align: right;
`

export const InnerHeader2 = styled.h2`
  font-size: 3vw;
  font-weight: 700;
  padding-bottom: 6vh
`
export const InnerText2 = styled.p`
  font-size: 1.5vw;
  font-weight: 500;
  color: #555555;
  line-height: 1.6;
`

export const Section3 = styled.section`
  padding: 8vh 5vw 8vh 5vw;
`;

export const InnerCon3 = styled.div`
  margin: 0 auto;
  max-width: 70vw;
`

export const InnerHeader3 = styled.h2`
  font-size: 3vw;
  font-weight: 700;
  padding-bottom: 4vw
`
export const InnerText3 = styled.p`
  font-size: 1vw;
  font-weight: 500;
  color: #555555;
  line-height: 1.6;
`

export const InnerUL = styled.ul`
`

export const InnerLI1 = styled.li`
  margin-top: 3vw;
`
export const InnerLI2 = styled.li`
  margin-top: 3vw;
`
export const InnerLI3 = styled.li`
  margin-top: 3vw;
`
export const InnerLI4 = styled.li`
  margin-top: 3vw;
`

export const InnerLITitle = styled.h4`
  font-size: 1.5vw;  
  font-weight: bold;
  margin-left: 8vw;
  margin-bottom: 1vh;
  padding-bottom: 1.2vh;
`

export const InnerLIText = styled.p`
  font-size: 0.9vw;
  margin-left: 8vw;
`
export const InnerLIImage = styled.img`
  position: absolute;
  width: 6vw;
  margin-top: 0.5vh;
  margin-left: 1vw;
`