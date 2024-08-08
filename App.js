
import { StyleSheet, Text, View, Image } from 'react-native';
import Footer from './components/Footer';
import Main from './components/Main';
import  Header  from './components/Header';



export default function App() {
  return (

    <View style={styles.container}>

      <Header />
      <Main />
      <Footer />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1, //preencher todo o espaço da tela

  },

});
