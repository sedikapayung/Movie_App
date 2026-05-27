import ButtonCustom from "@/components/ButtonCustom";
import DateCustom from "@/components/DateCustom";
import { useRegisterForm } from "@/hooks/UseRegisterForm";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import InputCustom from "../components/InputCustom";


function Regsterscreen() {
    const {
        name,
        setName,
        email,
        emailError,
        date,
        setDate,
        handleEmailChange,
        handleEmailBlur,
        handleSubmit
    } = useRegisterForm();

    return (
        <View style={styles.container}>
            <Text style={styles.text}> Register</Text>
            <InputCustom placeholder="Nama" label="Nama" placeholderTextColor="#aaa" value={name} onChangeText={setName} />
            <InputCustom placeholder="Email"
                value={email}
                label="Email"
                placeholderTextColor="#aaa"
                onChangeText={handleEmailChange}
                onBlur={() => handleEmailBlur()}
                keyboardType="email-address"
                autoCapitalize="none" />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
           <InputCustom placeholder="Password" label="Password" placeholderTextColor="#aaa" secureTextEntry />
            <ButtonCustom title="Submit" onPress={handleSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#000000',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFDEDE',
        marginBottom: 20,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginBottom: 8,
    }
})

export default Regsterscreen;