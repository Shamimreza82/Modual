/// dfalt paramiter

// function add (num1 = 0, num2 = 0){
//     const result = num1 + num2; 
//     console.log (num1, num2, result)
//     return result; 
// }

// const sum = add(3);

/// Tamplatejs 


// const first = "shamim"; 
// const last = "reza"; 

// const fullName = first + " " + last; 
// console.log (fullName)

// const a  = 10; 
// const b = 20; 
// const result = " your Result"+ " " + a + " " + b + " of " + (a + b); 
// console.log (result); 



// const math = `The sum of
// ${a} and ${b} is ${a + b}`
// console.log (math)

/// Arrow function 

// const myFunction = (a, b) => {
//    const Multiplay =  a * b;
//    const sum = a + b; 
//    const divisition = a - b;  
//    return ` This is your all result: Multiplay:- ${Multiplay} sum:- ${sum} division:- ${divisition}`
// } 

// const sum = myFunction (5, 6); 
// console.log (sum); 


// for (let itms of sum){
//     console.log (itms); 
// }


// const person = {
//     name: "shamim reza",
//     age: 29, 
//     hight: 5.8,
// }

// const gatName = person => person.name,; 
// console.log (gatName(person)); 


// sprade oparator 


// const max = Math.max(15, 55, 77, 444, 88, 66, 88, 999, 66); 

// const numbers = [ 44, 44, 55, 11, 11, 44, 88, 41,]
// const arryMax = Math.max(...numbers); 

// const num1 = [ 44, 44, 55, 11, 11, 44, 88, 41,]; 
// const num2 = num1; 
// const num3 = [...num1]; 
// num2.push(41); 
// num1.push(330); 
// num2.pop()
// num2.pop()
// console.log (num2); 
// console.log (num3)


// distuctureng



// const friend = {
//     name: "rohan",
//     age: 22,
//     phone: "01365745485", 
//     money: 122414414
// }


// const {phone, age: year, money} = friend; 
// console.log (year)

// // array  distuchring 
// const number = [45, 25]
// const [first, seond] = number; 
// const 



// const mullt = (a, b, c) => a * b * c;  

// const final = mullt(5, 8, 6); 
// console.log (final); 

// const case1 = "I am a developer."; 
// const case2 = "I love Code."; 
// const case3 = "i love to eat biryani"; 

// const finale = `${case1}
// ${case2} 
// ${case3}`; 
// console.log (finale); 



// const defaltValue = (a =0, b=0) => a + b; 

// console.log (defaltValue(5))



// problem Task Solution: 2.

// const friendName = ["shakib", "salmann", "rahimnnn", "abdullnnn"]
// const fName = (arr) => {
//     let dubleName = [];  
//     for (let items of arr){
//         if (items.length <= 7){
//           dubleName.push(items); 
//           console.log (dubleName);
//         }
//     }
//     return dubleName; 
// }

// const friend = fName(friendName); 
// console.log (friend); 







//  const numbers = [3, 4, 5, 6, 8]; 

//  const avarage = (arr) => {
//     const arrys = Math.pow(...arr); 
//       console.log (arrys); 
//  }

//  const totalAvarage = avarage(numbers); 

// inconmplate 






// problem Task Solution: 4

const arr1 = [ 23, 12, 4, 5, 77, 7]; 
const arr2 = [ 33, 44, 66, 24, 66, 77]; 

const maxNumber = (arr1, arr2) => {
    const attatsArry = [...arr1, ...arr2]; 
    const maxNumber = Math.max(...attatsArry); 
    const minNumber = Math.min(...attatsArry); 
    return `Max Number:${maxNumber} and Min Number: ${minNumber}`; 
}

const maxNumberInArray = maxNumber(arr1, arr2)
console.log (maxNumberInArray); 

