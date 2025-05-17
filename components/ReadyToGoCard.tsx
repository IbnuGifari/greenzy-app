import { Text, TouchableOpacity, View } from "react-native";

export function ReadyToGoCard() {
  return (
    <View className="bg-[#265B3F] rounded-3xl p-4 mb-4">
      <View className="flex-row grid grid-cols-2 gap-4 justify-between items-center">
        <View>
          <Text className="text-white text-2xl font-semibold">Siap untuk</Text>
          <Text className="text-white text-2xl font-semibold">bepergian?</Text>
          <TouchableOpacity className="bg-[#ECECEC] items-center px-5 py-2 rounded-full mt-2">
            <Text className="text-[#265B3F] font-medium">Mulai</Text>
          </TouchableOpacity>
        </View>
        <View className="items-center justify-center">
          <Text className="text-white text-2xl font-semibold">
            Halo Nama Kalian
          </Text>
        </View>
      </View>
    </View>
  );
}
