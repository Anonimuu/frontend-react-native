import { StyleSheet, Text, View, } from "react-native";
import { Image } from "expo-image";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';


export default function Header() {

  return (

    <View style={styles.header}>

      <View style={styles.user}>

        <Image

          style={styles.avatar}
          source= "https://i.pinimg.com/564x/78/2e/83/782e83abdebb27761adca387af627ad0.jpg"

        />

        <Text style={styles.name}>Lulicz</Text>

      </View>

      <SimpleLineIcons style={styles.menu} name="menu" size={24} color="black" />

    </View>
  )
}


const styles = StyleSheet.create({

  header: {

    // flex: 0.5,
    height: 80,
   
    backgroundColor: '#150D15',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    flexDirection: 'row',

  },


  user: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,


  },

  avatar: {

    width: 50,
    height: 50,
    borderRadius: 25,

  },

  name: {
 color: '#FFFFFF',
  fontWeight: '600',
  fontSize: 18,

  },

  menu: {

color: '#FFFFFF',
 padding: 10,

  }



})