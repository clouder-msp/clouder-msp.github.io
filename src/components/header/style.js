import styled from "styled-components";

export const Warpper = styled.div`
  width: 100vw;

  padding: 0 40px;

  position: fixed;
  
  background-color: ${props => props.flag ? props.theme.color.main : props.theme.color.light};
  box-shadow: ${props => props.flag ? `none` : `0 0 10px 1px ${props.theme.color.shadow}`};
  
  color: ${props => props.flag ? props.theme.color.light : props.theme.color.main};

  transition: 
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    color 0.2s ease;
`;

export const Header = styled.header`
  max-width: ${props => props.theme.width.wrapper};
  height: ${props => props.theme.height.header};

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > a {
    font-size: ${props => props.theme.fontSize.title};
  }
`;

export const H1 = styled.h1`
  font-size: ${props => props.theme.fontSize.title};
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
`