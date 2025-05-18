import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { User } from "react-native-feather";

export function WelcomeHeader() {
  const router = useRouter();
  return (
    <View className="rounded-b-2xl px-5 pt-2 pb-4 mb-4 bg-white">
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-2xl font-bold">Hai, Ibnu!</Text>
          <Text className="text-gray-500">Jumat, 1 Mei</Text>
        </View>
        <TouchableOpacity
          className="w-16 h-16 bg-[#CDDCC8] rounded-full items-center justify-center"
          onPress={() => router.push("/profile")}
        >
          <User stroke="#333" width={32} height={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
