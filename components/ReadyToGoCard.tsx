import { useRouter } from "expo-router"; // Import useRouter for navigation
import { Text, TouchableOpacity, View } from "react-native";

export function ReadyToGoCard() {
  const router = useRouter();
  // Function to handle navigation when the button is pressed
  return (
    <View className="bg-[#CDDCC8] border-2 border-[#2E4D30] border- rounded-3xl p-4 mb-4">
      <View className="flex-row grid grid-cols-2 gap-4 justify-between items-center">
        <View>
          <Text className="text-[#2E4D30] text-2xl font-semibold">
            Siap untuk
          </Text>
          <Text className="text-[#2E4D30] text-2xl font-semibold">
            bepergian?
          </Text>
          <TouchableOpacity
            className="bg-[#2E4D30] items-center px-5 py-2 rounded-full mt-2"
            onPress={() => router.push("/newTrip")}
          >
            <Text className="text-[#F9F9F6] font-medium">Mulai</Text>
          </TouchableOpacity>
        </View>
        <View className="items-center justify-center">
          <Text className="text-[#2E4D30] text-2xl font-semibold">
            Halo Nama Kalian
          </Text>
        </View>
      </View>
    </View>
  );
}
