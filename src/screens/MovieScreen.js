import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import {
  Box,
  Button,
  ButtonText,
  FlatList,
  Image,
  Text,
  View,
} from "@gluestack-ui/themed";
import { fetchMovies } from "../api";
import DropDown from "../components/DropDown";
  import { useNavigation } from "@react-navigation/native";
import ItemList from "../components/Lists/ItemsList";

const MovieScreen = () => {
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("now_playing");
  const [isLoading, setIsLoading] = useState(false);

  
    const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    fetchMovies(selectedCategory).then(setMovies, setIsLoading(false));
  }, [selectedCategory]);

  const categories = [
    { label: "Now Playing", value: "now_playing" },
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];

  const handleSelect = (value) => {
    setSelectedCategory(value);
  };

  return (
    <SafeAreaView>
      <Box alignItems="center" justifyContent="flex-start" p={20}>
        <DropDown
          selectedValue={selectedCategory}
          onValueChange={handleSelect}
          options={categories}
        />
      </Box>
      {isLoading ? (
        <SafeAreaView>
          <Text>Loading...</Text>
        </SafeAreaView>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ItemList item={item} type="movie" />}
        />
      )}
    </SafeAreaView>
  );
};

export default MovieScreen;
