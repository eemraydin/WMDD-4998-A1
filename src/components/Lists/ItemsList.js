import React from "react";
import { Box, Button, ButtonText, Image, Text } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const ItemList = ({ item, type }) => {
  const navigation = useNavigation();

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      marginLeft={20}
      marginRight={20}
      marginBottom={10}
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        }}
        style={{ width: 100, height: 150, marginRight: 10 }}
        alt="item poster"
      />
      <Box style={{ flex: 1 }}>
        <Text fontWeight={"bold"}>{item.title || item.name}</Text>
        <Text>Popularity: {item.popularity}</Text>
        <Text>Release date: {item.release_date}</Text>

        <Button
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={() =>
            navigation.navigate("Details", {
              type,
              id: item.id,
              title: item.title || item.name,
            })
          }
        >
          <ButtonText>More Details</ButtonText>
        </Button>
      </Box>
    </Box>
  );
};

export default ItemList;
