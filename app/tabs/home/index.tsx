import {
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from "react-native";
import {
  useLanguageContext,
  useStoreContext,
  useRefresh,
  searchElement,
} from "../../lib";
import { Card, Switcher } from "../../components";

interface Styles {
  container: StyleProp<ViewStyle>;
  switcherContainer: StyleProp<ViewStyle>;
  contentContainer: StyleProp<ViewStyle>;
}

const styles: Styles = {
  container: {
    flex: 1,
  },
  switcherContainer: {
    height: 48,
    alignContent: "center",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
};

export default function Home() {
  const { state } = useLanguageContext();
  const { store, query, dispatch, filtredData } = useStoreContext();

  const { data, filter } = store;
  const { refetch } = query;

  const { isRefetchingByUser, refetchByUser } = useRefresh(refetch);

  const showData = filter?.length ? filtredData : data;

  const switcherProps = (name: string) => {
    return {
      value: searchElement(filter, name),
      title: state.i18n.t(name),
      onChange: () => {
        dispatch({
          type: "SWITCH_FILTER",
          payload: name,
        });
      },
    };
  };

  const renderCard = ({ item }) => {
    return <Card item={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.switcherContainer}>
        <Switcher {...switcherProps("cargo")} />
        <Switcher {...switcherProps("passenger")} />
        <Switcher {...switcherProps("emergency")} />
      </View>
      <FlatList
        data={showData}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        refreshControl={
          <RefreshControl
            refreshing={isRefetchingByUser}
            onRefresh={refetchByUser}
          />
        }
        ListEmptyComponent={<ActivityIndicator />}
      />
    </View>
  );
}
