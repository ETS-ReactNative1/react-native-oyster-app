import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  Alert
} from "react-native";

import Swiper from 'react-native-deck-swiper';

import colors from "../config/colors";


// TESTING SWIPER
const renderSwiper = (fact) => {
  return (
    <SafeAreaView style={swipeStyles.container}>
      <Swiper
        cards={[fact]}
        renderCard={(card) => {
          return (
            <View style={swipeStyles.card}>
              <Image style={swipeStyles.imageStyle} source={require('../assets/images/small_icon.png')} />
              <Text style={swipeStyles.headerText}>Oyster Fact of the Day</Text>
              <Text style={swipeStyles.factText}>{card}</Text>
              <Text style={swipeStyles.swipeText}>Swipe</Text>
            </View>
          )
        }}
        cardIndex={0}
        // backgroundColor={colors.highlight}
        stackSize={1}>
      </Swiper>
    </SafeAreaView>
  )
}

function SearchScreen({ route, navigation }) {
  const { fact } = route.params;

  // React.useEffect(() => {
  //   Alert.alert(
  //     "Oyster Fact of the Day",
  //     fact,
  //     [
  //       { text: "Ok" }
  //     ]
  //   );
  // },
  //   []
  // )


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>SEARCH BY REGION</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.push("Locations", {
            region: "Northeast",
          })
        }
      >
        <Text style={styles.buttonText}>Northeast</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.push("Locations", {
            region: "Pacific Northwest",
          })
        }
      >
        <Text style={styles.buttonText}>Pacific Northwest</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.push("Locations", {
            region: "Southeast",
          })
        }
      >
        <Text style={styles.buttonText}>Southeast</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.push("Locations", {
            region: "Southwest",
          })
        }
      >
        <Text style={styles.buttonText}>Southwest</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.push("Locations", {
            region: "West",
          })
        }
      >
        <Text style={styles.buttonText}>West</Text>
      </TouchableOpacity>
      {renderSwiper(fact)}
    </SafeAreaView>
  );
}


const swipeStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  card: {
    flex: .80,
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: colors.secondary,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 55
  },
  factText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20
  },
  swipeText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 45,
  },
  imageStyle: {
    alignItems: 'center',
    marginLeft: 110,
  }

});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  button: {
    backgroundColor: colors.secondary,
    width: "70%",
    height: 70,
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
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.primary,
  },
  headerText: {
    color: colors.secondary,
    fontSize: 30,
    fontWeight: "400",
    marginBottom: 40,
  },
});

export default SearchScreen;
