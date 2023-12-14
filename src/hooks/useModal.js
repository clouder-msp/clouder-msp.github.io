import { useCallback, useEffect, useState } from "react";

import ModalWrapper from "modules/wrapper/modal-wrapper/ModalWrapper";

const useModal = () => {
  const [visible, setVisible] = useState(false);

  const openModal = useCallback(() => {
    setVisible(() => true);
  }, []);

  const closeModal = useCallback(() => {
    setVisible(() => false);
  }, []);

  const preventScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const currentScrollX = window.scrollX;

    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${currentScrollY}px`;

    return [currentScrollX, currentScrollY];
  }, []);

  const allowScroll = useCallback((prevScrollX, prevScrollY) => {
    document.body.style.position = "";
    document.body.style.width = "";
    document.body.style.top = "";

    window.scrollTo(prevScrollX, prevScrollY);
  }, []);

  useEffect(() => {
    if (visible) {
      const [prevScrollX, prevScrollY] = preventScroll();

      return () => {
        allowScroll(prevScrollX, prevScrollY);
      };
    }
  }, [visible, preventScroll, allowScroll]);

  return {
    Modal:
      visible
        ? ({ children }) => {
          return (
            <ModalWrapper close={closeModal}>
              {children}
            </ModalWrapper>
          )
        }
        : () => null,
    visible,
    openModal,
    closeModal
  }
}

export default useModal;