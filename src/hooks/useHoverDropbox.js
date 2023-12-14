import { useCallback, useState } from "react";

import HoverDropboxWrapper from "modules/wrapper/hover-dropbox-wrapper/HoverDropboxWrapper";

const useHoverDropbox = () => {
  const [visible, setVisible] = useState(false);

  const openDropbox = useCallback(() => {
    setVisible(() => true);
  }, []);

  const closeDropbox = useCallback(() => {
    setVisible(() => false);
  }, []);

  return {
    HoverDropbox: ({ children }) => {
      return (
        <HoverDropboxWrapper open={openDropbox} close={closeDropbox}>
          {children}
        </HoverDropboxWrapper>
      )
    },
    visible
  }
}

export default useHoverDropbox;