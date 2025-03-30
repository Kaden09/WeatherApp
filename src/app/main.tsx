import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.scss";
import "./variables.scss";
import "./theme.scss";
import { MainPage } from "../pages/index.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeProvider from "./providers/ThemeProvider.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  </QueryClientProvider>,
);
