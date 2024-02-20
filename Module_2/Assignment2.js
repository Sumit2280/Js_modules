let a;
console.log(a); //undefined

a="Sumit";
console.log(a); //Sumit

// const b;
// console.log(b); // Missing initializer in const declaration

b=12;
console.log(b);

// use typeof operator
console.log(typeof(a))  //string

console.log(typeof(b))  //number

let arr=[1,2,3,4]
console.log(typeof(arr)) //object

console.log(typeof(null))  //object

console.log(typeof(NaN))  //number

//Check varaible is array or NaN
X=[1,2,3]
y="abc"

console.log(Array.isArray(X))  //return true 
console.log(Array.isArray(y))  //return false

console.log(Number.isNaN(y))  //return false
console.log(Number.isNaN(0/0)) //return true

//Declaring the Array using let
let arr1=[1,2,3,4];
arr1.push(5);
console.log(arr1)
delete arr1[1];
console.log(arr1)
arr1=[11,12] //we can reassign the varible to different array
// console.log(arr1)

//Declaring array using const
const arr2=[5,6,7,8]
arr2.push(9);
console.log(arr2)
delete arr2[1];
console.log(arr2)
// arr2=[13,14]  Error cannot be reasign

//Declaring object using let
let student = {
  Name: 'Sumit',
  age: 12
};

student.age=21;
student.college='DYP'
console.log(student)


//Declaring object using constant
const college={
  Name: 'DYP',
  address: 'Pune'
};

college.Name='PICT'
college.Rank='A+'
console.log(college)
delete college.Rank
console.log(college)






