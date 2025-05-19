import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // Import useRouter for navigation
import { Text, TouchableOpacity, View } from "react-native";

export function ReadyToGoCard() {
  const router = useRouter();
  // Function to handle navigation when the button is pressed
  return (
    <View className="bg-[#CDDCC8] rounded-3xl p-4 mb-4">
      <View className="flex-row grid grid-cols-2 gap-4 justify-between items-center">
        <View className="items-center justify-center">
          <Text className="text-[#2E4D30] text-3xl font-semibold">
            Siap untuk
          </Text>
          <Text className="text-[#2E4D30] text-3xl font-semibold">
            bepergian?
          </Text>
          <TouchableOpacity
            className="bg-[#2E4D30] w-5/6 items-center px-5 py-2 rounded-full mt-2"
            onPress={() => router.push("/newTrip")}
          >
            <Text className="text-[#F9F9F6] font-medium">Mulai</Text>
          </TouchableOpacity>
        </View>
        <View className="items-center justify-center">
          <Ionicons name="bicycle" size={100} color="#2E4D30" />
        </View>
      </View>
    </View>
  );
}
