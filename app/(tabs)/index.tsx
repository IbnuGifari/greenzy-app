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

const BikeIcon = () => (
  <View className="w-6 h-6 rounded-full bg-emerald-800 flex items-center justify-center">
    <Text className="text-white text-xs">🚲</Text>
  </View>
);

const CarIcon = () => (
  <View className="w-6 h-6 rounded-full bg-emerald-800 flex items-center justify-center">
    <Text className="text-white text-xs">🚗</Text>
  </View>
);

interface TravelHistoryItem {
  id: string;
  icon: React.ReactNode;
  location: string;
  carbon: number;
}

const travelHistory: TravelHistoryItem[] = [
  {
    id: "1",
    icon: <BikeIcon />,
    location: "Institut Teknologi Bandung",
    carbon: 33.8,
  },
  {
    id: "2",
    icon: <CarIcon />,
    location: "Bandung Indah Plaza",
    carbon: 10.7,
  },
  {
    id: "3",
    icon: <BikeIcon />,
    location: "Bandung Indah Plaza",
    carbon: 9.7,
  },
  {
    id: "4",
    icon: <BikeIcon />,
    location: "Institut Teknologi Bandung",
    carbon: 33.8,
  },
  {
    id: "5",
    icon: <CarIcon />,
    location: "Bandung Indah Plaza",
    carbon: 10.7,
  },
  {
    id: "6",
    icon: <BikeIcon />,
    location: "Bandung Indah Plaza",
    carbon: 9.7,
  },
  {
    id: "7",
    icon: <BikeIcon />,
    location: "Institut Teknologi Bandung",
    carbon: 33.8,
  },
  {
    id: "8",
    icon: <CarIcon />,
    location: "Bandung Indah Plaza",
    carbon: 10.7,
  },
  {
    id: "9",
    icon: <BikeIcon />,
    location: "Bandung Indah Plaza",
    carbon: 9.7,
  },
  {
    id: "10",
    icon: <BikeIcon />,
    location: "Institut Teknologi Bandung",
    carbon: 33.8,
  },
  {
    id: "11",
    icon: <CarIcon />,
    location: "Bandung Indah Plaza",
    carbon: 10.7,
  },
  {
    id: "12",
    icon: <BikeIcon />,
    location: "Bandung Indah Plaza",
    carbon: 9.7,
  },
  {
    id: "13",
    icon: <BikeIcon />,
    location: "Institut Teknologi Bandung",
    carbon: 33.8,
  },
  {
    id: "14",
    icon: <CarIcon />,
    location: "Bandung Indah Plaza",
    carbon: 10.7,
  },
  {
    id: "15",
    icon: <BikeIcon />,
    location: "Bandung Indah Plaza",
    carbon: 9.7,
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <StatusBar barStyle="dark-content" />
        <View className="rounded-b-2xl px-5 pt-2 pb-4 mb-4 bg-white">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-2xl font-bold">Hai, Ibnu!</Text>
              <Text className="text-gray-500">Jumat, 1 Mei</Text>
            </View>
            <TouchableOpacity className="w-10 h-10 bg-emerald-100 rounded-full items-center justify-center">
              <User stroke="#333" width={20} height={20} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Main Content */}
        <ScrollView className="px-5">
          {/* Ready to go section */}
          <View className="bg-[#265B3F] rounded-3xl p-4 mb-4">
            <View className="flex-row grid grid-cols-2 gap-4 justify-between items-center">
              <View>
                <Text className="text-white text-2xl font-semibold">
                  Siap untuk
                </Text>
                <Text className="text-white text-2xl font-semibold">
                  bepergian?
                </Text>
                <TouchableOpacity className="bg-[#ECECEC] items-center px-5 py-2 rounded-full mt-2">
                  <Text className="text-[#265B3F] font-medium">Mulai</Text>
                </TouchableOpacity>
              </View>
              <View className="items-center justify-center">
                <Text className="text-white text-2xl font-semibold">
                  Halo Nama Kalian
                </Text>
              </View>
            </View>
          </View>
          {/* Carbon Footprint Section */}
          <View className="bg-[#265B3F] rounded-3xl p-4 mb-4">
            <View className="flex-row justify-between items-center">
              <View className="flex-1">
                <Text className="text-white text-2xl font-semibold">
                  Total jejak karbon
                </Text>
                <Text className="text-gray-300 text-xs">
                  Kerja bagus! langkah awal
                </Text>
                <Text className="text-gray-300 text-xs">
                  yang baik untuk lingkungan
                </Text>
              </View>
              <View className="items-center justify-center">
                <View className="w-24 h-24 rounded-full border-2 border-white items-center justify-center">
                  <Text className="text-white text-lg font-bold">9,912</Text>
                  <Text className="text-white text-xs">Kg CO2 eq</Text>
                </View>
              </View>
            </View>
          </View>
          {/* Travel History Section */}
          <View className="mb-6">
            <Text className="text-xl font-bold mb-4">Riwayat Perjalanan</Text>
            <View className="bg-white rounded-xl p-4">
              {travelHistory.map((item, index) => (
                <View
                  key={item.id}
                  className={`flex-row items-center justify-between py-3 ${
                    index !== travelHistory.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  <View className="flex-row items-center">
                    {item.icon}
                    <Text className="ml-3 text-gray-800">{item.location}</Text>
                  </View>
                  <View>
                    <Text className="text-right font-semibold">
                      {item.carbon}
                    </Text>
                    <Text className="text-xs text-gray-500">kg CO2 eq</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
