import useHoverDropbox from 'hooks/useHoverDropbox';

import * as style from './style';

import { navigationDetailDesc } from 'constants/navigation';

export default function NavigationDropbox({ title, list, flag }) {
  // hover dropbox 관련
  const { HoverDropbox, visible } = useHoverDropbox();
  // hover dropbox 관련

  return (
    <HoverDropbox>
      <style.Button flag={flag}>{title}</style.Button>
      <style.List visible={visible} >
        {
          list.map((content) => {
            return (
              <li key={content}>
                <style.ListLink to={`/${navigationDetailDesc[content]}/${title}`}>
                  <span>{content}</span>
                </style.ListLink>
              </li>
            )
          })
        }
      </style.List>
    </HoverDropbox>
  )
}