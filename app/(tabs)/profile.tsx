import { EditProfileModal } from "@/components/EditProfileModal"; // Assuming you have this component
import { TabHeader } from "@/components/TabHeader";
import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
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
    <SafeAreaView className="flex-1 bg-neutral-50">
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
              <View className="absolute bottom-0 right-0 bg-[#cddcc8] rounded-3xl p-1">
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
            icon={<FontAwesome name="car" size={16} color="#2E4D30" />}
            label="Riwayat Perjalanan"
          />
          <ProfileItem
            icon={<Feather name="key" size={16} color="#2E4D30" />}
            label="Ubah Kata Sandi"
          />
          <ProfileItem
            icon={<MaterialIcons name="security" size={16} color="#2E4D30" />}
            label="Keamanan Akun"
          />
          <ProfileItem
            icon={<Feather name="log-out" size={16} color="#2E4D30" />}
            label="Keluar Akun"
          />
          <ProfileItem
            icon={<Ionicons name="trash-bin" size={16} color="#2E4D30" />}
            label="Hapus Akun"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Reusable List Item Component
function ProfileItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <TouchableOpacity className="flex-row items-center justify-between bg-white py-4 px-4 rounded-md border border-gray-100">
      <View className="flex-row items-center space-x-3">
        <View className="bg-[#CDDCC8] p-2 rounded-full">{icon}</View>
        <Text className="text-[#2E4D30] mx-4 font-medium">{label}</Text>
      </View>
      <Feather name="chevron-right" size={20} color="#999" />
    </TouchableOpacity>
  );
}
