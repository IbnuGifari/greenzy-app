import { ConfirmationModal } from "@/components/ConfirmationModal";
import EditEmailModal from "@/components/EditEmailModal";
import EditPasswordModal from "@/components/EditPasswordModal";
import { EditProfileModal } from "@/components/EditProfileModal"; // Assuming you have this component
import { TabHeader } from "@/components/TabHeader";
import { Feather, Ionicons } from "@expo/vector-icons";
import { RelativePathString, useRouter } from "expo-router"; // Import useRouter for navigation
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ProfileData = {
  name: string;
  username: string;
};

export default function ProfileScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [editEmailModalVisible, setEditEmailModalVisible] = useState(false);
  const [editPasswordModalVisible, setEditPasswordModalVisible] =
    useState(false);
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

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
            icon={<Ionicons name="car-outline" size={20} color="#166534" />}
            label="Riwayat Perjalanan"
            destination={{ type: "page", route: "../tripHistory" }} // destination={{ type: "page", route: "tripHistory" }}
          />
        </View>
        <View>
          <TouchableOpacity
            className="flex-row items-center justify-between bg-[#F6F6F9] py-4 px-4 rounded-md border border-gray-100"
            onPress={() => setEditEmailModalVisible(true)}
          >
            <View className="flex-row items-center space-x-3">
              <View className="p-2 rounded-full">
                <Feather name="mail" size={20} color="#166534" />
              </View>
              <Text className="text-gray-800 mx-4 font-medium">Ubah Email</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>
        </View>
        <EditEmailModal
          visible={editEmailModalVisible}
          onClose={() => setEditEmailModalVisible(false)}
          onSave={(data) => {
            console.log("Email updated:", data);
            setEditEmailModalVisible(false);
          }}
        />
        <View>
          <TouchableOpacity
            className="flex-row items-center justify-between bg-[#F6F6F9] py-4 px-4 rounded-md border border-gray-100"
            onPress={() => setEditPasswordModalVisible(true)}
          >
            <View className="flex-row items-center space-x-3">
              <View className="p-2 rounded-full">
                <Feather name="lock" size={20} color="#166534" />
              </View>
              <Text className="text-gray-800 mx-4 font-medium">
                Ubah Password
              </Text>
            </View>
            <Feather name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>
        </View>
        <EditPasswordModal
          visible={editPasswordModalVisible}
          onClose={() => setEditPasswordModalVisible(false)}
          onSave={(data) => {
            console.log("Password updated:", data);
            setEditPasswordModalVisible(false);
          }}
        />
        <View>
          <TouchableOpacity
            className="flex-row items-center justify-between bg-[#F6F6F9] py-4 px-4 rounded-md border border-gray-100"
            onPress={() => setShowLogoutModal(true)}
          >
            <View className="flex-row items-center space-x-3">
              <View className="p-2 rounded-full">
                <Feather name="log-out" size={20} color="#166534" />
              </View>
              <Text className="text-gray-800 mx-4 font-medium">
                Keluar Akun
              </Text>
            </View>
            <Feather name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>
        </View>
        <ConfirmationModal
          visible={showLogoutModal}
          title="Konfirmasi Keluar"
          message="Apakah Anda yakin ingin keluar dari akun ini?"
          onCancel={() => setShowLogoutModal(false)}
          onConfirm={() => {
            console.log("User confirmed logout");
            setShowLogoutModal(false);
            // Handle logout logic here
          }}
        />
        <View>
          <TouchableOpacity
            className="flex-row items-center justify-between bg-[#F6F6F9] py-4 px-4 rounded-md border border-gray-100"
            onPress={() => setShowDeleteAccountModal(true)}
          >
            <View className="flex-row items-center space-x-3">
              <View className="p-2 rounded-full">
                <Feather name="trash" size={20} color="#166534" />
              </View>
              <Text className="text-gray-800 mx-4 font-medium">Hapus Akun</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>
        </View>
        <ConfirmationModal
          visible={showDeleteAccountModal}
          title="Konfirmasi Hapus Akun"
          message="Apakah Anda yakin ingin menghapus akun Anda secara permanen?"
          onCancel={() => setShowDeleteAccountModal(false)}
          onConfirm={() => {
            console.log("User confirmed delete account");
            setShowDeleteAccountModal(false);
            // Handle logout logic here
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

// Reusable List Item Component
export type ProfileItemDestination =
  | { type: "modal"; action: "changePassword" | "deleteAccount" }
  | { type: "page"; route: RelativePathString };

export function ProfileItem({
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
