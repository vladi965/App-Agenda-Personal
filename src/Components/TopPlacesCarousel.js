import React from "react";
import {FlatList, View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import { myColors } from '../Styles/Color';
import FavoriteButton from "./FavoriteButton";

const CARD_WIDTH = 410 - 100;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + 30;

const TopPlacesCarousel = ({ list }) => {
  return (
    <FlatList
      data={list}
      horizontal
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={(i) => i.id}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            style={{
              marginLeft: 15,
              marginRight: index == list.length - 1 ? 30 : 0,
            }}
          >
            <View style={(styles.card)}>
                <FavoriteButton style={styles.favorite}/>
              <View style={styles.imageBox}>
                <Image source={item.image} style={styles.image} />
              </View>
              <View style={styles.titleBox}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.location}>{item.location}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    paddingHorizontal: 10,
    marginVertical: 10
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: "cover",
  },
  titleBox:{
    position: "absolute",
    top: CARD_HEIGHT - 80,
    left: 25
  },
  title:{
    fontSize: 18,
    fontWeight: "bold",
    color: myColors.white
  },
  location: {
    fontSize: 14,
    color: myColors.white
  },
  favorite:{
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 1
  }
});

export default TopPlacesCarousel;
