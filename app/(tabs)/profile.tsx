import { EditProfileModal } from "@/components/EditProfileModal"; // Assuming you have this component
import { TabHeader } from "@/components/TabHeader";
import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { RelativePathString, useRouter } from "expo-router"; // Import useRouter for navigation
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ProfileData = {
  name: string;
  username: string;
  email: string;
};

export default function ProfileScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSaveProfile = (data: ProfileData) => {
    console.log("Data disimpan:", data);
    // Simpan ke backend atau local state
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F6F6F9]">
      <TabHeader title="Profil" />
      <ScrollView className="flex-1 px-4">
        <View className="flex-col items-center">
          <View className="items-center py-4 mb-6">
            <TouchableOpacity
              className="relative"
              onPress={() => setModalVisible(true)}
            >
              {/* Avatar */}
              <Image
                source={require("@/assets/images/avatar.png")} // Replace with actual avatar image
                className="w-24 h-24 rounded-full mb-2"
              />
              <View className="absolute bottom-0 right-0 rounded-3xl p-1">
                <Feather name="edit-3" size={16} color="#2E4D30" />
              </View>
            </TouchableOpacity>
            <Text className="text-xl font-semibold text-[#2E4D30]">
              Ibnu Khairy
            </Text>
            <Text className="text-sm text-gray-500">Bergabung sejak 2025</Text>
          </View>
        </View>
        <EditProfileModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSave={handleSaveProfile}
        />

        {/* Akun Section */}
        <View className="space-y-2">
          <ProfileItem
            icon={<FontAwesome name="car" size={20} color="#166534" />}
            label="Riwayat Perjalanan"
            destination={{ type: "page", route: "../tripHistory" }} // destination={{ type: "page", route: "tripHistory" }}
          />
          <ProfileItem
            icon={<Feather name="key" size={20} color="#166534" />}
            label="Ubah Kata Sandi"
            destination={{ type: "page", route: "../explore" }} // destination={{ type: "modal", action: "changePassword" }}
          />
          <ProfileItem
            icon={<MaterialIcons name="security" size={20} color="#166534" />}
            label="Keamanan Akun"
            destination={{ type: "page", route: "../tripHistory" }} // destination={{ type: "page", route: "security" }}
          />
          <ProfileItem
            icon={<Feather name="log-out" size={20} color="#166534" />}
            label="Keluar Akun"
            destination={{ type: "page", route: "../tripHistory" }} // destination={{ type: "page", route: "logout" }}
          />
          <ProfileItem
            icon={<Ionicons name="trash-bin" size={20} color="#166534" />}
            label="Hapus Akun"
            destination={{ type: "page", route: "../tripHistory" }} // destination={{ type: "modal", action: "deleteAccount" }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Reusable List Item Component
type ProfileItemDestination =
  | { type: "modal"; action: "changePassword" | "deleteAccount" }
  | { type: "page"; route: RelativePathString };

function ProfileItem({
  icon,
  label,
  destination,
}: {
  icon: React.ReactNode;
  label: string;
  destination: ProfileItemDestination;
}) {
  const router = useRouter();
  const handlePress = () => {
    if (destination.type === "modal") {
      // Handle modal opening based on action
      console.log("Opening modal for:", destination.action);
      switch (destination.action) {
        case "changePassword":
          // Open change password modal
          // setShowChangePasswordModal(true);
          break;
        case "deleteAccount":
          // Open delete account confirmation modal
          // setShowDeleteAccountModal(true);
          break;
      }
    } else if (destination.type === "page") {
      // Handle navigation to another page
      console.log("Navigating to:", destination.route);
      // navigation.navigate(destination.route);
      router.push(destination.route);
    }
  };

  return (
    <TouchableOpacity
      className="flex-row items-center justify-between bg-[#F6F6F9] py-4 px-4 rounded-md border border-gray-100"
      onPress={handlePress}
    >
      <View className="flex-row items-center space-x-3">
        <View className="p-2 rounded-full">{icon}</View>
        <Text className="text-gray-800 mx-4 font-medium">{label}</Text>
      </View>
      <Feather name="chevron-right" size={20} color="#999" />
    </TouchableOpacity>
  );
}
