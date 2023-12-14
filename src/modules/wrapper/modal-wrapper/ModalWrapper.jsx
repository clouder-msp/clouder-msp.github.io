import * as style from './style'

export default function ModalWrapper({ children, close }) {
  return (
    <style.Wrapper onClick={close}>
      <style.Modal onClick={(e) => { e.stopPropagation(); }}>
        {children}
      </style.Modal>
    </style.Wrapper>
  )
}