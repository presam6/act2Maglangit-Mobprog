import React, { useState } from 'react';
import {
  StatusBar, ImageBackground, StyleSheet, Text, TextInput,
  TouchableOpacity, View, Image, FlatList, Alert
} from 'react-native';

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
  // State para sa pag get sa data from the add button
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    studentId: '',
    courseAndSection: '', // Add this line to include courseAndSection
  });

  // State [Empty Array]
  const [allStudentData, setAllStudentData] = useState([]);

  // State to track whether the buttons should be hidden
  const [hideButtons, setHideButtons] = useState(false);

  // function sa add button
  const addData = () => {
    if (studentInfo.name.trim() === '' || studentInfo.studentId.trim() === '' || studentInfo.courseAndSection.trim() === '') {
      Alert.alert('Error', 'Please fill in the form before adding data.');
      return;
    }

    // Clear text sa placeholders after sa pag add sa data
    setAllStudentData([...allStudentData, studentInfo]);
    setStudentInfo({ name: '', studentId: '', courseAndSection: '' });
  };

  // simple erase sa data [Clear Button]
  const clearData = () => {
    setAllStudentData([]);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://amphibia.com/wp-content/uploads/2014/04/MG_1714.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Top Part */}
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Student Information</Text>
          <Text style={styles.subTitle}>Mobile Programming</Text>
          <Text style={styles.subTitle}>Activity 2</Text>
          <StatusBar style="auto" />
        </View>

        {/* Text inputs */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Student Name"
            value={studentInfo.name}
            onChangeText={(text) => setStudentInfo({ ...studentInfo, name: text })}
            style={[styles.input, { color: 'white' }]}
            placeholderTextColor="white"
            onFocus={() => setHideButtons(true)}
            onBlur={() => setHideButtons(false)}
          />

          <TextInput
            placeholder="Student ID"
            value={studentInfo.studentId}
            onChangeText={(text) => setStudentInfo({ ...studentInfo, studentId: text })}
            style={[styles.input, { color: 'white' }]}
            placeholderTextColor="white"
            onFocus={() => setHideButtons(true)}
            onBlur={() => setHideButtons(false)}
          />

          <TextInput
            placeholder="Course and Section"
            value={studentInfo.courseAndSection}
            onChangeText={(text) => setStudentInfo({ ...studentInfo, courseAndSection: text })}
            style={[styles.input, { color: 'white' }]}
            placeholderTextColor="white"
            onFocus={() => setHideButtons(true)}
            onBlur={() => setHideButtons(false)}
          />
        </View>

        {/* buttons */}
        {!hideButtons && ( // Para mawala pag mag input sa text fields
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
          </View>
        )}

        {/* Table to display results */}
        {allStudentData.length > 0 && (
          <FlatList
            data={allStudentData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Student Name: {item.name}</Text>
                <Text style={styles.tableCell}>Student ID: {item.studentId}</Text>
                <Text style={styles.tableCell}>Course and Section: {item.courseAndSection}</Text>
              </View>
            )}
          />
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    // backgroundColor: '#f9e706',
  },
  textContainer: {
    flex: 1,
    marginTop: 30,
  },
  textTitle: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
  },
  subTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
  },
  inputContainer: {
    flex: 2,
    flexDirection: 'column',
    width: '50%',
    marginTop: 90,
  },
  input: {
    height: 40,
    borderColor: 'white',
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
    borderColor: 'white'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  tableRow: {
    flexDirection: 'column',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingVertical: 16,
  },
  tableCell: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
  },
});