import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import Card from "../components/Card";

const Index = () => {
  const [names, setNames] = useState([]);
  const [input, setInput] = useState("");
  //Function zone
  //Adding Name functions
  const addName = () => {
    var value = input.trim();
    value ? setNames([...names, input]) : null;
    // setInput("");
  };
  //Removing Names functions
  const removeName = () => {
    setNames(
      names.filter((f) => {
        return f !== input;
      })
    );
  };
  //ClearALL Name Functions
  const clearAll = () => {
    setInput("");
  };

  const clearAllData = () => {
    setNames([]);
  };

  return (
    <View style={[styles.container]}>
      <Pressable style={[styles.refreshTitle]} onLongPress={clearAllData}>
        <Text style={[styles.titleText, {}]}>Muradian TempNote</Text>
        <Text style={{ textAlign: "center", fontWeight: "100" }}>
          Long Press Me to clear all data
        </Text>
      </Pressable>
      <View>
        <TextInput
          placeholder="Enter your Text : "
          style={{
            borderColor: "000000",
            borderWidth: 1,
            padding: 9,
            borderRadius: 5,
          }}
          value={input}
          onChangeText={setInput}
        />

        <Text>
          {input
            ? `${input.slice(0, 20)}.. will add as temp`
            : "Please write above note"}
        </Text>
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, { backgroundColor: "#00ff00a1" }]}
            onPress={addName}>
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: "#ff0000a1" }]}
            onPress={removeName}>
            <Text style={styles.buttonText}>Remove</Text>
          </Pressable>

          <Pressable
            style={[styles.button, { backgroundColor: "#0000ffa1" }]}
            onPress={clearAll}>
            <Text style={styles.buttonText}>Clear</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.container2, { height: "50%" }]}>
        <FlatList
          data={names}
          renderItem={({ item }) => {
            return <Card item={item} />;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  titleText: {
    fontWeight: "500",
    fontFamily: "sans-serif",
    fontSize: 30,
  },
  refreshTitle: {
    borderColor: "#000000a1",
    borderWidth: 0.3,
    borderRadius: 5,
    padding: 4,
    paddingHorizontal: 10,
    backgroundColor: "#bdb6f0",
  },
  container2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    borderColor: "black",
    borderWidth: 1,
    height: 50,
    marginHorizontal: 10,
    width: 50,
    borderRadius: 200,

    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 2,
    borderColor: "black",
    borderWidth: 1,
    margin: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: 100,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    fontWeight: "600",
  },
  buttonText: {
    color: "black",
    fontWeight: "600",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    backgroundColor: "green",
  },
  mainText: {
    fontSize: 56,
  },
  pressableButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 12,
    backgroundColor: "green",
    paddingRight: 42,
    paddingLeft: 42,
    borderRadius: 13,
    height: 150,
    width: 150,
  },
  inputArea: {
    borderColor: "black",
    margin: 2,
    borderWidth: 1,
    width: "90%",
    padding: 5,
    textAlign: "center",
    borderRadius: 9,
    maxHeight: 500,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Index;
