import { HistoryList } from "@/components/HistoryList"; // Your existing component
import { TabHeader } from "@/components/TabHeader";
import { travelHistory } from "@/data/travelData"; // Your existing data
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TripHistoryScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-neutral-50">
      <TabHeader title="Riwayat Perjalanan" />

      <ScrollView className="flex-1 px-4">
        <HistoryList travelHistory={travelHistory} />
      </ScrollView>
    </SafeAreaView>
  );
}
