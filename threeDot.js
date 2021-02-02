const ages1=[14,18,19,17,13,16];
const ages2=[10,14,18,13,17,19];
const allAges=ages1.concat(ages2);
const ages3=[30,42,45,35,39,37,50];
console.log(allAges);
const allAges2=[...ages1,...ages2,...ages3];//...(spread operator used)
console.log(allAges2);

//Spread Operator used 
const business=650;
const minister=750;
const sochib=550;
//const maximum=Math.max(business,minister,sochib);
const takaPoisa=[800,900,750,1000,500,300];
const maximum=Math.max(...takaPoisa);
const minimum=Math.min(...takaPoisa);
console.log(maximum);
console.log(minimum);


