import React, { useContext } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/RestaurantInfoCard";
import {
  ActivityLoadingView,
  SafeArea,
  SearchView,
} from "./RestaurantScreensStyles";
import { RestaurantContext } from "../../services/restaurants/RestaurantContext";

const RestaurantSceens = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantContext);
  return (
    <SafeArea>
      <SearchView>
        <Searchbar />
      </SearchView>
      {isLoading && (
        <ActivityLoadingView>
          <ActivityIndicator
            size={40}
            animating={true}
            color={MD2Colors.red800}
          />
        </ActivityLoadingView>
      )}
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantSceens;
