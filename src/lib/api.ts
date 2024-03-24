import trucks from "../data/trucks.json";

export type Truck = {
  id: number;
};

const delay = (t: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
};

export const fetchTrucks = async () => {
  await delay(300 + Math.floor(Math.random() * 2000));
  return trucks;
};
