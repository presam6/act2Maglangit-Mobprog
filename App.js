import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CustomButton = ({
  onPress,
  title,
  textColor,
  width,
  buttonStyle
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.myButton, {width: width}, buttonStyle]}
    >
      <Text style={{ color:textColor }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default function App() {
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    studentId: '',
  });

  const showResults = () => {
    Alert.alert(`Student Name: ${studentInfo.name}\nStudent ID: ${studentInfo.studentId}`);
  };

  return (
    <View style={styles.container}>
      {/* text */}
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Act 2 Maglangit</Text>
        <Text style={styles.subTitle}>Student Information</Text>
        <StatusBar style="auto" />
      </View>

      {/* Text inputs */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Student Name"
          onChangeText={(text) => setStudentInfo({ ...studentInfo, name: text })}
          style={styles.input}
        />

        <TextInput
          placeholder="Student ID"
          onChangeText={(text) => setStudentInfo({ ...studentInfo, studentId: text })}
          style={styles.input}
        />
      </View>

      {/* button */}
      <View style={styles.arrangeButton}>
        <CustomButton
          onPress={showResults}
          title='Show Results'
          textColor='black'
          buttonStyle={{ backgroundColor: 'orange' }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textContainer: {
    flex: 1,
    marginTop: 50,
  },
  textTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
  },
  inputContainer: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'red',
    width: '50%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  arrangeButton: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  myButton: {
    padding: 10,
    borderRadius: 5,
  },
});
