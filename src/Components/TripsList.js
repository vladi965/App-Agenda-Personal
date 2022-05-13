import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { myColors } from "../Styles/Color";
import FavoriteButton from "./FavoriteButton";

const CARD_WIDTH = 168;
const CARD_HEIGHT = 220;

const TripsList = ({ list }) => {
  return (
    <View style={styles.container}>
      {list.map((item, index) => {
        return (
          <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.card} key={item.id}>
              <View style={styles.imageBox}>
                <Image style={styles.image} source={item.image} />
              </View>
              <View style={styles.footer}>
                <View style={styles.titleBox}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.location}>{item.location}</Text>
                </View>
                <FavoriteButton />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardContainer: {
    marginLeft: 25,
    marginTop: 15,
    marginBottom: 15,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: myColors.white,
    borderRadius: 12,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    resizeMode: "cover",
  },
  footer: {
    marginTop: 6,
    marginLeft: 16,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  titleBox: {
    flex: 1,
  },
  title: {
    marginVertical: 4,
    fontSize: 15,
    fontWeight: "bold",
    color: myColors.dark,
  },
  location: {
      fontSize: 12,
      color: myColors.btnDark
  }
});

export default TripsList;
