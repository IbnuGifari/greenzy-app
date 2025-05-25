import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // Import useRouter for navigation
import { Text, TouchableOpacity, View } from "react-native";

export function ReadyToGoCard() {
  const router = useRouter();
  // Function to handle navigation when the button is pressed
  return (
    <View className="bg-green-800 rounded-2xl p-4 mb-4">
      <View className="flex-row grid grid-cols-2 gap-4 justify-between items-center">
        <View className="items-left justify-center">
          <Text className="text-gray-50 text-2xl font-semibold">
            Siap untuk bepergian?
          </Text>
          <Text className="text-gray-50 text-sm font-regular">
            Rekam jejak karbon perjalanan Anda
          </Text>
          <TouchableOpacity
            className="bg-gray-100 w-3/6 items-center px-5 py-2 rounded-full mt-4"
            onPress={() => router.push("/newTrip")}
          >
            <Text className="text-green-800 font-medium">Mulai</Text>
          </TouchableOpacity>
        </View>
        <View className="items-center justify-center">
          <Ionicons name="bicycle" size={100} color="#F3F4F6" />
        </View>
      </View>
    </View>
  );
}
