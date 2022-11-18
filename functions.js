// Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 
// 1 if it is vice versa, and 0 if they are equal.
// function compareNumbers(a,b){
//     if(a<b){
//         console.log(-1);
//     }else if(a>b){
//         console.log(1);
//     }else {
//         console.log(0);
//     }
// }
// compareNumbers(7,9);

// Write a function that counts the factorial of a given number. 
// function factorial(x){
//         let num=1;
//         for(let i=1;i<=x;i++){
//                 num *= i;
//         }
//         return num;
//     }
//     console.log(factorial(7));

// Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.
// function numbers(a,b,c){
//     console.log(a+""+b+""+c);
// }
// numbers(7,8,1);

//Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square. 
// function rectangle(a,b){
//     if(b==undefined){
//         console.log(a*a);
//     }else{
//         console.log(a*b);
//     }
// }
// rectangle(8,2);

// Write a function that checks if the given number is perfect. A perfect number is a number equal to the sum of all its divisors. 
// For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.
// function perfectNumber(x){
//         let number=0;
//         for(let i=1;i<x;i++){
//             if(x%i==0){
//                 number += i;
//             }   
//         }
//         if(x == number){
//             console.log("The number ",x," is perfect");
//         }else {
//             console.log("The number",x,"is not perfect");
//         }
//     }
//     perfectNumber(11);

// Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range.
//  Use the previous function to check, if numbers are perfect. 

// function isPerfect(num) {
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }
//     return sum === num;
// }

// function perfectNumbersInRange(min, max) {
  
//     for (let i = min; i <= max; i++) {
//         if (isPerfect(i)) {
//             console.log(i);
//         }
//     }

// }

//Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss.
//  If the seconds are not given, they should be displayed as 00.
// function time(a,b,c){
//        if(c==undefined){
//         let c='00';
//         console.log(a+":"+b+":"+c);
//        }else {
//        console.log(a+":"+b+":"+c);
//         }
//     }
// time(3,50);

// Write a function that accepts hours, minutes, and seconds and returns that time only in seconds.
//  For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.
// function seconds(a,b,c){
//     console.log(a*3600+b*60+c)
// }
// seconds(3,45,27);


// Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.