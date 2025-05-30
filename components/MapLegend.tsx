import { Text, View } from "react-native";
import { Activity } from "react-native-feather"; // Ensure you have react-native-feather installed}

export function MapLegend() {
  return (
    <View className="bg-[#f6f6f9] rounded-xl px-8 py-4">
      <View className="flex-row items-center mb-4">
        <Activity width={16} height={16} color="#166534" />
        <Text className="font-medium text-gray-900 m-3 items-center">
          Tingkat Emisi Karbon
        </Text>
      </View>
      <View className="flex-row justify-between items-center">
        <View className="flex items-center space-x-2">
          <View className="flex flex-row items-center gap-2">
            <View className="w-3 h-3 bg-green-500 rounded-full"></View>
            <View className="flex flex-col">
              <Text className="text-sm text-gray-600">Rendah</Text>
              <Text className="text-sm text-gray-600">(&lt;1.0 tCO₂)</Text>
            </View>
          </View>
        </View>
        <View className="flex items-center space-x-2">
          <View className="flex flex-row items-center gap-2">
            <View className="w-3 h-3 bg-yellow-500 rounded-full"></View>
            <View className="flex flex-col">
              <Text className="text-sm text-gray-600">Sedang</Text>
              <Text className="text-sm text-gray-600">(1.0-2.5 tCO₂)</Text>
            </View>
          </View>
        </View>
        <View className="flex items-center space-x-2">
          <View className="flex flex-row items-center gap-2">
            <View className="w-3 h-3 bg-red-500 rounded-full"></View>
            <View className="flex flex-col">
              <Text className="text-sm text-gray-600">Tinggi</Text>
              <Text className="text-sm text-gray-600">(&gt;2.5 tCO₂)</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
