import { I18n } from "i18n-js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Main } from "./src/ui/Main";
import { AppNavigation } from "./src/AppNavigation";

const i18n = new I18n({
  en: { welcome: "Hello" },
  ja: { welcome: "こんにちは" },
  ru: { welcome: "Привет" },
});

i18n.locale = "en";

console.log(i18n.t("welcome"));

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export default function App() {
  console.log({ queryClient });
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Main /> */}
      <AppNavigation />
    </QueryClientProvider>
  );
}
