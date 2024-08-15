import { StyleSheet, Text, View, } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>

            <Text style={styles.tituloH}>© Copyright2024 Sr-Ki55 </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        padding:15,
        backgroundColor: '#150D15',
        alignItems: 'center',
        justifyContent: 'center'


    },

    tituloH: {
      
        opacity: 0.5,
        color: '#FFFFFF'


    }
})