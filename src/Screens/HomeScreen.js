import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import MainHeader from "../Components/MainHeader";
import ScreenHeader from "../Components/ScreenHeader";
import SectionHeader from "../Components/SectionHeader";
import TopPlacesCarousel from "../Components/TopPlacesCarousel";
import TripsList from "../Components/TripsList";
import { PLACES, TOP_PLACES } from "../Data";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <MainHeader title="Travel App" />
      <ScreenHeader mainTitle="Find Your" secondTitle="Dream Trip" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader
          title="Popular Trips"
          buttonTitle="See All"
          onPress={() => {}}
        />
        <TripsList list={PLACES} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;

/* export default function HomeScreen(props) {
    const { navigation } = props;

    const goToSettings = () => {
        navigation.navigate('Settings')
    }

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      
      <Button onPress={goToSettings} title='Ir a Ajustes'/>
    </SafeAreaView>
  )
} */
