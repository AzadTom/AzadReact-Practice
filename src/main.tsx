import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import "./index.css";
import DownTimeWrapper from "./features/DownTime/DownTimeWrapper.tsx";

const queryClient  = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <DownTimeWrapper>
            <App />
        </DownTimeWrapper>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
