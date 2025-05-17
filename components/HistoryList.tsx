import { Text, View } from "react-native";

// Icons for visualization purposes
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

interface HistoryListProps {
  travelHistory?: TravelHistoryItem[];
  limit?: number;
}

export function HistoryList({ travelHistory = [], limit }: HistoryListProps) {
  // Sort and limit the history items
  const displayItems = [...travelHistory]
    .sort((itemA, itemB) => Number(itemA.id) - Number(itemB.id))
    .slice(0, limit);

  return (
    <View className="items-center border-2 border-gray-200 rounded-3xl">
      <View className="bg-white w-11/12 rounded-xl p-2">
        {displayItems.map((item, index, filteredArray) => (
          <View
            key={item.id}
            className={`flex-row items-center justify-between py-3 ${
              index !== filteredArray.length - 1
                ? "border-b border-gray-200"
                : ""
            }`}
          >
            <View className="flex-row items-center">
              {item.icon}
              <Text className="ml-3 text-gray-800">{item.location}</Text>
            </View>
            <View>
              <Text className="text-right font-semibold">{item.carbon}</Text>
              <Text className="text-xs text-gray-500">kg CO2 eq</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
