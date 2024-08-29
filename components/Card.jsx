import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ item }) => {
  return (
    <View style={{ justifyContent: "center", alignContent: "center" }}>
      <View style={[styles.cardView, { padding: 10 }]}>
        <Text>{item}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "#f2c4c2",
    minHeight: 100,
    minWidth: 300,

    marginHorizontal: 10,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
    borderRadius: 12,
  },
});
