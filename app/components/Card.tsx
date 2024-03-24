import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Button,
  Linking,
  Alert,
} from "react-native";
import { useLanguageContext, phoneNumberView } from "../lib";

interface Styles {
  container: StyleProp<ViewStyle>;
  buttonContainer: StyleProp<ViewStyle>;

  text: StyleProp<TextStyle>;
}

const styles: Styles = {
  container: {
    padding: 8,
    width: "100%",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 12,
    borderColor: "lightgrey",
    backgroundColor: "white",
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 8,
  },
  text: {
    padding: 4,
  },
};

export const Card = ({ item }) => {
  const { state } = useLanguageContext();

  const {
    id,
    vehicleNumber,
    typeVehicle,
    firstName,
    middelName,
    lastName,
    phoneNumber,
  } = item;

  const whatsaAppText =
    "Добрый день, подскажите пожалуйста,какой номер заказа у вас сейчас в работе?";

  const shareTextToWhatsApp = React.useCallback(
    async (text: string, phoneNumber: string) => {
      const url = `whatsapp://send?text=${text}&phone=${phoneNumber}`;
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Невозможно открыть: ${url}`);
      }
    },
    []
  );

  const callToPhoneNumber = React.useCallback(async (phoneNumber: string) => {
    const url = `tel:${phoneNumber}`;
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Невозможно открыть: ${url}`);
    }
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      key={vehicleNumber}
      style={styles.container}
    >
      <Text style={styles.text}>{`${state.i18n.t("id")}: ${id}`}</Text>

      <Text style={styles.text}>
        {`${state.i18n.t("vehicleNumber")}: ${vehicleNumber}`}
      </Text>
      <Text style={styles.text}>
        {`${state.i18n.t("typeVehicle")}: ${state.i18n.t(typeVehicle)}`}
      </Text>
      <Text style={styles.text}>
        {`${state.i18n.t("lastName")}: ${lastName}`}
      </Text>
      <Text style={styles.text}>
        {`${state.i18n.t("firstName")}: ${firstName}`}
      </Text>
      <Text style={styles.text}>
        {`${state.i18n.t("middleName")}: ${middelName}`}
      </Text>
      <Text style={styles.text}>
        {`${state.i18n.t("phoneNumber")}: ${phoneNumberView(phoneNumber)}`}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title={state.i18n.t("call")}
          onPress={() => callToPhoneNumber(phoneNumber)}
        />
        <Button
          title={state.i18n.t("write")}
          onPress={() => shareTextToWhatsApp(whatsaAppText, phoneNumber)}
        />
      </View>
    </TouchableOpacity>
  );
};
