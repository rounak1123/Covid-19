import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  console.log(window.scrollY);

  useEffect(() => {
    if (window.scrollY == 380) {
      window.scrollBy(0, 1);
    }
    if (pathname == "/") window.scrollTo(0, 0);
    else {
      window.scroll({
        top: 380,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [pathname]);

  return null;
}
