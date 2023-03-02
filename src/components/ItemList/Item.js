import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const Item = ({ itemData, openModal }) => {
  return (
    <Pressable
      style={styles.itemContainer}
      onPress={() => {
        openModal(itemData.item);
      }}
    >
      <Text style={styles.item}>⚽ {itemData.item.value}</Text>
    </Pressable>
  );
};

export default Item;

const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFB81C",
    opacity: 0.85
    
  },
  item: {
    padding: 2,
    textAlign: "center",
    fontSize: 30,
    fontStyle: "italic",
  },
});
