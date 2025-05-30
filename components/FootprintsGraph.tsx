import React from "react";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

export function FootPrintsGraph() {
  return (
    <View className="bg-[#F6F6F9] items-center">
      <Text className="mt-2 text-lg font-semibold">
        Grafik Jejak Karbon Kamu
      </Text>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width - 32} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#f6f6f9",
          backgroundGradientFrom: "#f6f6f9",
          backgroundGradientTo: "#f6f6f9",
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(46, 77, 48, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(46, 77, 48, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#2e4d30",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          marginRight: 8,
          marginLeft: 8,
          borderRadius: 24,
          borderColor: "#112e4d30",
          borderWidth: 1,
          padding: 10,
        }}
      />
    </View>
  );
}
