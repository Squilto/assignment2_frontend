import React from "react";

const StudentTable = () => {
    return (
    <div className="flex flex-col items-center justify-center max-h-screen">
        <table className="table-auto border border-gray-400">
            <thead>
                <tr>
                    <th className="border border-gray-400 p-2">Student Name</th>
                    <th className="border border-gray-400 p-2">Date of Birth</th>
                    <th className="border border-gray-400 p-2">Current Grade</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
    );
  };

  export default StudentTable;