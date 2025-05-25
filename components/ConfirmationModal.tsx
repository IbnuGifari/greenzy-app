import { Modal, Text, TouchableOpacity, View } from "react-native";

export function ConfirmationModal({
  visible,
  title,
  message,
  onCancel,
  onConfirm,
}: {
  visible: boolean;
  title: string;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View className="flex-1 justify-center items-center bg-black/40">
        <View className="bg-white p-6 rounded-lg w-[80%]">
          <Text className="text-lg font-semibold text-[#2E4D30] mb-2">
            {title}
          </Text>
          <Text className="text-sm text-gray-600 mb-4">{message}</Text>
          <View className="flex-row justify-end gap-4">
            <TouchableOpacity onPress={onCancel}>
              <Text className="text-gray-500">Batal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onConfirm}>
              <Text className="text-red-600 font-semibold">Ya</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
