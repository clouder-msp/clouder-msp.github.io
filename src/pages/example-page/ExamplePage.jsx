import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { example } from "constants/example";

import useTitle from "hooks/useTitle";

import * as style from './style';

export default function ExamplePage() {
  const params = useParams();
  const name = params.name;

  useTitle(`${name} 사례 페이지`);

  return (
    <style.Main>
      <style.Section1>
        <style.Table>
          <style.TableRow>
            <style.TableHeader>No</style.TableHeader>
            <style.TableHeader>이름</style.TableHeader>
            <style.TableHeader>구분</style.TableHeader>
            <style.TableHeader>링크</style.TableHeader>
          </style.TableRow>
          {
            example[name].map((e) => {
              return (
                <style.TableRow key={e.name}>
                  <style.TableData>{e.number}</style.TableData>
                  <style.TableData>{e.name}</style.TableData>
                  <style.TableData>{e.category}</style.TableData>
                  <style.TableData><Link to={e.link}>{e.link}</Link></style.TableData>
                </style.TableRow>
              )
            })
          }
        </style.Table>
      </style.Section1>
    </style.Main>
  )
}
