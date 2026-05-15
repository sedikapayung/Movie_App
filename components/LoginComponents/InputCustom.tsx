import React, { useState } from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

const InputCustom = (props: TextInputProps) => {
    const [IsFocussed, SetIsFouccussed] = useState(false);
    return (<TextInput {...props}
        style={[styles.input,
        IsFocussed ? styles.InputFocussed : styles.InputBlur, props.style]}
        onFocus={()=> SetIsFouccussed(true)}
        onBlur={()=> SetIsFouccussed(false)} />
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#f5f5f5',
        padding: 16,
        borderRadius: 8,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        width: '80%',
        marginBottom: 16,
        touchAction: '',
    }
    , InputFocussed: {
        borderColor: '#007bff',
    }, InputBlur: {
        borderColor: '#ddd',
    }

})

export default InputCustom;