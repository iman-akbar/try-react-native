import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Avatar}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image style={{marginBottom:10}} source={require("./assets/batman-avatar.png")} />
          <Text style={{ maxWidth: 200 }}>"it`s not whi I am"</Text>
        </View>
      </View>
      <View style={styles.details}>
        <View style={styles.item}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.data}>Batman</Text>
        </View>
        <View style={styles.item}>
           <Text style={styles.label}>Name:</Text>
          <Text style={styles.data}>Batman</Text>
        </View>
        <View style={styles.item}>
           <Text style={styles.label}>Name:</Text>
          <Text style={styles.data}>Batman</Text>
        </View>
        <View style={styles.item}>
           <Text style={styles.label}>Name:</Text>
          <Text style={styles.data}>Batman</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  Avatar: {
    // backgroundColor: 'blue',
    justifyContent: "center",
    alignItems: "center",
    flex: 0.4,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  details: {
    backgroundColor: "white",
    flex: 0.6,
  },
  item: {
    // borderTopWidth: 1,
    // borderTopColor: "black",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    flex: 0.25,
    // width:'100%'
    flexDirection: 'row',
    paddingHorizontal: 20,

  },
  label: {
    flex: 0.9,
    color: 'orange',
    fontSize: 32,
    
  },
  data: {
    fontSize:32,
  }
});
