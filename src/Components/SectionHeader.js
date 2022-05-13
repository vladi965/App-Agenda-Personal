import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { myColors } from "../Styles/Color";

const SectionHeader = ({ title, Onpress, buttonTitle = "Button" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button style={{ borderRadius: 25 }} title={buttonTitle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 25,
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: myColors.white,
    color: myColors.blue,
    borderRadius: 5,
    height: 60,
  },
});

export default SectionHeader;
