import React, { useState } from "react";
import { StyleSheet, View, ImageBackground, Alert } from "react-native";
import { ListItem, NewItemHeader, Modal } from "./src/components";

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItemToState = () => {
    // if (addItemToState.length <= 0) {
    //   Alert.alert('Escriba un jugador de fútbole por favor')
    // } else {
    const newArr = [...items, { id: Date.now(), value: itemText }];
    setItems(newArr);
    setItemText("");
  }

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  const onDeleteModal = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require("./assets/seleccionDesafioCoder.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <NewItemHeader
          onChangeText={onChangeText}
          itemText={itemText}
          addItemToState={addItemToState}
        />
        <ListItem items={items} openModal={openModal} />
        <Modal
          modalVisible={modalVisible}
          selectedItem={selectedItem}
          onCancelModal={onCancelModal}
          onDeleteModal={onDeleteModal}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    flex: 1,
    backgroundColor: "#6CACE4",
  },
  image: {
    height: "100%",
  },
});
