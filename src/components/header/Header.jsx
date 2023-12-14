import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import NavigationDropbox from 'components/dropbox/navigation-dropbox/navigationDropbox';

import * as style from './style';

import { navigationList, navigationDetail } from 'constants/navigation';

export default function Header() {
  const location = useLocation();

  // 스크롤 시 색 변경
  const [flag, setFlag] = useState((location.pathname === "/" && document.body.scrollTop <= 1 && document.documentElement.scrollTop <= 1) ? true : false);

  const checkFlag = useCallback(() => {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setFlag(false);

      return;
    }

    if (document.body.scrollTop <= 1 && document.documentElement.scrollTop <= 1) {
      setFlag(true);
    }

    window.addEventListener("scroll", checkFlag);

    return () => window.removeEventListener("scroll", checkFlag);
  }, [location.pathname, checkFlag]);
  // 스크롤 시 색 변경

  return (
    <style.Warpper flag={flag}>
      <style.Header>
        <style.H1>
          <a href="/">
            <span>Clouder</span>
          </a>
        </style.H1>
        <nav>
          <style.NavList>
            {
              navigationList.map((nav) => {
                return (
                  <li key={nav}>
                    <NavigationDropbox title={nav} list={navigationDetail[nav]} flag={flag} />
                  </li>
                );
              })
            }
          </style.NavList>
        </nav>
        <a href="/">
          <span>INFO</span>
        </a>
      </style.Header>
    </style.Warpper>
  )
}
