import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { Calendar, User } from "react-native-feather";

const weekday = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];
const month = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const d = new Date();
let day = weekday[d.getDay()];
let monthName = month[d.getMonth()];
let date = d.getDate();

export function WelcomeHeader() {
  const router = useRouter();
  return (
    <View className="rounded-b-2xl px-5 pt-2 pb-4 mb-4 bg-[#F6F9F9]">
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-2xl font-bold">Hai, Ibnu!</Text>
          <View className="flex-row items-center mt-1">
            <Calendar stroke="#99a1af" width={20} height={20} />
            <Text className="text-gray-500 text-sm mx-2">
              {day}, {date} {monthName}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          className="w-16 h-16 rounded-full items-center justify-center"
          onPress={() => router.push("/profile")}
        >
          <User stroke="#333" width={32} height={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
