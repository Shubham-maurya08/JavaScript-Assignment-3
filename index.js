// Solution -1

// const marks = prompt("Enter your marks out of 50")
// let grade;
// switch(true){
//     case marks >= 41 && marks <= 50:
//         grade = 'A';
//         break;
//     case marks >= 31 && marks <= 40:
//         grade = 'B';
//         break;
//     case marks >= 21 && marks <= 30:
//         grade = 'C';
//         break;
//     case marks >= 11 && marks <= 20:
//         grade = 'D';
//         break;    
//     case marks >= 0 && marks <= 10:
//         grade = 'E';
//         break;
//     default:
//         grade = "Invalid Marks entered";
// }
// console.log(grade);

//Solution -2

// let output;
// let input = prompt('enter a character');
// if (input === 'p' || input === 'P') {
//     output = 'PrepBytes'
//     console.log(output);
// } else if (input === 'z' || input === 'Z') {
//     output = 'Zenith'
//     console.log(output);
// } else if (input === 'e' || input === 'E') {
//     output = 'Expert Coder'
//     console.log(output);
// } else if (input === 'd' || input === 'D') {
//     output = 'Data Structure'
//     console.log(output);
// } else {
//     console.log('Invalid input');   
// }

//Solution -3

// let a = parseInt(prompt('Enter the value of a',""));
// let b = parseInt(prompt('Enter the value of a',""));
// let c = parseInt(prompt('Enter the value of a',""));
// if(a>b && a>c){
//     console.log("Max number is" + a);
// }else if(b>a && b>c){
//     console.log("Max number is" + b);
// }else if(c>a && c>b){
//     console.log("Max number is" + c);
// }else{
//     console.log("Try Again");
// }

//Solution -4

let a = parseInt(prompt('Enter the value of a',""));
let b = parseInt(prompt('Enter the value of b',""));
let c = parseInt(prompt('Enter the value of c',""));
if(a<b && a<c){
    console.log("Smallest number is" + " " + a);
}else if(b<a && b<c){
    console.log("Smallest number is" + " " + b);
}else if(c<a && c<b){
    console.log("Smallest number is" + " " + c);
}else{
    console.log("Try Again");
}

//Solution -5

// let a = parseInt(prompt("Enter the numbers"));
// let b = parseInt(prompt("Enter the numbers"));
// let c = parseInt(prompt("Enter the numbers"));

//     if (a+b+c === 180) {
//         if (a < 90 || b < 90 || c < 90) {
//             console.log("Acute angle.");
//         } else {
//             console.log("Obtuse angle");
//         }
//     } else {
//             console.log("try again");
//   }