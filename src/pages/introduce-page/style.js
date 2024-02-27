import styled, { css } from "styled-components";
import IROnly from "styles/IROnly";

export const Main = styled.main`
  min-height: ${props => `calc(100vh - ${props.theme.height.footer})`};

  padding-top: ${props => props.theme.height.header};
  font-family: "nanum";
`;

export const Section1 = styled.section`
  width: 100vw;

  padding: 5vw;

  background-color: ${props => props.theme.color.light};

  display: flex;
  flex-direction: column;
  align-items: center;

  & > header {
    ${IROnly}
  }
`;

export const Common = css`
  width: 60vw;

  padding: 1.5vw;

  border-radius: 12px;

  font-size: 1.3vw;
  text-align: center;
`

export const Header = styled.h1`
  ${Common}
  font-weight: 800;
  font-size: 3vw;
`

export const Description = styled.p`
  ${Common}

  padding: 1.5vw 3vw;
  line-height: 1.5;
`;

export const Link_kakao = styled.a`
  ${Common}
  margin-top: 2vh;
  margin-bottom: 2vh;
  background-color: #FEE500;
  font-size: 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Symbol_kakao = styled.img`
  width: 3vw;
  margin: 0 2vw;
`

export const Link_google = styled.a`
  ${Common}

  margin-bottom: 20px;
`;

export const Button = styled.button`
  ${Common}
`;

export const ModalWrapper = styled.div`
  padding: 30px 35px;
`;

export const ModalHeader = styled.header`
  width: 100%;

  padding-bottom: 20px;

  text-align: center;

  & > h2 {
    font-size: 18px;
  }
`;

export const ModalForm = styled.form`
  width: 100%;
`;

export const ModalInnerWrapperStyle = css`
  width: 100%;

  margin-top: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalInnerWrapperDescStyle = css`
  font-size: 14px;
`;

export const ModalInputFieldset = styled.fieldset`
  ${ModalInnerWrapperStyle}
`;

export const ModalInputLabel = styled.label`
  ${ModalInnerWrapperDescStyle}
`;

export const ModalInput = styled.input`
  width: 550px;
  
  padding: 5px;

  border: 1px solid #ccc;
  border-radius: 5px;

  font-size: 14px;
`;

export const ModalInnerWrapper = styled.div`
  ${ModalInnerWrapperStyle}
`;

export const ModalInnerWrapperDesc = styled.p`
  ${ModalInnerWrapperDescStyle}
`;

export const ModalDropboxButton = styled.button`
  width: 550px;
  height: 28px;

  background-color: ${props => props.theme.color.main};
  border-radius: 8px;
  
  color: ${props => props.theme.color.light};

  &::before {
    content: "";
    display: block;

    width: 8px;
    height: 8px;

    position: absolute;
    right: 15px;
    top: 10px;

    transform: ${props => props.visible ? "translate(5px, -1px) rotate(225deg);" : "translate(0, -1px) rotate(225deg)"};
    transition: all 0.2s;

    border-top: 2px solid ${(props) => props.theme.color.light};
  }

  &::after {
    content: "";
    display: block;

    width: 8px;
    height: 8px;

    position: absolute;
    right: 15px;
    top: 10px;

    transform: ${props => props.visible ? "translate(-4px, -1px) rotate(135deg);" : "translate(0, -1px) rotate(135deg)"};
    transition: all 0.2s;
    
    border-top: 2px solid ${(props) => props.theme.color.light};
  }
`;

export const ModalDropboxList = styled.ul`
  width: 550px;
  padding: 8px 0;

  background-color: ${props => props.theme.color.light};
  border: 1px solid #ccc;
  border-radius: 8px;

  display: ${props => props.visible ? "block" : "none"};

  position: absolute;
  top: 32px;
`;

export const ModalDropboxListButton = styled.button`
  width: 100%;

  padding: 5px 0;

  color: ${props => props.theme.color.main};

  transition: all 0.2s;

  & > span {
    font-size: 14px;
  }

  &:hover {
    color: ${props => props.theme.color.light};
    background-color: ${props => props.theme.color.main};
  }
`;

export const ModalTextAreaFieldset = styled.fieldset`
  margin-top: 30px;

  & > label {
    ${IROnly}
  }
`;

export const ModalTextArea = styled.textarea`
  width: 100%;
  height: 140px;

  padding: 10px;

  border: 1px solid #ccc;
  border-radius: 8px;

  resize: none;
`;

export const ModalButtonWrapper = styled.div`
  margin-top: 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const ModalButton = styled.button`
  flex-grow: 1;
  height: 28px;

  background-color: ${props => props.theme.color.main};
  border-radius: 8px;
  
  color: ${props => props.theme.color.light};

  & > span {
    font-size: 14px;
  }
`;