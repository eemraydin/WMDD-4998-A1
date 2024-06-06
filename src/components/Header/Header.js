import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Box, Text } from "@gluestack-ui/themed";

const Header = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#2c3e50", height:"auto" }}>
      <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
      <Box
        bg="#2c3e50"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Movies App
        </Text>
      </Box>
    </SafeAreaView>
  );
};

export default Header;
