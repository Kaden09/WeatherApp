import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.scss";
import "./variables.scss";
import { MainPage } from "../pages/index.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  </StrictMode>,
);
