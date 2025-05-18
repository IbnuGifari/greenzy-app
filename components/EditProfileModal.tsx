// components/EditProfileModal.tsx
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";

type EditProfileModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: (data: { name: string; username: string; email: string }) => void;
};

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  visible,
  onClose,
  onSave,
}) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = () => {
    // Kirim data yang diperbarui ke parent
    onSave({ name, username, email });
    onClose();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View className="flex-1 justify-center items-center bg-black/50 px-6">
        <View className="bg-white rounded-xl p-6 w-full max-w-md">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-semibold text-[#2E4D30]">
              Edit Profil
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Feather name="x" size={20} color="#2E4D30" />
            </TouchableOpacity>
          </View>

          <Text className="text-sm text-gray-600 mb-1">Nama</Text>
          <TextInput
            className="border border-gray-300 rounded-md px-3 py-2 mb-3"
            value={name}
            onChangeText={setName}
            placeholder="Nama"
          />

          <Text className="text-sm text-gray-600 mb-1">Username</Text>
          <TextInput
            className="border border-gray-300 rounded-md px-3 py-2 mb-3"
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
          />

          <Text className="text-sm text-gray-600 mb-1">Email</Text>
          <TextInput
            className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
          />

          <TouchableOpacity
            className="bg-[#2E4D30] py-2 rounded-md"
            onPress={handleSave}
          >
            <Text className="text-white text-center font-semibold">Simpan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default EditProfileModal;
