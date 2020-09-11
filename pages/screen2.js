import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import Slider from "@react-native-community/slider";

import { useSlide } from "../context/slideContext";

const Screen2 = ({ navigation }) => {
  const { slide, setSlide } = useSlide();

  useEffect(() => {
    navigation.setParams({
      title: String(slide),
    });
  }, [slide]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 26, textAlign: "center" }}>{slide}</Text>
      <Slider
        style={{ width: 280, height: 60 }}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#D3D3D3"
        maximumTrackTintColor="#000000"
        onValueChange={(e) => setSlide(Math.floor(e))}
        value={slide}
        onStartShouldSetResponder={(event) => console.log(event)}
      />
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
