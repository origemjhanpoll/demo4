import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={{ fontSize: 34, textAlign: "center" }}>{0}</Text>
      </View>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: "#DCDCDC",
    padding: 16,
    width: 240,
    borderRadius: 20,
    bottom: 80,
  },
});
