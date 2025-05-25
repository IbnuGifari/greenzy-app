import { Text, View } from "react-native";
import { CheckCircle } from "react-native-feather";
import { MiniChart } from "./MiniChart";

export function CarbonFootprintOverviewCard({ bulan }: { bulan: string }) {
  return (
    <View className="bg-gray-50 rounded-2xl p-4 mb-4 shadow-sm border border-green-100">
      <View className="flex-row justify-between items-center">
        <View className="flex-1">
          <Text className="text-gray-800 text-2xl font-semibold">
            Total jejak karbon
          </Text>
          <View className="flex-row">
            <CheckCircle stroke="#008236" height={20} width={20} />
            <Text className="text-green-800 text-sm font-regular ml-2">
              Bulan {bulan}
            </Text>
          </View>

          <Text className="text-gray-800 text-xs">
            Kerja bagus! langkah awal yang baik untuk lingkungan
          </Text>
        </View>
        <View className="items-center justify-center">
          <Text className="text-green-800 text-3xl font-bold">9,912</Text>
          <Text className="text-gray-500 text-xs">Kg CO2 eq</Text>
        </View>
      </View>
      <View className="mt-2 h-12 w-full">
        <View className="flex-1 justify-between">
          <Text className="text-gray-400 text-xs font-md">
            Tren minggu ini:
          </Text>
        </View>
        <View className="flex-1">
          <MiniChart />
        </View>
      </View>
    </View>
  );
}
