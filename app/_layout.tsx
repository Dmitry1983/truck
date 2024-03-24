import { Slot } from "expo-router";
import { ProviderLanguageContext, StoreProvider } from "./lib";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 } },
  });
  return (
    <ProviderLanguageContext>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Slot />
        </StoreProvider>
      </QueryClientProvider>
    </ProviderLanguageContext>
  );
}
