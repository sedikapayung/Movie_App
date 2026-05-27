import React, { useEffect, useState } from 'react';
import { TextInput, Text, View, StyleSheet, TextInputProps, TouchableOpacity } from 'react-native';

interface InputCustomProps extends TextInputProps {
    label?: string; // Properti opsional untuk teks label
}
const InputCustom = ({ label, secureTextEntry = false, style, ...props }: InputCustomProps) => {
    const [isFocussed, setIsFocussed] = useState(false);
    const [isPasswordHidden, setIsPasswordHidden] = useState(secureTextEntry);

    useEffect(() => {
        setIsPasswordHidden(secureTextEntry);
    }, [secureTextEntry]);

    return (
        <View style={styles.container}>
            {label && (
                <Text style={[styles.label, isFocussed ? styles.labelFocussed : styles.labelBlur]}>
                    {label}
                </Text>
            )}
            <View style={styles.inputWrapper}>
                <TextInput
                    {...props}
                    secureTextEntry={isPasswordHidden}
                    style={[
                        styles.input,
                        isFocussed ? styles.InputFocussed : styles.InputBlur,
                        style,
                        secureTextEntry ? styles.inputWithToggle : null,
                    ]}
                    onFocus={(e) => {
                        setIsFocussed(true);
                        if (props.onFocus) props.onFocus(e);
                    }}
                    onBlur={(e) => {
                        setIsFocussed(false);
                        if (props.onBlur) props.onBlur(e);
                    }}
                />
                {secureTextEntry && (
                    <TouchableOpacity
                        style={styles.toggleButton}
                        onPress={() => setIsPasswordHidden((a) => !a)}
                    >
                        <Text style={styles.toggleText}>
                            {isPasswordHidden ? 'Show' : 'Hide'}
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        alignSelf: 'center',
        alignItems: 'flex-start',
        marginBottom: 16
    },
    inputWrapper: {
        width: '100%',
        position: 'relative',
    },
    input: {
        backgroundColor: '#000000',
        color: '#FFDEDE',
        padding: 16,
        borderRadius: 8,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        width: '100%',
        marginBottom: 16,
    },
    inputWithToggle: {
        paddingRight: 72,
    },
    toggleButton: {
        position: 'absolute',
        right: 16,
        top: 18,
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    toggleText: {
        color: '#FFDEDE',
        fontSize: 14,
        fontWeight: '600',
    },
    InputFocussed: {
        borderColor: '#007bff',
    },
    InputBlur: {
        borderColor: '#949494',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 6,
    },
    labelBlur: {
        color: '#aaa',
    },
    labelFocussed: {
        color: '#007bff',
    },
})

export default InputCustom;