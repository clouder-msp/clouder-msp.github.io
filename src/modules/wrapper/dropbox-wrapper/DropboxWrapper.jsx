import * as style from './style';

export default function DropboxWrapper({ children }) {
  return (
    <style.Wrapper>
      {children}
    </style.Wrapper>
  );
};