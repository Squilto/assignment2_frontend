"use client";
import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable.js';

const Students = () => {
  const [students, setStudents] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3001/Students')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const addStudent = async (name, birthday, grade) => {
    const [firstName, lastName] = name.split(' '); // Split the name into first and last names
    const newStudent = { firstName, lastName, dateOfBirth: birthday, CurrentGPA: grade };

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

  const handleFormSubmit = (formData) => {
    const { firstName, lastName, birthday, grade } = formData;
    const name = `${firstName} ${lastName}`;
    addStudent(name, birthday, grade);
  };


  const gradientStyle = {
    backgroundImage: 'radial-gradient(ellipse at bottom right, #69787b, #596a6d 2%, #1e1b20 70%)',
  };

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
