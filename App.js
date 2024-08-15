
import { StyleSheet, Text, View, Image } from 'react-native';
import Footer from './components/Footer';
import Main from './components/Main';
import  Header  from './components/Header';
import { ScrollView } from 'react-native-web';
import CardAccout from './components/CardAccout';



export default function App() {
  return (

    <ScrollView style={styles.container}>

      <Header />
      <CardAccout/>
      <Main />
      <Footer />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1, //preencher todo o espaço da tela

  },

});
