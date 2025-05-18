import { TravelHistoryItem } from "@/data/travelData";
import { Text, View } from "react-native";

// Icons for visualization purposes
export const BikeIcon = () => (
  <View className="w-6 h-6 rounded-full bg-emerald-800 flex items-center justify-center">
    <Text className="text-white text-xs">🚲</Text>
  </View>
);

export const CarIcon = () => (
  <View className="w-6 h-6 rounded-full bg-emerald-800 flex items-center justify-center">
    <Text className="text-white text-xs">🚗</Text>
  </View>
);

export interface HistoryListProps {
  travelHistory?: TravelHistoryItem[];
  limit?: number;
}

export function HistoryList({ travelHistory = [], limit }: HistoryListProps) {
  // Sort and limit the history items
  const displayItems = [...travelHistory]
    .sort((itemA, itemB) => Number(itemA.id) - Number(itemB.id))
    .slice(0, limit);

  return (
    <View className="border-2 border-gray-200 rounded-3xl items-center">
      <View className="w-10/12 rounded-xl m-2">
        {displayItems.map((item, index, filteredArray) => (
          <View
            key={item.id}
            className={`flex-row items-center justify-between py-3 ${
              index !== filteredArray.length - 1
                ? "border-b border-gray-200"
                : ""
            }`}
          >
            <View className="flex-row items-center">
              {item.icon}
              <Text className="ml-3 text-gray-800">{item.location}</Text>
            </View>
            <View>
              <Text className="text-right font-semibold">{item.carbon}</Text>
              <Text className="text-xs text-gray-500">kg CO2 eq</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
