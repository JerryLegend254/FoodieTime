import React, { useContext, useEffect, useState } from "react";
import { SearchView } from "../screens/RestaurantScreensStyles";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../services/location/LocationContext";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, []);
  return (
    <SearchView>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchView>
  );
};
