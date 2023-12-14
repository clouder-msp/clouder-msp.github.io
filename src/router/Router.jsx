import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HeaderLayout from "layout/header-layout/HeaderLayout";

import ScrollToTop from "utils/ScrollToTop";

const MainPage = lazy(() => import("pages/main-page/MainPage"));
const IntroducePage = lazy(() => import("pages/introduce-page/IntroducePage"));
const ExamplePage = lazy(() => import("pages/example-page/ExamplePage"));

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<HeaderLayout />}>
            <Route path="" element={<MainPage />} />
            <Route path="introduce/:name" element={<IntroducePage />} />
            <Route path="example/:name" element={<ExamplePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}