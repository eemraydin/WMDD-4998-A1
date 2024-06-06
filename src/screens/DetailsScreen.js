import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Image, ScrollView } from 'react-native';
import { fetchDetails } from '../api'; // Assuming this function is already defined

const DetailsScreen = ({ route }) => {
  const { type, id } = route.params;
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDetails(type, id).then((data) => {
      setDetails(data);
      setIsLoading(false);
    });
  }, [type, id]);

  if (isLoading) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{ fontSize: 24, fontWeight: "bold", margin: 10, textAlign:"center" }}>
          {details.title || details.name}
        </Text>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${details.poster_path}`,
          }}
          style={{ width: 200, height: 200, margin: 10, alignSelf:"center"}}
          alt="poster"
        />

        <Text style={{ margin: 40 }}>{details.overview}</Text>
        <Text style={{ margin: 10 }}>
          Release Date: {details.release_date || details.first_air_date}
        </Text>
        <Text style={{ margin: 10 }}>Popularity: {details.popularity}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
