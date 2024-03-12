"use client";
import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable.js';

const Students = () => {
  const [students, setStudents] = useState([]);


  useEffect(() => {
    fetch("/studentList.json")
      .then((response) => response.json())
      .then((data) => setStudents(data.Students));
  }, []);

  const addStudent = (name, birthday, grade) => {
    const newStudent = { firstName: name.split(' ')[0], lastName: name.split(' ')[1], birthday, grade }; // Split the name into first and last names
    setStudents((prevStudents) => [...prevStudents, newStudent]);
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
