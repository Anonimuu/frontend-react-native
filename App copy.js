
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <Text style={styles.titulo}>!primeiro app para ios e android!</Text>
      <Text style={styles.coracao}>❤</Text>
      <Image 
      source={require('./gobara.jpg')}
      style={styles.imge}>
      </Image>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  

    flex: 1, //preencher todo o espaço da tela
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#641610'
 
  },

  titulo: {

    color:'#F2E5F5'

  },

  coracao: {

    color:'#F53527'

  },

  imge: {
    width: 700, 
    height: 400,
  }

});
