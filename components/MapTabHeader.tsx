import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Filter, Info } from "react-native-feather";

export function MapTabHeader({ title }: { title: string }) {
  const [timeFilter, setTimeFilter] = useState("today");
  return (
    <View className="flex-row items-center justify-between px-5 pt-2 pb-4 bg-[#F6F6F9] shadow">
      <View className="flex-col">
        <View>
          <Text className="text-2xl font-semibold">{title}</Text>
          <Text className="text-gray-500/70 mb-4">
            Jelajahi jejak karbon transportasi di ITB.
          </Text>
        </View>
        <MapTabHeaderFilter
          timeFilter={timeFilter}
          setTimeFilter={setTimeFilter}
        />
      </View>
      <View className="flex-row items-center">
        <TouchableOpacity className="p-2 rounded-lg">
          <Filter stroke="#265B3F" width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity className="p-2 ml-2 rounded-l">
          <Info stroke="#265B3F" width={24} height={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function MapTabHeaderFilter({
  timeFilter,
  setTimeFilter,
}: {
  timeFilter: string;
  setTimeFilter: (filter: string) => void;
}) {
  return (
    <View className="flex-row mt-2 gap-2">
      {["today", "week", "month"].map((period) => (
        <TouchableOpacity
          key={period}
          onPress={() => setTimeFilter(period)}
          className={`${
            timeFilter === period
              ? "bg-green-800 rounded-md items-center p-1"
              : "bg-gray-100 rounded-md items-center p-1"
          }`}
        >
          <Text
            className={`${
              timeFilter === period
                ? "text-gray-100 text-sm font-semibold mx-1"
                : "text-green-800 text-sm font-semibold mx-1"
            }`}
          >
            {period === "today"
              ? "Hari ini"
              : period === "week"
              ? "Minggu ini"
              : "Bulan ini"}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
