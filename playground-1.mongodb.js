// 1)Creating  a new database named university.
use('university')
// 2)Inside the university database, create a collection named students.
db.createCollection("students")
// Insert Data:

// 3)Inserting at least 5 documents into the students collection. Each document should have the following fields:
//    name (string)
//    age (number)
//    major (string)
//    gpa (number)
db.students.insertMany([
  { name: "Abukar", age: 22, major: "Computer Science", gpa: 3.5 },
  { name: "Hassan", age: 20, major: "Mathematics", gpa: 3.8 },
  { name: "Salah", age: 21, major: "Computer Science", gpa: 3.2 },
  { name: "Ali", age: 23, major: "English", gpa: 3.6 },
  { name: "Abdi", age: 19, major: "Computer Science", gpa: 3.1 }
])
// 4) Fetching Data:
// *Writing queries to fetch:
//        All documents in the students collection
db.students.find()
//      Only the documents where the major is 'Computer Science
db.students.find({ major: "Computer Science" })
//      Only the documents where the age is greater than 20  
db.students.find({ age: { $gt: 20 } })
// 5)Updating Data:
//      Updating the document with the name Abukar and set his GPA to 3.7
db.students.updateOne(  
  { name: "Abukar" },
  { $set: { gpa: 3.7 } }
  )
  // 6)Deleting Data:
  //    Deleting a student document based on their name
  db.students.deleteOne({name:"Abukar"})
  //    Deleting all documents where the gpa is less than 2.0.
  db.students.deleteMany({ gpa: { $lt: 2.0 } })
  // 8)Additional Querying:
  //      Writing a query to find the student with the highest GPA.
  db.students.aggregate([{ "$sort": { "gpa": -1 }}, {"$limit": 1}]);
  //      Writing a query to count the number of students majoring in 'Mathematics'.
  db.students.countDocuments({major:'Mathematics'});
  //      Writing a query to find the average age of all students.
  db.students.aggregate([{"$group":{"_id":"","averageAge":{"$avg":"$age"}}}]);






