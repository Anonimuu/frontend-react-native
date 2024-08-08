import { StyleSheet, Text, View, Image} from "react-native";


export default function Header(){

    return (

        <View style={styles.header}>

      <View style={styles.logo}> 

      </View>

        <Text style={styles.tituloH}>header</Text>

      </View>
    )
}


const styles = StyleSheet.create({


  logo:{
    flex:1,
  backgroundColor:'#5D686F',
  with:'200px',
  height:'200px'


  },

    header: {

        flex: 0.5,
        backgroundColor: '#65A7A8',
        alignItems: 'center',
        justifyContent: 'center'
    
      },
    
    
      tituloH: {
        color: '#D5F0FF',
    
    
      }

})