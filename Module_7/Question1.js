//How will you create a new copy of the object below while updating the value of address.details[0] to "5"?

let temp = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England"
  }
}

let copy = JSON.parse(JSON.stringify(temp));
copy.address.details[0] = '5';
console.log(copy);
console.log(temp);



//filterObject(obj) //This should return {a:”Apple”, d:”Dog”}


let obj = {
  a: "Apple",
  b: ["Basketball", "Baseball"],
  c: {
    call: "cellphone"
  },
  d: "Dog"
}


function filterObject(obj) {
  let result={};
  for (let key in obj){
    if(typeof(obj[key])!="object"){
      result[key]=obj[key];
    }
  }
  return result;
}

console.log(filterObject(obj));

