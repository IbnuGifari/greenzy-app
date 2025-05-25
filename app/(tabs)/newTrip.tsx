import { TabHeaderTransparent } from "@/components/TabHeaderTransparent";
import React from "react";
import { ScrollView, Text } from "react-native"; // Import necessary components from react-native
import { SafeAreaView } from "react-native-safe-area-context"; // Import SafeAreaView for safe area handling

export default function NewTripScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F6F6F9]">
      <TabHeaderTransparent title="Perjalanan Baru" />
      <ScrollView className="flex-1 px-4">
        <Text className="text-lg font-semibold mb-4">
          Pilih Jenis Perjalanan
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
