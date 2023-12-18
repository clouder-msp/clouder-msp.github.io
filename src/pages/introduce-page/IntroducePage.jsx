import { useState } from 'react';
import { useParams } from 'react-router';

import * as style from './style';

import useModal from "hooks/useModal";
import useDropbox from 'hooks/useDropbox';
import useTitle from 'hooks/useTitle';

import { category } from 'constants/category';
import { introduce } from 'constants/introduce';

export default function IntroducePage() {
  const params = useParams();
  const name = params.name;

  const [selected, setSelected] = useState(category[0]);

  const { Modal, openModal, closeModal } = useModal();
  const { Dropbox, visible, closeDropbox, toggleDropbox } = useDropbox();

  useTitle(`${name} 소개 페이지`);

  console.log(introduce[name]);

  return (
    <style.Main>
      <style.Section1>
        <header>
          <h2>소개 섹션 1</h2>
        </header>
        <style.Description>{introduce[name].description}</style.Description>
        {
          introduce[name].links.map(link => {
            return (
              <style.Link key={link.name} href={link.link}>{link.name}</style.Link>
            )
          })
        }
        <style.Button onClick={openModal}>
          <span>생성</span>
        </style.Button>
      </style.Section1>
      <Modal>
        <style.ModalWrapper onClick={closeDropbox}>
          <style.ModalHeader>
            <h2>생성 모달</h2>
          </style.ModalHeader>
          <style.ModalForm onClick={(e) => { e.preventDefault(); }}>
            <style.ModalInputFieldset>
              <style.ModalInputLabel htmlFor='subject'>주제</style.ModalInputLabel>
              <style.ModalInput id='subject' type='text' />
            </style.ModalInputFieldset>
            <style.ModalInputFieldset>
              <style.ModalInputLabel htmlFor='nickname'>닉네임</style.ModalInputLabel>
              <style.ModalInput id='nickname' type='text' />
            </style.ModalInputFieldset>
            <style.ModalInnerWrapper>
              <style.ModalInnerWrapperDesc>부류</style.ModalInnerWrapperDesc>
              <Dropbox>
                <style.ModalDropboxButton visible={visible} onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleDropbox(); }}>
                  <span>{selected}</span>
                </style.ModalDropboxButton>
                <style.ModalDropboxList visible={visible}>
                  {
                    category.map((c) => {
                      return (
                        <li key={c}>
                          <style.ModalDropboxListButton onClick={() => { setSelected(c); closeDropbox(); }}>
                            <span>{c}</span>
                          </style.ModalDropboxListButton>
                        </li>
                      )
                    })
                  }
                </style.ModalDropboxList>
              </Dropbox>
            </style.ModalInnerWrapper>
            <style.ModalTextAreaFieldset>
              <label htmlFor='inquiry'>문의 내용</label>
              <style.ModalTextArea id='inquiry' placeholder='문의 내용을 입력해주세요.' />
            </style.ModalTextAreaFieldset>
            <style.ModalButtonWrapper>
              <style.ModalButton onClick={closeModal}>
                <span>확인</span>
              </style.ModalButton>
              <style.ModalButton onClick={closeModal}>
                <span>취소</span>
              </style.ModalButton>
            </style.ModalButtonWrapper>
          </style.ModalForm>
        </style.ModalWrapper>
      </Modal>
    </style.Main>
  )
}
