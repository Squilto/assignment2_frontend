"use client";
import React, { useEffect, useState } from "react";

const Footer = () => {
  return (
    <footer className="mt-4 text-center text-gray-500">
      <p>Webdev Technical School for the Technologically Impared</p>
      <p>900 Landing Lane, Canadian Colony 2, Moon</p>
      <p>Intersellar Contact #: 1-555-555-512-2984</p>
    </footer>
  );
};

const Students = () => {
  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  const addStudent = (name) => {
    fetch("http://localhost:5000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    })
      .then((response) => response.json())
      .then((newStudent) =>
        setStudents((prevStudents) => [...prevStudents, newStudent])
      );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    addStudent(name);
    e.target.name.value = "";
  };

  const updateStudent = (id, name) => {
    fetch(`http://localhost:5000/students/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    }).then(() => {
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === id ? { ...student, name } : student
        )
      );
      setEditingId(null);
      setEditingName("");
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          className="border p-2 mr-2"
          type="text"
          name="name"
          placeholder="Student Name"
        />
        <button
          className="bg-blue-500 text-white py-1 px-2 rounded"
          type="submit"
        >
          Add Student
        </button>
      </form>
      <ul className="mt-4">
        {students.map((student) => (
          <li
            key={student.id}
            className="border p-2 my-2 flex justify-between items-center"
          >
            {editingId === student.id ? (
              <div className="flex items-center">
                <input
                  className="border p-1 mr-2"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                />
                <button
                  className="bg-green-500 text-white py-1 px-2 ml-2 rounded-full"
                  onClick={() => updateStudent(student.id, editingName)}
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="mr-2">{student.name}</span>
                <button
                  className="bg-yellow-500 text-white py-1 px-2 rounded-full"
                  onClick={() => {
                    setEditingId(student.id);
                    setEditingName(student.name);
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-2 ml-2 rounded-full"
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Students;
