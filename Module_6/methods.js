const temp = [4,6,1,3,2];

//push
console.log(temp);
temp.push(10);
console.log(temp);

//pop
temp.pop();

//filter
const filterResult= temp.filter((num)=>num>3);
console.log(filterResult);

//find 
const findResult = temp.find((num)=>num<3);
console.log(findResult);

//sort //mutate
const sortResult=temp.sort();
console.log(sortResult);
// console.log(temp);

//map //immutable
const mapResult=temp.map((x)=>x*2);
console.log(mapResult);
console.log(temp);
