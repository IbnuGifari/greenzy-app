import { View } from "react-native";

const d = new Date();
let today = d.getDay();

export function MiniChart() {
  const values = [3, 5, 4, 7, 6, 8, 4];
  const maxValue = Math.max(...values);

  return (
    <View className="h-6 w-full flex-row items-end space-x-1">
      {values.map((value, index) => {
        // Calculate height as a proportion of container height
        const heightPercentage = value / maxValue;

        return (
          <View
            key={index}
            style={{ height: 24 * heightPercentage }} // 24px = h-6 (6*4)
            className={`flex-1 mx-1 rounded-sm ${
              index == today ? "bg-green-700" : "bg-gray-200"
            }`}
          />
        );
      })}
    </View>
  );
}

export default MiniChart;
