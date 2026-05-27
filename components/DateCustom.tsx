import React, { useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker, { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';

type DateCustomProps = {
  value: Date;
  onChange: (date: Date) => void;
  label?: string;
  minimumDate?: Date;
  maximumDate?: Date;
};

const DateCustom = ({ value, onChange, label , minimumDate, maximumDate }: DateCustomProps) => {
  const [show, setShow] = useState(false);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const handleChange = (_event: DateTimePickerEvent, selectedDate?: Date) => {
    setShow(Platform.OS === 'ios');
    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  const openPicker = () => {
    if (Platform.OS === 'android') {
      DateTimePickerAndroid.open({
        value,
        onChange: handleChange,
        mode: 'date',
        is24Hour: true,
        minimumDate,
        maximumDate,
      });
      return;
    }

    setShow(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.button} onPress={openPicker}>
        <Text style={styles.buttonText}>{formatDate(value)}</Text>
      </TouchableOpacity>
      {show && Platform.OS === 'ios' ? (
        <DateTimePicker
          value={value}
          mode="date"
          display="spinner"
          onChange={handleChange}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
  button: {
    width: '80%',
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
  },
});

export default DateCustom;

