import { BikeIcon, CarIcon } from "@/components/HistoryList"; // Adjust the import path as needed
import React from "react";

export interface TravelHistoryItem {
  id: string;
  icon: React.ReactNode;
  location: string;
  carbon: number;
}

export const travelHistory: TravelHistoryItem[] = [
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
