import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";
const App = () => {
  return (
    <>
      <Text>Header</Text>
      <Slot></Slot>
      <Text>Footer</Text>
    </>
  );
};

export default App;
