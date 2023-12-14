import * as style from './style';

export default function HoverDropboxWrapper({ children, open, close }) {
  return (
    <style.Wrapper onMouseEnter={open} onMouseLeave={close}>
      {children}
    </style.Wrapper>
  );
};