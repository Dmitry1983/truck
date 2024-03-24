import trucks from "../data/trucks.json";

export type Vehicle = "cargo" | "passenger" | "emergency";

export type Coordinate = {
  latitude: number;
  longitude: number;
};
export type Truck = {
  id: number;
  firstName: string;
  middelName: string;
  lastName: string;
  vehicleNumber: string;
  phoneNumber: string;
  typeVehicle: Vehicle;
  coordinate: Coordinate;
};

const delay = (t: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
};

export const fetchTrucks = async () => {
  await delay(500 + Math.floor(Math.random() * 2000));
  return trucks;
};
