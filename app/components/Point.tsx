import React from "react";
import { Marker } from "react-native-maps";
import { Vehicle, Truck } from "../lib";
import cargo from "../../assets/cargo.png";
import passenger from "../../assets/passenger.png";
import emergency from "../../assets/emergency.png";

interface Props {
  point: Truck;
}

function images(type: Vehicle) {
  const imagesMap = new Map([
    ["cargo", cargo],
    ["passenger", passenger],
    ["emergency", emergency],
  ]);

  return imagesMap.get(type);
}

export const renderPoint = (point) => {
  const { vehicleNumber } = point;

  return (
    <React.Fragment key={vehicleNumber}>
      <Point point={point} />
    </React.Fragment>
  );
};
export const Point = ({ point }: Props) => {
  const { coordinate, typeVehicle, id } = point;

  if (!point) {
    return null;
  }

  return (
    <Marker
      coordinate={coordinate}
      anchor={{ x: 0, y: 1 }}
      image={images(typeVehicle)}
      identifier={id.toString()}
    />
  );
};
