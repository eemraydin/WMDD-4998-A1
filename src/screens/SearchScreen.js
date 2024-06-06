import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  Box,
  Input,
  InputField,
  Image,
  ButtonText,
} from "@gluestack-ui/themed";
import { useState } from "react";

import DropDown from "../components/DropDown";
import { Button } from "@gluestack-ui/themed";
import { FlatList } from "@gluestack-ui/themed";
import { searchMedia } from "../api";
  import { useNavigation } from "@react-navigation/native";
import ItemList from "../components/Lists/ItemsList";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("multi");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const handleSearch = () => {
     setIsLoading(true);
    if (query) {
      searchMedia(query, searchType).then(setResults, setIsLoading(false));
    }
  };

  const types = [
    { label: "movie", value: "movie" },
    { label: "multi", value: "multi" },
    { label: "tv", value: "tv" },
  ];

  console.log(query, searchType, results);

  return (
    <SafeAreaView>
      <Box paddingLeft={20} paddingRight={20} paddingBottom={20}>
        <Input
          variant="outline"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          isRequired={false}
          label="Search"
        >
          <InputField
            placeholder="Enter Text here"
            value={query}
            onChangeText={setQuery}
          />
        </Input>
      </Box>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        marginLeft={20}
        marginRight={20}
        marginBottom={20}
      >
        <Box style={{ flex: 3 }}>
          <DropDown
            selectedValue={searchType}
            onValueChange={setSearchType}
            options={types}
          />
        </Box>
        <Box style={{ flex: 1.5 }}>
          <Button
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            onPress={() => handleSearch()}
          >
            <ButtonText>Search</ButtonText>
          </Button>
        </Box>
      </Box>
      {isLoading ? (
        <SafeAreaView>
          <Text>Loading...</Text>
        </SafeAreaView>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ItemList item={item} type="search" />}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
