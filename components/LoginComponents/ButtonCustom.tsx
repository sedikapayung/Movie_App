import {  TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, ActivityIndicator } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
const ButtonCustom = (props: any) => {
    return <TouchableOpacity style={styles.MyButton} onPress={props.onPress}>
  <MaterialCommunityIcons name="login" size={20} color="white" />
  <Text style={styles.text}>Login</Text>
</TouchableOpacity>
}

const styles = StyleSheet.create({
    MyButton : {
        backgroundColor : '#007bff',
        padding : 16, 
        borderRadius : 8,
        flexDirection : 'row',
        width : '50%',
        alignItems : 'center',
        justifyContent : 'space-around',
        
 
 
}       ,
text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  }

})
export default ButtonCustom;