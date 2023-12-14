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
        <header>
          <h2>섹션 1</h2>
        </header>
        <style.List>
          <style.ListItem>
            <p>No</p>
            <p>이름</p>
            <p>구분</p>
            <p>링크</p>
          </style.ListItem>
          {
            example[name].map((e) => {
              return (
                <style.ListItem key={e.name}>
                  <p>{e.number}</p>
                  <p>{e.name}</p>
                  <p>{e.category}</p>
                  <Link to={e.link}>{e.link}</Link>
                </style.ListItem>
              )
            })
          }
        </style.List>
      </style.Section1>
    </style.Main>
  )
}
