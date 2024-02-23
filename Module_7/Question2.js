// Q.1  mapBy(users, "first_name") 

//This should return
//{
// "Nicki":{id:1, first_name:"Nicki", ...},
// "Raychel":{id:2, first_name:"Raychell", ...},
//}

let users = [{
  "id": 1,
  "first_name": "Nicki",
  "email": "ncrozier0@squarespace.com",
  "date_of_birth": "2009/05/09",
  "gender": "Female"
}, {
  "id": 2,
  "first_name": "Raychel",
  "email": "rmcgrady1@cpanel.net",
  "date_of_birth": "1996/11/05",
  "gender": "Male"
},{
  "id": 3,
  "first_name": "Demetris",
  "email": "dkilshall2@elpais.com",
  "date_of_birth": "2018/12/31",
  "gender": "Male"
}, {
  "id": 4,
  "first_name": "Amata",
  "email": "abraiden3@canalblog.com",
  "date_of_birth": "2012/05/23",
  "gender": "Female"
}];

let result = {}

function mapBy(users, firstName) {
  let temp = users.find((user) => user.first_name == firstName);
  result[firstName] = temp;
}
 
for (let user in users) {
  mapBy(users, users[user].first_name);
}

console.log(result);



// Q.2  Group the objects with given parameters 


function groupBy(array, key) {
  let result={}
  array.forEach((val) => {
    let groupKey=val[key];
    if (!result.hasOwnProperty(groupKey)){
      result[groupKey]=[];
    }
    result[groupKey].push(val);
    
  });
  return result;
}

console.log(groupBy(users, "email"));


// Q.3 

function sort(array, key, order) {
  return array.sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    // Compare the values based on the specified order
    if (order === 'asc') {
      return aValue < bValue ? -1 :  1 ;
    } else if (order === 'desc') {
      return bValue < aValue ? -1 :  1 ;
    }

    // Default case: no specific order provided, default to ascending
    return aValue < bValue ? -1 : 1 ;
  });
}

console.log(sort(users, "id", "desc"));



// Q.4  Write a function to filter an array of strings to hold only unique values

function filterUniqueStrings(array) {
  const uniqueSet = new Set(array);
  const uniqueArray = Array.from(uniqueSet);
  return uniqueArray;
}

let stringArray = ["apple", "banana", "orange", "apple", "banana", "grape"];
console.log(filterUniqueStrings(stringArray));
