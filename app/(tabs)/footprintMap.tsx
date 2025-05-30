import { MapContainer } from "@/components/MapContainer";
import { MapLegend } from "@/components/MapLegend";
import { MapTabHeader } from "@/components/MapTabHeader";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FootprintMapScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F6F6F9]">
      <MapTabHeader title="Peta Jejak Karbon" />
      <ScrollView className="flex-1 px-4">
        {/* Here you can add your map component */}
        <MapContainer />
      </ScrollView>
      <MapLegend />
    </SafeAreaView>
  );
}
