import React from "react";
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
  Text,
  Switch,
} from "react-native";

interface Styles {
  container: StyleProp<ViewStyle>;
  title: StyleProp<TextStyle>;
}

const styles: Styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 4,
    flex: 1,
  },
  title: {
    paddingLeft: 2,
    flex: 1,
  },
};

interface Props {
  value: boolean;
  onChange: () => void;
  title: string;
  style?: StyleProp<TextStyle>;
}
export const Switcher: React.FC<Props> = (props) => {
  const { value, onChange, style, title } = props;
  return (
    <View style={styles.container}>
      <Switch value={value} onChange={onChange} />
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
    </View>
  );
};
