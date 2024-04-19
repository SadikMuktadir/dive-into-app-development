import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
const index = () => {
  return (
    <View>
      <Text className="text-[40px]">Hello World</Text>
      <Link href="/profile">Profile</Link>
    </View>
  );
};

export default index;
