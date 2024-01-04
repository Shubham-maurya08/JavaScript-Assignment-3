// Q1.Find Grades
// Your school has the following grading system based upon the marks (M) obtained by a student:
//  If M≤10, the grade will be E.
//  If 11≥M≤20, the grade will be D.
//  If 21≥M≤30, the grade will be C.
//  If 31≥M≤40, the grade will be B.
//  If 41≥M≤50, the grade will be A.
// Your friend will enter his marks out of 50, and your task is to print his grades using a switch statement.
// Note: You have to complete findGrades function. No need to take any input.
// Solution-:

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

// Q2. Get Value
// You are provided with a table containing some characters and their corresponding values. Your task will be to
// find the value from the
// table corresponding to an input character and return it.
// | P or p - PrepBytes |
// | Z or z - Zenith |
// | E or e - Expert Coder |
// | D or d - Data Structure |
// Note: You have to complete getValue function. No need to take any input.
//Solution-:

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

// Q3. Find the maximum out of three numbers.
// Take three numbers and print the largest number among them if all of three are same print −1−1.
// Note: You have to complete Max_out_of_three. No need to take any input.
//Solution-:

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

// 4. Second Smallest
// You are given 33 distinct integers X, Y and Z and your task is to find and return the second smallest integer among the three provided integers.
// Note: You have to complete findSndSmallest function. No need to take any input.
//Solution-:

// let a = parseInt(prompt('Enter the value of a',""));
// let b = parseInt(prompt('Enter the value of b',""));
// let c = parseInt(prompt('Enter the value of c',""));
// if((a<b && a>c)||(a>b && a<c)){
//     console.log(a);
// }else if((b<a && b>c) || (b>a && b<c)){
//     console.log(b);
// }else{
//     console.log(c);
// }

// Q5. Check whether the triangle is Acute or Obtuse
// Write a program takes takes three angles and checks whether the triangle is acute or obtuse.
// Note: You have to complete Triangle_Check. No need to take any input

// Example:
//     Sample Input-:
//     60 100 20
//     Sample Output-:
//     obtuse
//Solution-:

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
