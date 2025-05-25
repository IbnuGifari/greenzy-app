import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";

export function TabHeaderTransparent({ title }: { title: string }) {
  const router = useRouter();
  return (
    <View className="flex-row items-center p-4 bg-transparent">
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
        className="mr-4"
      >
        <Ionicons name="chevron-back" size={24} color="#265B3F" />
      </TouchableOpacity>
    </View>
  );
}
