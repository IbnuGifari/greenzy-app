import { CarbonFootprintOverviewCard } from "@/components/CarbonFootprintOverviewCard";
import { HistoryList } from "@/components/HistoryList";
import { ReadyToGoCard } from "@/components/ReadyToGoCard";
import { travelHistory } from "@/data/travelData";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { User } from "react-native-feather";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const router = useRouter();

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
let date = d.getDay();

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <StatusBar barStyle="dark-content" />
        <View className="rounded-b-2xl px-5 pt-2 pb-4 mb-4 bg-white">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-2xl font-bold">Hai, Ibnu!</Text>
              <Text className="text-gray-500">
                {day}, {date} {monthName}
              </Text>
            </View>
            <TouchableOpacity className="w-10 h-10 bg-emerald-100 rounded-full items-center justify-center">
              <User stroke="#333" width={20} height={20} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Main Content */}
        <ScrollView className="px-5">
          {/* Ready to go section */}
          <ReadyToGoCard />
          {/* Carbon Footprint Overview Section */}
          <CarbonFootprintOverviewCard />
          {/* Travel History Section */}
          <View className="mb-6">
            <View className="flex-row rows-2 justify-between items-center mb-4">
              <Text className="text-xl font-bold mb-4">Riwayat Perjalanan</Text>
              <TouchableOpacity
                className="bg-[#265B3F] rounded-full px-4 py-2 mb-4"
                onPress={() => router.push("/tripHistory")}
              >
                <Text className="text-white font-semibold">Lihat Semua</Text>
              </TouchableOpacity>
            </View>

            <HistoryList travelHistory={travelHistory} limit={5} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
