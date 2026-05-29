import Login from "@/hooks/Login-Hooks";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonCustom from "../components/ButtonCustom";
import InputCustom from "../components/InputCustom";
import useLogin from "@/hooks/Login-Hooks";
export default function LoginScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <InputCustom placeholder="Username" />
            <InputCustom placeholder="Password" secureTextEntry={true} />
            <TouchableOpacity onPress={()=> navigation.navigate("Register")}>
                <Text> Register?</Text>
            </TouchableOpacity>
            <ButtonCustom onPress={useLogin} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    }
}
)



