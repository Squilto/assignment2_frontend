//Names: Ricky To,Declan Mohan, Hagan Chung, Edward Ouston
//Date: March 12th 2024
//Description: / This page is used to manage and display a list of students.
// It fetches student data from a backend server, allows adding new students through a form,
// and displays all students in a table. The component handles user inputs, server communication,
// and the dynamic updating of the UI based on the current state of the student list.
//
// Inputs: User inputs from the StudentForm component for adding new students (firstName, lastName, birthday, grade).
// Processing: Fetches existing students from the server, posts new student data to the server, and updates the UI accordingly.
// Output: An updated list of students displayed in a web table format. 

"use client";
import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable.js';

const Students = () => {
  const [students, setStudents] = useState([]);

// Side effect to fetch the current data from the server and error catch
  useEffect(() => {
    fetch('http://localhost:3001/Students')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const addStudent = async (name, birthday, grade) => {
    const [firstName, lastName] = name.split(' '); // Split the name into first and last names
    const newStudent = { firstName, lastName, birthday, grade };

//A try method to error check inputs and return error messages
    try {
      const response = await fetch('http://localhost:3001/Students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStudent)
      });
      if (response.ok) {
        setStudents([...students, newStudent]); // Update local student list
      } else {
        console.error('Failed to add new student');
      }
    } catch (error) {
      console.error('Error adding new student:', error);
    }
  };

//Function to apply the new student info into the list
  const handleFormSubmit = (formData) => {
    const { firstName, lastName, birthday, grade } = formData;
    const name = `${firstName} ${lastName}`;
    addStudent(name, birthday, grade);
  };


  const gradientStyle = {
    backgroundImage: 'radial-gradient(ellipse at bottom right, #69787b, #596a6d 2%, #1e1b20 70%)',
  };
//Structuring of different page portions
  return (
    <div style={gradientStyle} className="text-white min-h-screen">
      <Navbar />
      <StudentForm handleFormSubmit={handleFormSubmit} />
      <StudentTable students={students} />
      <Footer />
    </div>
  );
};

export default Students;
