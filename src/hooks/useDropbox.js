import { useCallback, useEffect, useState } from "react";

import DropboxWrapper from "modules/wrapper/dropbox-wrapper/DropboxWrapper";

const useDropbox = () => {
  const [visible, setVisible] = useState(false);

  const openDropbox = useCallback(() => {
    setVisible(() => true);
  }, []);

  const toggleDropbox = useCallback(() => {
    setVisible((state) => !state);
  }, []);

  const closeDropbox = useCallback(() => {
    setVisible(() => false);
  }, []);

  useEffect(() => {
    window.addEventListener("click", closeDropbox);

    return () => {
      window.removeEventListener("click", closeDropbox);
    }
  }, [closeDropbox]);

  return {
    Dropbox: ({ children }) => {
      return (
        <DropboxWrapper>
          {children}
        </DropboxWrapper>
      )
    },
    visible,
    openDropbox,
    closeDropbox,
    toggleDropbox
  }
}

export default useDropbox;