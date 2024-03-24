import { StyleSheet, View, Dimensions, ActivityIndicator } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { renderPoint } from "../../components";
import { useStoreContext } from "../../lib";

const { width, height } = Dimensions.get("screen");

const ASPECT_RATIO = width / height;
const LATITUDE = 44.713367;
const LONGITUDE = 37.983157;
const LATITUDE_DELTA = 12;
const LONGITUDE_DELTA = ASPECT_RATIO;

const initialRegion = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

export default function Map() {
  const { store, filtredData } = useStoreContext();
  const { data, filter } = store;

  const showData = filter?.length ? filtredData : data;

  return (
    <View style={styles.container}>
      {data ? (
        <MapView
          ref={(mapRef) => (mapRef === null ? null : mapRef.fitToElements())}
          style={{ flex: 1, width: "100%", height: "100%" }}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}
        >
          {showData.map(renderPoint)}
        </MapView>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
