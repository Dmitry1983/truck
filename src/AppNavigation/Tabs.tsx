import React from "react";
import { Tabs } from "expo-router";
import { Home } from "../../app/tabs/home";
import { Settings } from "../../app/tabs/settings";

export const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: "Settings",
        }}
      />
    </Tabs>
  );
};
