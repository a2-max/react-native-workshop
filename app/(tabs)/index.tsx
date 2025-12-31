import React from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MBMC from "../../src/image/mbmc.jpg";

const Home = () => {

  const handleClick = () => {
    // Linking.openURL("https://mbmc.edu.np");
    Alert.alert("Thanks for clicking")
  }
  return (
    <SafeAreaView>
      <View style={styles.main}> 
        <Image source={MBMC} style={styles.image} />
        <Text style={styles.titleText}>Welcome to MBM College</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleClick}
        >
          <Text style={styles.btnTxt}>Visit Site</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 16,
    marginTop: 30
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 12,
  },
  titleText: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 20
  },
  button: {
    backgroundColor: "#000",
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  btnTxt: {
    color: '#fff',
    fontSize: 20
  }
})

export default Home;