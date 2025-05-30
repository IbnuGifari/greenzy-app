import React from "react";
import { Text, View } from "react-native";

export type TripOverviewCardProps = {
  // Define any props you need for the TripOverviewCard
  title: string;
  value: number;
  units: string;
  icon?: React.ReactNode;
};

export function TripOverviewCard({
  title,
  value,
  units,
  icon,
}: TripOverviewCardProps) {
  return (
    <View className="bg-white w-5/12 rounded-lg p-3 shadow-md flex-row items-center justify-between">
      <View className="flex-1">
        <Text className="text-gray-500 text-sm">{title}</Text>
        <Text className="text-2xl font-bold text-[#2E4D30]">{value}</Text>
        <Text className="text-gray-500/70 text-sm">{units}</Text>
      </View>
      {icon && <View className=" bg-green-100 rounded-xl">{icon}</View>}
    </View>
  );
}
