import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreenEx = () => { 

  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
    parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    //alignItems: "stretch", // flex-start, flex-end, center, stretch(default), baseline
    flexDirection: "row", // column(default), row
    height: 200,
    justifyContent: "space-between", // flex-start, flex-end, center, space-between, space-around
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    // marginTop: 50,
    // alignSelf: "flex-end",
    top: 50
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
  },
});

export default BoxScreenEx;

