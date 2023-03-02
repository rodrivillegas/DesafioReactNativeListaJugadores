import { StyleSheet, TextInput, View, Button } from "react-native";
import React from "react";

const NewItemHeader = ({ onChangeText, itemText, addItemToState }) => {
  return (
    <View style={styles.addItemInputContainer}>
      <TextInput
        placeholder="Ingrese aquí su jugador de futbol ⭐⭐⭐ "
        placeholderTextColor={"lightblue"}
        style={styles.input}
        onChangeText={onChangeText}
        value={itemText}
        multiline={true}
      />
      <View style={styles.buttonAgregar}>
        <Button title="AGREGAR 🏃🏾‍♂️" onPress={addItemToState} />
      </View>
    </View>
  );
};

export default NewItemHeader;

const styles = StyleSheet.create({
  addItemInputContainer: {
    marginTop: 30,
    margin: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: 600,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    fontSize: 30,
    fontStyle: "italic",
    textAlign: "center",
    opacity: 0.8,
    margin: 20,
  },
  buttonAgregar: {
    padding: 5,
    backgroundColor: "#F0F8FF",
    borderRadius: 15,
    borderWidth: 3,
    margin: 20,
    width: 300,
    opacity: 0.8,
  },
});
