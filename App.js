import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Custom button para ma edit ang color sa text sulod sa button
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
      style={[styles.myButton, { width: width }, buttonStyle]}
    >
      <Text style={{ color: textColor }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default function App() {
  // Array para pag store sa data tas i call sa display function
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    studentId: '',
  });

  const [allStudentData, setAllStudentData] = useState([]);

  // function sa add button
  const addData = () => {
    if (studentInfo.name.trim() === '' || studentInfo.studentId.trim() === '') {
      Alert.alert('Error', 'Please fill in all fields before adding data.');
      return;
    }

    // Clear text sa placeholders after sa pag add sa data
    setAllStudentData([...allStudentData, studentInfo]);
    setStudentInfo({ name: '', studentId: '' }); 
  };

  // function sa show results button
  const showResults = () => {
    if (allStudentData.length === 0) {
      Alert.alert('No Data', 'No student data to display.');
    } else {
      Alert.alert('All Student Data', JSON.stringify(allStudentData, null, 2));
    }
  };

  // simple erase sa data
  const clearData = () => {
    setAllStudentData([]);
  };

  return (
    <View style={styles.container}>
      {/* Top Part */}
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Act 2 Maglangit</Text>
        <Text style={styles.subTitle}>Student Information</Text>
        <StatusBar style="auto" />
      </View>

      {/* Text inputs */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Student Name"
          value={studentInfo.name}
          onChangeText={(text) => setStudentInfo({ ...studentInfo, name: text })}
          style={styles.input}
        />

        <TextInput
          placeholder="Student ID"
          value={studentInfo.studentId}
          onChangeText={(text) => setStudentInfo({ ...studentInfo, studentId: text })}
          style={styles.input}
        />
      </View>

      {/* buttons */}
      <View style={styles.buttonContainer}>
        {/* Add Button */}
        <CustomButton
          onPress={addData}
          title='Add Data'
          textColor='white'
          buttonStyle={{ backgroundColor: 'green' }}
        />
        {/* Clear Button */}
        <CustomButton
          onPress={clearData}
          title='Clear Data'
          textColor='white'
          buttonStyle={{ backgroundColor: 'red' }}
        />
        {/* Show/Display Button */}
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
    marginTop: 150,
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
    width: '50%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    marginTop: 20,
    marginBottom: 50,
  },
  myButton: {
    padding: 10,
    borderRadius: 5,
  },
});