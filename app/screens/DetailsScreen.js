import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  SectionList,
  TouchableOpacity,
  View
} from "react-native";

import colors from "../config/colors";

import data from "../data/new_data.json";

const oysterData = data;



function DetailsScreen({ route, navigation }) {

  const { region } = route.params;


  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={oysterData.filter((item) => item.region == region)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemStyle}
            onPress={() =>
              navigation.push("Oyster Profiles", {
                oysters: item.oysters,
              })
            }
          >
            <Text
              style={styles.itemTextStyle}
            >
              {item.location}
            </Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.headerStyle}>
            <Text style={styles.headerText}>{section.region}</Text>
          </View>
        )}
        keyExtractor={(item, index) => item + index}
      />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  itemStyle: {
    backgroundColor: colors.primary,
    width: "70%",
    height: 70,
    left: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
    elevation: 3,
    marginBottom: 15,
  },
  itemTextStyle: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: '500',
    height: 50,
    padding: 10,
  },
  headerStyle: {
    marginBottom: 25,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    backgroundColor: colors.primary,
    color: colors.secondary,
    padding: 10,
    textAlign: "center",
  }
});

export default DetailsScreen;
