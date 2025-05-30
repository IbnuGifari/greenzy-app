import { FootPrintsGraph } from "@/components/FootprintsGraph";
import { HistoryList } from "@/components/HistoryList"; // Your existing component
import { TabHeader } from "@/components/TabHeader";
import { TripOverviewCard } from "@/components/TripOverviewCard";
import { travelHistory } from "@/data/travelData"; // Your existing data
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TripHistoryScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#F6F6F9]">
      <TabHeader title="Riwayat Perjalanan" />
      <FootPrintsGraph />
      <View className="p-4">
        <Text className="text-lg font-semibold mb-4">Statistik Perjalanan</Text>
        <View className="flex-row flex-wrap justify-between gap-4">
          <TripOverviewCard
            title="Total Perjalanan"
            value={travelHistory.length}
            units="Perjalanan"
            icon={<Ionicons name="car" size={32} color="#2E4D30" />}
          />
          <TripOverviewCard
            title="Total Emisi"
            value={69} // {travelHistory.reduce((acc, trip) => acc + trip.carbonEmissions, 0)}
            units="kg CO2"
            icon={<Ionicons name="leaf" size={32} color="#2E4D30" />}
          />
          <TripOverviewCard
            title="Total Jarak Perjalanan"
            value={189} // {travelHistory.reduce((acc, trip) => acc + trip.carbonEmissions, 0) / travelHistory.length}
            units="km"
            icon={<Ionicons name="stats-chart" size={32} color="#2E4D30" />}
          />
          <TripOverviewCard
            title="Rata-rata Jarak Perjalanan"
            value={5.9}
            units="km"
            icon={<Ionicons name="analytics" size={32} color="#2E4D30" />}
          />
        </View>
      </View>
      <View>
        <Text className="text-lg font-semibold mb-4 px-4">Riwayat</Text>
      </View>
      <ScrollView className="flex-1 px-4">
        <HistoryList travelHistory={travelHistory} />
      </ScrollView>
    </SafeAreaView>
  );
}
