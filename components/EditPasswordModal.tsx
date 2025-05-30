// components/EditProfileModal.tsx
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";

type EditPasswordModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: (data: { password: string; confirmPassword: string }) => void;
};

export const EditPasswordModal: React.FC<EditPasswordModalProps> = ({
  visible,
  onClose,
  onSave,
}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = () => {
    // Kirim data yang diperbarui ke parent
    onSave({ password, confirmPassword });
    // Tutup modal setelah menyimpan
    onClose();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View className="flex-1 justify-center items-center bg-black/50 px-6">
        <View className="bg-white rounded-2xl p-6 w-full max-w-md">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-semibold text-[#2E4D30]">
              Edit Password
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Feather name="x" size={20} color="#2E4D30" />
            </TouchableOpacity>
          </View>

          <Text className="text-sm text-gray-600 mb-1">Password</Text>
          <TextInput
            className="border border-gray-300 rounded-md px-3 py-2 mb-3"
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
          />

          <Text className="text-sm text-gray-600 mb-1">
            Konfirmasi Password
          </Text>
          <TextInput
            className="border border-gray-300 rounded-md px-3 py-2 mb-3"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Konfirmasi Password"
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

export default EditPasswordModal;
