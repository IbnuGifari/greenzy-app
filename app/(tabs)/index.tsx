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
import { Clock } from "react-native-feather";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const d = new Date();
let monthName = d.getMonth();
let monthNames = [
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

const router = useRouter();

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#F6F6F9]">
        <StatusBar barStyle="dark-content" />
        <WelcomeHeader />
        <ScrollView className="px-4 flex-1">
          <ReadyToGoCard />
          <CarbonFootprintOverviewCard bulan={monthNames[monthName]} />
          <View className="my-2">
            <View className="flex-row rows-2 justify-between items-center mb-4">
              <Text className="text-xl font-bold mb-4">Riwayat Perjalanan</Text>
              <TouchableOpacity
                className="flex-row px-4 py-2 mb-4"
                onPress={() => router.push("/tripHistory")}
              >
                <Clock stroke="#008236" width={20} height={20} />
                <Text className="text-green-700 font-regular text-sm ml-1">
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
