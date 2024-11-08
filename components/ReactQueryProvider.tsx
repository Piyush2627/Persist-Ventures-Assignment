"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const query = new QueryClient();
function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QueryClientProvider client={query}>{children}</QueryClientProvider>
    </>
  );
}

export default ReactQueryProvider;
