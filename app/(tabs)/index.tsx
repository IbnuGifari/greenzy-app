import { CarbonFootprintOverviewCard } from "@/components/CarbonFootprintOverviewCard";
import { HistoryList } from "@/components/HistoryList";
import { ReadyToGoCard } from "@/components/ReadyToGoCard";
import { WelcomeHeader } from "@/components/WelcomeHeader";
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
let date = d.getDate();

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#F9F9F6]">
        <StatusBar barStyle="dark-content" />
        {/* Header */}
        <WelcomeHeader />
        {/* Main Content */}
        <ScrollView className="px-4 flex-1">
          <ReadyToGoCard />
          <CarbonFootprintOverviewCard />
          <View className="my-2">
            <View className="flex-row rows-2 justify-between items-center mb-4">
              <Text className="text-xl font-bold mb-4">Riwayat Perjalanan</Text>
              <TouchableOpacity
                className="bg-[#CDDCC8] rounded-full px-4 py-2 mb-4"
                onPress={() => router.push("/tripHistory")}
              >
                <Text className="text-[#2E4D30] font-semibold">
                  Lihat Semua
                </Text>
              </TouchableOpacity>
            </View>
            <HistoryList travelHistory={travelHistory} limit={5} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
