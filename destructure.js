const person={
    name:"Hridoy Ahmed",age:25,job:"Web Developer",address:"Dhaka",phone:"01621246898",gfName:"Ritu Ahmed",friendList:['mahfuz','dolor','kauser','rafsan','chamak']
}
// const gfName=person.gfName;
// const {phone}=person;
// const {address}=person;
// console.log(gfName,phone,address);
const {name,phone,age,job}=person;
console.log(name,phone,age,job);

//array Destructure 

const friends=['mahfuz Alam','ahmed Hridoy','taki Kauser','tkr chamak','rafsan faruk','dolor ahmed','khairul islam','nayem ahmed'];

// const[fristFriend,nextFriend]=friends;
// console.log(fristFriend,nextFriend);

const [...restFriend]=friends;

console.log(restFriend);
