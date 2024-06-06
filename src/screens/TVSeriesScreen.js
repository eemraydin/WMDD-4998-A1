import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Box, Image, Button, ButtonText } from "@gluestack-ui/themed";
import { useEffect } from "react";
import { useState } from "react";
import Dropdown from "../components/DropDown";
import { fetchTVShows } from "../api";
import { FlatList } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import ItemList from "../components/Lists/ItemsList";

const TVSeriesScreen = () => {
  const [tvShows, setTVShows] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("airing_today");
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    fetchTVShows(selectedCategory).then(setTVShows, setIsLoading(false));
  }, [selectedCategory]);

  const categories = [
    { label: "Airing Today", value: "airing_today" },
    { label: "On the Air", value: "on_the_air" },
    { label: "Poupular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
  ];

  return (
    <SafeAreaView>
      <Box alignItems="center" p={20}>
        <Dropdown
          selectedValue={selectedCategory}
          onValueChange={setSelectedCategory}
          options={categories}
        />
      </Box>
      {isLoading ? (
        <SafeAreaView>
          <Text>Loading...</Text>
        </SafeAreaView>
      ) : (
        <FlatList
          data={tvShows}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ItemList item={item} type="tv" />}
        />
      )}
    </SafeAreaView>
  );
};

export default TVSeriesScreen;
