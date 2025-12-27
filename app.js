

// let obj = {
//     fullName: "Abdur Rehman ", 
//     skill: ["Web Developer", "HTML", "CSS", "JS"]
// };

// let myWindow ={
// myAlert : function() {
//     alert("mai chla");
//     return "kuch bhi";
// }};

// console.log(myWindow.myAlert());

// let mobilePkg ={
//     basic : {
//         price : 200,
//         duration : "monthly",
//         data : "2GB",
//     },
//     professional : {
//          price : 2000,
//         duration : "monthly",
//         data : "20GB"
//     },
//     ultimate : {
//          price : 5000,
//         duration : "monthly",
//         data : "200GB"
//     }
// };
// console.log(mobilePkg.basic.price);
// alert("mobile packages mai sirf basic pkg ki ye price hai: " + mobilePkg.basic.price);

// let newObj = {
    // skills :"HTML",
    // shift : "shift hojao"
// }

// newObj.kuchbi = "yeh bhi add hojayega";


// console.log(newObj.skills = ["HTML", "CSS", "JS"]);
// // console.log(newObj.skills.unshift("GitHub"));
// // newObj.shift();

// console.log(newObj.shift)
// // console.log(newObj)


let studentIdCardGenerator = {
    studentName: "Abdur Rehman",
    studentRollNo: "12345",
    studentAge: 18,
    studentClass: "12th Grade",
    studentSchool: "SMIT",
    studentAddress: "Karachi, Pakistan"
};
console.log("Student Name: " + studentIdCardGenerator.studentName);
console.log("Student Roll No: " + studentIdCardGenerator.studentRollNo);
console.log("Student Age: " + studentIdCardGenerator.studentAge);
console.log("Student Class: " + studentIdCardGenerator.studentClass);
console.log("Student School: " + studentIdCardGenerator.studentSchool);
console.log("Student Address: " + studentIdCardGenerator.studentAddress);

document.getElementById('name').nnerText = studentIdCardGenerator.studentName;