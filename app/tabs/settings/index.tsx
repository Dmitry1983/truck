import { Text, View, Switch, StyleProp, ViewStyle } from "react-native";
import { useLanguageContext } from "../../lib";

interface Styles {
  container: StyleProp<ViewStyle>;
}

const styles: Styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 48,
    paddingTop: 16,
  },
};

export default function Settings() {
  const { state, changeLanguage } = useLanguageContext();

  return (
    <View>
      <View style={styles.container}>
        <Text>{state.i18n.t("changeTitle")}</Text>
        <Switch value={state.language === "ru"} onChange={changeLanguage} />
      </View>
    </View>
  );
}
