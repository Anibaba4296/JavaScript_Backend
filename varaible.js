// let name_1 = "Ani";
// name_1 = "Aniket";
// name_1 = "anibaba";
// name_1 = BigInt(200000000000000000000)
// console.log(typeof name_1); // typeof is used to check the type of the variable
// console.log(name_1);
// //-------------------------------------------------------------------------------------

// let num = 20;
// num = 45;
// console.log(num);
// console.log("this is a " + typeof num);

// num = null;
// console.log(num);
// console.log("this is a " + typeof num);

// num = undefined;
// console.log(num);
// console.log("this is a " + typeof num);

// num = false;
// console.log(num);
// console.log("this is a " + typeof num);

// const arr = ["1", "2", "3"];
// console.log(arr);
// console.log(typeof arr);

// //objects
// //{}==> object literals
// let student = { first_name: "aniket", last_name: "Kumar", marks: 98, cgpa: 7.88 };
// console.log(student.first_name, student.last_name, student.marks, student.cgpa);
// student["TGPA"] = 8.00;
// student.full_name = student.first_name + " " + student.last_name;
// console.log(student.full_name);
// console.log(student); // display the whole object list
// console.log(student.TGPA);
// // console.log(first_name);     this will give error

// var newobj = new Object(); // 2nd way to create the object 
// newobj.value1 = 20;
// newobj.value2 = 10;
// newobj.name = "Anibaba"
// newobj["copies"] = 2000;
// console.log(newobj);

// // ---------------------------------------------------------------------------------------------------

// function Student(fname, marks, add) {
//     this.name = fname;
//     this.marks = marks;
//     this.add = add;
// }
// var str1 = new Student("Aniket", 78, "lpu");
// console.log(str1);
// var str2 = new Student("Ani", 99, "lpu");
// console.log(str2);

// -----------------------------------------------------------------------------------------------------
// create the following object using class student --> name,age,marks
// class Studentinfo {
//     constructor(name, age, marks) {
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//     }
// }
// let s1 = new Studentinfo("Ani", 21, 90);
// console.log(s1);

// class Studentinfo2 {

// }
// let s2 = new Studentinfo2();
// s2.name = "ANik";
// console.log(s2);

// simple data structure ==> homework

//Q1. 
// const myFavSuperHeros = ["Saktiman", "Aniket", "Hanuman", "Ironman", "Spiderman", "Yash", "Devesh"];
// console.log(myFavSuperHeros);

// // Q2.
// console.log(myFavSuperHeros[0]);

// //Q3.
// console.log(myFavSuperHeros.length);

// //Q4.
// myFavSuperHeros[myFavSuperHeros.length - 2] = "Anibaba";
// console.log(myFavSuperHeros[myFavSuperHeros.length - 2]);

// //Q5.
// myFavSuperHeros.unshift("Akshay");
// console.log(myFavSuperHeros);

//Q6.
// myFavSuperHeros.push("Kapil");
// console.log(myFavSuperHeros);

//Q7.
// myFavSuperHeros.shift();
// console.log(myFavSuperHeros);

//Q8. 
// myFavSuperHeros.pop()
// console.log(myFavSuperHeros);

// ---------------------------------------------------------------------------------------------------

// console.log(["1"] == true); // true
// console.log(["1"] === true); // false
// console.log(1 == true); // true

//-----------------------------------------------------------------------------------------------------

// var age = 21;
// (age >= 18) ? console.log("Applicable"): console.log("Not Applicable");

// ----------------------------------------------------------------------------------------------------

// arr = [1, 2, 3, 4]
// delete arr[1];
// console.log(arr);

// ----------------------x------------------------------------x------------------------------x---------------

// Loops ==>
// 1. for   2. while    3.do while  4. for in   5. for of
// let NewStudent = {
//     fName: 'Aniket',
//     lName: 'Kumar',
//     age: 21,
//     section: 'K20KR',
// }
// console.log(NewStudent);
// taraditional method way 1
// for (i = 0; i < Object.keys(NewStudent).length; i++) {
//     console.log(NewStudent[Object.keys(NewStudent)[i]]);
// }
// // Traditional method way 2
// for (i = 0; i < Object.keys(NewStudent).length; i++) {
//     console.log(Object.keys(NewStudent)[i], ":", Object.values(NewStudent)[i]);
// }

// // for in method
// for (key in NewStudent) {
//     console.log(`${key}:${NewStudent[key]}`);
// }
// for (key in NewStudent) {
//     console.log(key, ":", NewStudent[key]);
// }

// course = ['a', 'b', 'c', 'd', 'e'];
// for (key in course) {
//     console.log(key, "---->", course[key]);
// }
// for (key of course) {
//     console.log(key);
// }

// Error or exceotion handling
a = 1;
b = 2;
d = 4;
e = 5;
console.log(a);
console.log(b);
try {
    console.log(c);
} catch (error) {
    console.log("There was a error : " + error);
} finally {
    console.log("Error resolved");
}
console.log(d);
console.log(e);

const k1 = Symbol("First name");