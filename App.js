import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { StatusBar } from "expo-status-bar";
import Header from "./src/components/Header/Header";
import MovieScreen from "./src/screens/MovieScreen";
import SearchScreen from "./src/screens/SearchScreen";
import TVSeriesScreen from "./src/screens/TVSeriesScreen";
import DetailsScreen from "./src/screens/DetailsScreen";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const MoviesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Movies"
      component={MovieScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={({ route }) => ({
        title: route.params.title,
        headerBackTitle: "Back to list",
      })}
    />
  </Stack.Navigator>
);

const TVShowsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TV Shows"
      component={TVSeriesScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={({ route }) => ({
        title: route.params.title,
        headerBackTitle: "Back to list",
      })}
    />
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Search Results"
      component={SearchScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={({ route }) => ({
        title: route.params.title,
        headerBackTitle: "Back to list",
      })}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
        <Header />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: { height: 50 },
              tabBarLabelStyle: { fontSize: 11 },
            }}
          >
            <Tab.Screen name="Movies" component={MoviesStack} />
            <Tab.Screen name="Search Results" component={SearchStack} />
            <Tab.Screen name="TV Shows" component={TVShowsStack} />
          </Tab.Navigator>
        </NavigationContainer>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
};

export default App;
