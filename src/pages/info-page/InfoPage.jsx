import useTitle from 'hooks/useTitle';

import * as style from './style';

export default function InfoPage() {
  useTitle("Info 페이지")

  return (
    <style.Main>
      <style.Section1>
        <style.InnerCon1>
          <p>본 컨설팅은 경험을 위해 개인적으로 수행하고 있으며, 컨설팅 내용은 컨설턴트의 개인 이력으로 일부 활용될 수 있습니다.</p>
          <p>본 컨설팅 프로젝트는 "Clouder" 명칭으로 운영하고 있습니다.</p>
        </style.InnerCon1>
      </style.Section1>
    </style.Main>
  )
}