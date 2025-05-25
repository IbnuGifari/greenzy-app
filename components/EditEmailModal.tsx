// components/EditProfileModal.tsx
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";

type EditEmailModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: (data: { email: string; confirmEmail: string }) => void;
};

export const EditEmailModal: React.FC<EditEmailModalProps> = ({
  visible,
  onClose,
  onSave,
}) => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const handleSave = () => {
    // Kirim data yang diperbarui ke parent
    onSave({ email, confirmEmail });
    // Tutup modal setelah menyimpan
    onClose();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View className="flex-1 justify-center items-center bg-black/50 px-6">
        <View className="bg-white rounded-xl p-6 w-full max-w-md">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-semibold text-[#2E4D30]">
              Edit Email
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Feather name="x" size={20} color="#2E4D30" />
            </TouchableOpacity>
          </View>

          <Text className="text-sm text-gray-600 mb-1">Email</Text>
          <TextInput
            className="border border-gray-300 rounded-md px-3 py-2 mb-3"
            value={email}
            onChangeText={setEmail}
            placeholder="ibnu@mail.com"
          />

          <Text className="text-sm text-gray-600 mb-1">Konfirmasi Email</Text>
          <TextInput
            className="border border-gray-300 rounded-md px-3 py-2 mb-3"
            value={confirmEmail}
            onChangeText={setConfirmEmail}
            placeholder="Konfirmasi email"
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

export default EditEmailModal;
