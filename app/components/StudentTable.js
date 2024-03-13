import React from "react";

//The student table with tailwind for title structuring and individual
const StudentTable = ({ students }) => {
  return (
    <div className="py-8 flex flex-col items-center justify-center max-h-screen">
      <table className="table-auto border border-gray-400">
        <thead className=" bg-slate-700">
          <tr>
            <th className="border border-gray-400 p-2">Student Name</th>
            <th className="border border-gray-400 p-2">Date of Birth</th>
            <th className="border border-gray-400 p-2">Current Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="border border-gray-400 p-2">
                {`${student.firstName} ${student.lastName}`}
              </td>
              <td className="border border-gray-400 p-2">{student.birthday}</td>
              <td className="border border-gray-400 p-2">{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;