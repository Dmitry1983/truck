import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTrucks } from "../lib/api";
import { switchElement } from "./utils";

const StoreContext = React.createContext(undefined);

const stateReducer = (state, { type, payload }) => {
  const filterUpdate = switchElement(state.filter, payload);
  switch (type) {
    case "SET_DATA":
      return {
        ...state,
        data: payload,
      };

    case "SWITCH_FILTER":
      return {
        ...state,
        filter: filterUpdate,
      };
    default:
      throw new Error();
  }
};

const initialState = {
  filter: [],
  data: [],
  selectedCard: null,
};

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = React.useReducer(stateReducer, initialState);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["trucks"],
    queryFn: fetchTrucks,
  });

  React.useEffect(() => {
    data?.length &&
      dispatch({
        type: "SET_DATA",
        payload: data,
      });
  }, [data]);

  const query = {
    refetch,
    isLoading,
  };

  const shearching = (item, filters: string) => {
    const typeVehicle = item?.typeVehicle;
    const result = [];
    for (let index = 0; index < filters.length; index++) {
      const element = filters[index];
      if (typeVehicle === element) {
        result.push(true);
      }
    }
    return result?.length;
  };

  const filtredData = store?.filter?.length
    ? data.filter((e) => shearching(e, store?.filter))
    : data;

  return (
    <StoreContext.Provider
      value={{
        store,
        dispatch,
        query,
        filtredData,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export function useStoreContext() {
  const store = React.useContext(StoreContext);

  if (store === undefined) {
    throw new Error("useStoreContext must be used with a StoreContext");
  }

  return store;
}
