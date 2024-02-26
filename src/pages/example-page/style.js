import styled, { css } from "styled-components";
import IROnly from "styles/IROnly";

export const Main = styled.main`
  min-height: ${props => `calc(100vh - ${props.theme.height.footer})`};

  padding-top: ${props => props.theme.height.header};
  font-family: "nanum";
`;

export const Section1 = styled.section`
  max-width: ${props => props.theme.width.wrapper};

  margin: 50px auto 0;

  & > header {
    ${IROnly}
  }
`;

export const TableCSS = css`
width: 100%;


display: grid;
grid-template-columns: 1fr 2fr 1fr 2fr;

background-color: white;

color: ${props => props.theme.color.light};

& > p, 
& > a {
  font-size: 18px;

  text-align: center;
}
`

export const Table = styled.table`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  text-align: center;

  color: #333;
  border-radius: .4em;
  overflow: hidden;

  background: white;
  border-radius:3px;
  border-collapse: collapse;
  max-width: 800px;
  padding:5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
  

  & tr:hover td {
    background:#4E5066;
    color:#FFFFFF;
    border-top: 1px solid #22262e;
  }

  & tr:first-child {
    border-top:none;
  }
  
  & tr:last-child {
    border-bottom:none;
  }

  & tr:nth-child(odd) td {
    background:#EBEBEB;
  }

  & tr:nth-child(odd):hover td {
    background:#4E5066;
  }

  & tr:last-child td:first-child {
    border-bottom-left-radius:3px;
  }
   
  & tr:last-child td:last-child {
    border-bottom-right-radius:3px;
  }
`;

export const TableRow = styled.tr`
  ${TableCSS}
  border-top: 1px solid #C1C3D1;
  border-bottom-: 1px solid #C1C3D1;
  color:#666B85;
  font-size:16px;
  font-weight:normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
`;  

export const TableHeader = styled.th`
  color:#D5DDE5;
  background:#1b1e24;
  border-bottom:4px solid #9ea7af;
  border-right: 1px solid #343a45;
  font-size:23px;
  font-weight: 100;
  padding:24px;
  text-align:left;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  vertical-align:middle;
`;


export const TableData = styled.td`
  background:#FFFFFF;
  padding:20px;
  text-align:left;
  vertical-align:middle;
  font-weight:300;
  font-size:18px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #C1C3D1;
`