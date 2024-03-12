import React from "react";

const StudentForm = ({ handleFormSubmit }) => {
    return (
        <form onSubmit={handleFormSubmit} className="my-4 text-center">
  
          {/* First Name */}
          <label htmlFor="firstName" className="sr-only">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            className="text-black mx-4 border-2 border-gray-300 px-1 py-2 rounded-md focus:outline-none focus:ring focus:ring-slate-700 focus:border-slate-500"
          />
  
          {/* Last Name */}
          <label htmlFor="lastName" className="sr-only ">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            className="text-black mx-4 border-2 border-gray-300 px-1 py-2 rounded-md focus:outline-none focus:ring focus:ring-slate-700 focus:border-slate-500"
          />
  
          {/* Birthday */}
          <label htmlFor="birthday" className="sr-only">
            Birthday
          </label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            placeholder="Birthday"
            className="text-black mx-4 border-2 border-gray-300 px-1 py-2 rounded-md focus:outline-none focus:ring focus:ring-slate-700 focus:border-slate-500"
          />
  
          {/* Grade */}
          <label htmlFor="grade" className="sr-only">
            Grade
          </label>
          <input
            type="number"
            id="grade"
            name="grade"
            placeholder="Grade"
            className="w-24 text-black mx-4 border-2 border-gray-300 px-1 py-2 rounded-md focus:outline-none focus:ring focus:ring-slate-700 focus:border-slate-500"
            min="8"
            max="12"
          />
  
          {/* Submit Button */}
          <button
            className="bg-slate-600 text-white py-1 px-2 rounded"
            type="submit"
          >
            Add Student
          </button>
        </form>
  );
};

export default StudentForm;