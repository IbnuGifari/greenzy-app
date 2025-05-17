import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export function TabHeader({ title }: { title: string }) {
  const router = useRouter();
  return (
    <View className="flex-row items-center p-4 border-b border-gray-200">
      <TouchableOpacity onPress={() => router.back()} className="mr-4">
        <Ionicons name="arrow-back" size={24} color="#265B3F" />
      </TouchableOpacity>
      <Text className="text-xl font-bold">{title}</Text>
    </View>
  );
}
