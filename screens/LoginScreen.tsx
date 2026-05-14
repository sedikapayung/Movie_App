import Login from "@/hooks/Login-Hooks";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonCustom from "../components/LoginComponents/ButtonCustom";
import useLogin from "@/hooks/Login-Hooks";
export default function LoginScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
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
    title: {}
}
)



