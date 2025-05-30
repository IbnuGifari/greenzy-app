import React from "react";
import { Text, View } from "react-native";

export function MapContainer() {
  return (
    <View>
      <Text className="text-gray-500 text-sm">Map Container</Text>
      <Text className="text-2xl font-bold text-[#2E4D30]">Map Placeholder</Text>
      <Text className="text-gray-500/70 text-sm">
        This is where the map will be displayed.
      </Text>
      {/* React native maps will be here */}
    </View>
  );
}
