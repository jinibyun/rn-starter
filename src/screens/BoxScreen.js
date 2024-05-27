import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => { 

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child 1</Text>
      <Text style={styles.textTwoStyle}>Child 2</Text>
      <Text style={styles.textThreeStyle}>Child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    alignItems: "stretch", // flex-start, flex-end, center, stretch(default), baseline
    //flexDirection: "row", // column(default), row
    height: 200,
    //justifyContent: "space-around", // flex-start, flex-end, center, space-between, space-around
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    // marginVertical: 20,
    // marginHorizontal: 20,
    // margin: 20,
    flex:4
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "blue",
    // marginVertical: 20,
    // marginHorizontal: 20,
    // margin: 20,
    flex:4,
    // alignSelf: "center" // flex-start, flex-end, center   It override parent alignItems
    // position: "absolute", // absolute, relative, fixed
    fontSize: 18,
    // bottom: 10  // make space from bottom

    ...StyleSheet.absoluteFillObject  // make child to cover whole parent (same as below)
    // position: "absolute",
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
    // marginVertical: 20,
    // marginHorizontal: 20,
    // margin: 20,
    flex:2
  },
});

export default BoxScreen;

