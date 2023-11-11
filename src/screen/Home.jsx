import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


function Home() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>menu</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    // justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize:15,
    color: "white",
  },
  button : {
    backgroundColor: 'black',
    paddingHorizontal: 80,
    paddingVertical: 10,
    borderRadius: 10,
  }
});

export default Home;