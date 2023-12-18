import useTitle from 'hooks/useTitle';

import * as style from './style';

import CodingImage from 'assets/images/coding.jpg';

export default function MainPage() {
  useTitle("Clouder - 개발자들의 솔루션 설계/구축 비서");

  return (
    <style.Main>
      <style.Section1>
      </style.Section1>

      <style.Section2>
        <style.InnerCon2>
          <style.InnerHeader2>Clouder란?</style.InnerHeader2>
          <style.InnerText2>
            고등/대학생, 일반인 등의 프로젝트에 적용할 최적의 개발 환경을 마련합니다.
            <br></br><br></br>
            Local PC, 서버 등에서 구축하는 Infra 솔루션,
            <br></br>
            클라우드 기반 인프라를 구축하는 Cloud 솔루션,
            <br></br>
            컨테이너 서비스 아키텍처를 위한 K8S 솔루션
            <br></br><br></br>
            개발에 온전히 집중할 수 있도록 지원하겠습니다.
          </style.InnerText2>
        </style.InnerCon2>
      </style.Section2>

      <style.Section3>
        <style.InnerCon3>
          <style.InnerHeader3>솔루션 제공 과정</style.InnerHeader3>
          <style.InnerText3>
            각 단계는 독립적으로 제공하며, 각 솔루션 칸의 소개 페이지에서 신청할 수 있습니다.
          </style.InnerText3>
          <style.InnerUL>
            <style.InnerLI1>
              <style.InnerLITitle>
                컨설팅
              </style.InnerLITitle>
              <style.InnerLIText>
                오픈 카카오톡, 이메일 등을 통해 컨설턴트와 접촉합니다.
              </style.InnerLIText>
            </style.InnerLI1>
            <style.InnerLI2>
              <style.InnerLITitle>
                세부 명세 작성
              </style.InnerLITitle>
              <style.InnerLIText>
                구축하기에 앞서 세부적인 솔루션을 명세합니다.
              </style.InnerLIText>
            </style.InnerLI2>
            <style.InnerLI3>
              <style.InnerLITitle>
                아키텍팅
              </style.InnerLITitle>
              <style.InnerLIText>
                작성한 세부 명세에 따라 실제 개발 환경을 마련합니다.
              </style.InnerLIText>
            </style.InnerLI3>
            <style.InnerLI4>
              <style.InnerLITitle>
                유지보수
              </style.InnerLITitle>
              <style.InnerLIText>
                구축한 환경에 대해 유지보수 및 트러블 슈팅을 지원합니다.
              </style.InnerLIText>
            </style.InnerLI4>
          </style.InnerUL>
        </style.InnerCon3>
      </style.Section3>
      <img src={CodingImage} alt="" />
    </style.Main>
  )
}
