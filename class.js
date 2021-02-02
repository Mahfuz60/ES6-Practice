class Student{
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.school="Dhaka B.k.s.p School,Dhaka"//default value all student access
       
    }

}

const student1=new Student(15,"Mahfuz");
const student2=new Student(20,"Kauser");

console.log(student1,student2);
//only id show
console.log(student1.id,student2.id);
//create a new student details
const student3=new Student(25,"Nayem");
console.log(student3);