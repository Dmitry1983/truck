import { Stack } from "expo-router/stack";
import { TabsLayout } from "./Tabs";

export const AppNavigation = () => {
  return (
    <Stack>
      <Stack.Screen name="TabsLayout" options={{ headerShown: false }} />
    </Stack>
  );
};
