import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
const App = () => {
  return (
    <>
      <Stack>
        <Stack.screen
          name="index"
          option={{
            headerShown: false,
          }}
        ></Stack.screen>
      </Stack>
    </>
  );
};

export default App;
