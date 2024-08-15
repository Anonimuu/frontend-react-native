import { View, Text, StyleSheet } from "react-native-web";
import { Image } from "expo-image";
export default function CardAccout (){
    return (

        <View style = {styles.card}>
            <Image 
            style={styles.logo}
            source="https://img.freepik.com/vetores-gratis/instagram-logo_1199-122.jpg"
            />
    
            <View style={styles.content}>
            <Text style= {styles.service}>instagram</Text>
            <Text style= {styles.username}>gkiss7872@gmail.com</Text>
            </View>
        </View>
        
   
    )
}

const styles = StyleSheet.create({
    card: {

        paddingVertical: 10,
        borderStyle: 'solid',
        borderColor:'#EEEEEE',
        borderWidth: 1,
        flexDirection: 'row',
        gap: 15,
        borderRadius: 10,
        alingItems: 'center',
        
    },
    logo: {
       
        width: 60,
        height:60,
        borderRadius: 40,

    },

    content:{
        gap: 6
    },
    service:{
        fontSize: 17
    },
    username:{
        color: '#77777'
    },












})