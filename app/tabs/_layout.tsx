import React from "react";
import { Tabs } from "expo-router";
import { useLanguageContext } from "../lib";

export default function TabsLayout() {
  const { state } = useLanguageContext();

  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen
        name="home/index"
        options={{
          tabBarLabel: state.i18n.t("home"),
          title: state.i18n.t("home"),
        }}
      />

      <Tabs.Screen
        name="map/index"
        options={{
          tabBarLabel: state.i18n.t("map"),
          title: state.i18n.t("map"),
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          tabBarLabel: state.i18n.t("settings"),
          title: state.i18n.t("settings"),
        }}
      />
    </Tabs>
  );
}
