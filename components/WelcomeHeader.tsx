import { Text, TouchableOpacity, View } from "react-native";
import { User } from "react-native-feather";

export function WelcomeHeader() {
  return (
    <View className="rounded-b-2xl px-5 pt-2 pb-4 mb-4 bg-white">
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-2xl font-bold">Hai, Ibnu!</Text>
          <Text className="text-gray-500">Jumat, 1 Mei</Text>
        </View>
        <TouchableOpacity className="w-10 h-10 bg-emerald-100 rounded-full items-center justify-center">
          <User stroke="#333" width={20} height={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
