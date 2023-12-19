import styled from "styled-components";
import IROnly from "styles/IROnly";

export const Main = styled.main`
  min-height: ${props => `calc(100vh - ${props.theme.height.footer})`};

  padding-top: ${props => props.theme.height.header};
`;

export const Section1 = styled.section`
  max-width: ${props => props.theme.width.wrapper};

  margin: 50px auto 0;

  & > header {
    ${IROnly}
  }
`;

export const List = styled.ul`
  width: 800px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ListItem = styled.li`
  width: 100%;

  padding: 16px 0;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr;

  background-color: ${props => props.theme.color.main};

  color: ${props => props.theme.color.light};

  & > p, 
  & > a {
    font-size: 18px;

    text-align: center;
  }
`;  