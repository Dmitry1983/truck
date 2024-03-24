import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import flagBlueImg from "../../../assets/flag-blue.png";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { Truck, fetchTrucks } from "../../lib/api";

const i18n = new I18n({
  en: { welcome: "Hello" },
  ja: { welcome: "こんにちは" },
  ru: { welcome: "Привет" },
});

// Set the locale once at the beginning of your app.
//i18n.locale = getLocales()[0].languageCode;
i18n.locale = "en";

console.log(i18n.t("welcome"));

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / 500;
const LATITUDE = 44.713367;
const LONGITUDE = 37.783157;
const LATITUDE_DELTA = 0.3;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const Main = () => {
  const {
    isPending,
    error,
    data: dataQuery,
    refetch,
  } = useQuery<Truck[], Error>({
    queryKey: ["trucks"],
    queryFn: fetchTrucks,
  });

  console.log({ dataQuery });
  return (
    <View style={styles.container}>
      {/* <Text>{i18n.t("welcome")}</Text> */}
      <StatusBar style="auto" />
      <MapView
        style={{ width: "100%", height: "100%" }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        zoomEnabled={true}
        zoomTapEnabled
        scrollEnabled={true}
        showsScale={true}
      >
        <Marker
          coordinate={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
          }}
          anchor={{ x: 0.69, y: 1 }}
          image={flagBlueImg}
        ></Marker>
        <Marker
          coordinate={{
            latitude: 44.801302,
            longitude: 37.877818,
          }}
          anchor={{ x: 0.69, y: 1 }}
          image={flagBlueImg}
        />
        <Marker
          coordinate={{
            latitude: 45.801302,
            longitude: 37.877818,
          }}
          anchor={{ x: 0.69, y: 1 }}
          image={flagBlueImg}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
