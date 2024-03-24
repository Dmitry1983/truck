import React from "react";
import { StyleProp, ViewStyle, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Point } from "./Point";
import { Truck } from "../lib";

interface Styles {
  container: StyleProp<ViewStyle>;
  map: StyleProp<ViewStyle>;
}

const styles: Styles = {
  container: {
    width: "100%",
    height: 200,
  },
  map: {
    flex: 1,
    borderRadius: 16,
    margin: 8,
  },
};

interface IProps {
  point: Truck;
}

export const MiniMap: React.FC<IProps> = (props) => {
  const { point } = props;

  const initialRegion = {
    latitudeDelta: 0.5,
    longitudeDelta: 1,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        scrollEnabled={false}
        initialRegion={{ ...initialRegion, ...point.coordinate }}
      >
        <Point point={point} />
      </MapView>
    </View>
  );
};
