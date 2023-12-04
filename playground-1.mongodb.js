
// creating  database
use('university');
// creating collection
db.createCollection("Students")
// Insert a few documents into the sales collection.
db.getCollection('students').insertMany([
  {
    name : "Abukar Hassan",
    age : 23,
    major: "engineering",
    gpa : 90
  }
,
  {
    name : "isse Hassan",
    age : 24,
    major: "computer science",
    gpa : 92
  }
,
  {
    name : "hussen Hassan",
    age : 25,
    major: "health",
    gpa : 78
  }
  
]);

// fetching data in the collection

// updating the data in the collection

