//Array
const arr=[1,2,3];
const JsonString= JSON.stringify(arr);
console.log(JsonString);

//nested Object
const student = {
  person1:{
    Name: 'Sumit',
    Age: 21
  },
  person2:{
    Name: 'Rohan',
    Age: 21
  }
};
const jsonObject = JSON.stringify(student);
console.log(jsonObject);

//number
const jsonNumber = JSON.stringify(12);
console.log(jsonNumber);

//string
const jsonString = JSON.stringify("Sumit");
console.log(jsonString);

//Null
const jsonNull = JSON.stringify(null);
console.log(jsonNull);


