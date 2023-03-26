import React, { useContext, useState, useEffect } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { FlatList } from "react-native";
import RestaurantInfoCard from "../components/RestaurantInfoCard";
import { ActivityLoadingView, SafeArea } from "./RestaurantScreensStyles";
import { RestaurantContext } from "../../services/restaurants/RestaurantContext";
import { Search } from "../components/SearchComponent";

const RestaurantSceens = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantContext);

  return (
    <SafeArea>
      <Search />
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
