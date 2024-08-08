import { StyleSheet, Text, View, } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>

            <Text style={styles.tituloH}>footer</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        backgroundColor: '#3C6464',
        alignItems: 'center',
        justifyContent: 'center'


    },

    tituloH: {
        color: '#D5F0FF',


    }
})