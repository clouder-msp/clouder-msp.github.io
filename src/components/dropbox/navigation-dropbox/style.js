import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
  height: ${props => props.theme.height.header};

  margin: auto 0;

  font-size: ${props => props.theme.fontSize.navigation};
  color: ${props => props.flag ? props.theme.color.light : props.theme.color.main};
`;

export const List = styled.ul`
  padding: 10px 0;
  margin-top: -10px;

  position: absolute;
  top: ${props => props.theme.height.header};
  left: 50%;
  transform: translate(-50%);

  border: 1px solid #e4e4e4;
  border-radius: 5px;
  background-color: ${props => props.theme.color.light};

  display: ${props => props.visible ? "flex" : "none"};
  flex-direction: column;
`;

export const ListLink = styled(Link)`
  width: 8vw;

  padding: 8px 0;

  display: inline-block;
  text-align: center;

  background-color: inherit;
  color: ${props => props.theme.color.main};

  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.theme.color.main};
    color: ${props => props.theme.color.light};
  }
`;