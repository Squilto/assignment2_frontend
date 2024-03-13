Names: Ricky To, Declan Diamond, Hagan Chung, Edward Ouston
Date: March 12th 2024
Description: / This page is used to manage and display a list of students.
It fetches student data from a backend server, allows adding new students through a form,
and displays all students in a table. The component handles user inputs, server communication,
and the dynamic updating of the UI based on the current state of the student list.

Inputs: User inputs from the StudentForm component for adding new students (firstName, lastName, birthday, grade).
Processing: Fetches existing students from the server, posts new student data to the server, and updates the UI accordingly.
Output: An updated list of students displayed in a web table format. 

Terminal functions for page usage:
npm install json-server
npm run server
npm run dev