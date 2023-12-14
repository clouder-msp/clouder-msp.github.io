import { useCallback, useEffect } from "react";

export default function ScrollToTop() {
  // 스크롤 최상단 이동
  const pushRefresh = useCallback(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    window.addEventListener("beforeunload", pushRefresh);

    return () => {
      window.removeEventListener("beforeunload", pushRefresh);
    }
  }, [pushRefresh]);
  // 스크롤 최상단 이동

  return null;
}