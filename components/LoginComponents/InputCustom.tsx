import { TextInput, StyleSheet, TextInputProps } from 'react-native';

export const inputCustom = (props: TextInputProps) => {
    <TextInput style={styles.input} {...props} />
}

const styles = StyleSheet.create({
input : {
    backgroundColor : '#f5f5f5',
    padding : 16,
    borderRadius : 8,
    fontSize : 16,
    borderWidth : 1,
    borderColor : '#ddd',
}

})