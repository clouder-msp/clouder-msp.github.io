import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import NavigationDropbox from 'components/dropbox/navigation-dropbox/navigationDropbox';

import * as style from './style';

import { navigationList, navigationDetail } from 'constants/navigation';

import logo_light from "assets/images/clouder-logo-light.png"
import logo_dark from "assets/images/clouder-logo.png" 

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
            {flag?<style.Logo src={logo_light}/>:<style.Logo src={logo_dark}/>}
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
        <Link to="/info">
          <span>INFO</span>
        </Link>
      </style.Header>
    </style.Warpper>
  )
}
