import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Layout from "layout/Layout";

import ScrollToTop from "utils/ScrollToTop";

const MainPage = lazy(() => import("pages/main-page/MainPage"));
const IntroducePage = lazy(() => import("pages/introduce-page/IntroducePage"));
const ExamplePage = lazy(() => import("pages/example-page/ExamplePage"));
const InfoPage = lazy(() => import("pages/info-page/InfoPage"));

export default function Router() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<MainPage />} />
            <Route path="introduce/:name" element={<IntroducePage />} />
            <Route path="example/:name" element={<ExamplePage />} />
            <Route path="info" element={<InfoPage />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  )
}