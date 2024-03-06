"use client";
import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';

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
    <div>
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name" className="sr-only">
          Student Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Student Name"
          className="border p-2 mr-2"
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
          <li key={student.id}>
            {editingId === student.id ? (
              <div>
                <input
                  type="text"
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
              <div>
                <span>{student.firstName} {student.lastName}</span>
                <button
                  className="bg-yellow-500 text-white py-1 px-2 ml-2 rounded-full"
                  onClick={() => {
                    setEditingId(student.id);
                    setEditingName(`${student.firstName} ${student.lastName}`);
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
    </div>
  );
};

export default Students;
