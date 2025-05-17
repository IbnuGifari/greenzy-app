import { Text, View } from "react-native";

export function CarbonFootprintOverviewCard() {
  return (
    <View className="bg-[#265B3F] rounded-3xl p-4 mb-4">
      <View className="flex-row justify-between items-center">
        <View className="flex-1">
          <Text className="text-white text-2xl font-semibold">
            Total jejak karbon
          </Text>
          <Text className="text-gray-300 text-xs">
            Kerja bagus! langkah awal
          </Text>
          <Text className="text-gray-300 text-xs">
            yang baik untuk lingkungan
          </Text>
        </View>
        <View className="items-center justify-center">
          <View className="w-24 h-24 rounded-full border-2 border-white items-center justify-center">
            <Text className="text-white text-lg font-bold">9,912</Text>
            <Text className="text-white text-xs">Kg CO2 eq</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
