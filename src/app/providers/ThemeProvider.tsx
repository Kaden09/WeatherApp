import { useAtomValue } from "jotai";
import { themeAtom } from "../../shared/store/themeAtom.ts";
import { useEffect } from "react";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useAtomValue(themeAtom);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <>{children}</>;
}

export default ThemeProvider;
