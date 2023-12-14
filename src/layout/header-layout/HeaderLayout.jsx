import { Outlet } from "react-router";

import Header from "components/header/Header";

export default function HeaderLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
