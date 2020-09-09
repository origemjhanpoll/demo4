import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

const Screen2 = () => {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 26, textAlign: "center" }}>
        {Math.floor(value)}
      </Text>
      <Slider
        style={{ width: 280, height: 60 }}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#D3D3D3"
        maximumTrackTintColor="#000000"
        onValueChange={(e) => setValue(e)}
        value={value}
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
