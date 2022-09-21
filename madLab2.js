
/** Crate a function */


function STUDENT(name, reg, gpa) {
    this.name = name;
    this.reg = reg;
    this.gpa = gpa;
}


function Students_info() {
    let s1 = new STUDENT("Muhammad", 23, 1.9);
    let s2 = new STUDENT("Zubair", 22, 3.5);
    let s3 = new STUDENT("Sharjeel", 25, 2.9);
    let s4 = new STUDENT("Ahmed", 55, 3.2)

    return [s1, s2, s3, s4];
}

let all = Students_info();

/** Task 2 :   Filter the students whose gpa is greater than 3 */

let num = function filtering(Obj) {
    return Obj.gpa > 3;
}

let filteredStudents = all.filter(num);

console.log("All Students");
console.log(all);
console.log("Students with GPA>3");
console.log(filteredStudents);



/// Task 1 :    

let name = (YourName) => console.log(YourName);

name("zubair");

//// Task 2 :

let task = (...args) => {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let Even = [];
    let Odd = [];

    let Evener = (num) => {
        return num % 2 == 0;

    }

    let Odder = (num) => {
        return num % 2 != 0;
    }

    Even = array.filter(Evener);
    Odd = array.filter(Odder);


    let evenMapper = (num) => { return num / 2 };
    Even = Even.map(evenMapper);

    let oddMapper = (num) => { return num * 2 };
    Odd = Odd.map(oddMapper);

    let o = [];
    o = Odd;
    let e = [];
    e = Even;

    return { ODD: o, EVEN: e };


}


console.log(task());