import { StyleSheet, Text, View, Modal as RNmodal } from "react-native";
import React from "react";
import Button from "./Button";

const Modal = ({
  modalVisible,
  selectedItem,
  onCancelModal,
  onDeleteModal,
}) => {
  return (
    <RNmodal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalMainView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Eliminar jugador</Text>
          <Text style={styles.modalText}>
            ¿Está seguro que desea eliminar al jugador "{""}
            <Text style={styles.modalBoldText}>{selectedItem?.value}</Text>" ?
          </Text>
          <View style={styles.modalActions}>
            <Button
              styleButtonType={styles.buttonCancel}
              title="Cancelar ❌"
              onPress={onCancelModal}
            />
            <Button
              styleButtonType={styles.buttonDelete}
              title="Eliminar ✔"
              onPress={() => {
                onDeleteModal(selectedItem.id);
              }}
            />
          </View>
        </View>
      </View>
    </RNmodal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalMainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#F0F8FF",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 5,
  },
  modalTitle: {
    padding: 10,
    borderRadius: 5,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
  },
  modalBoldText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#6CACE4",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonCancel: {
    backgroundColor: "#FFB81C",
  },
  buttonDelete: {
    backgroundColor: "#FF4500",
  },
});
