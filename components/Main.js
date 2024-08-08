import {StyleSheet, Text, View }from 'react-native'

export default function Main(){
    return(
        <View style={styles.main}>

        <Text style={styles.tituloH}>main</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 3,
        backgroundColor: '#518586',
        alignItems: 'center',
        justifyContent: 'center'
    
    
      },
     
      tituloH: {
        color: '#D5F0FF',
    
    
      }
})