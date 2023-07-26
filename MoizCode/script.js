// Find duplicates 

// Input : n = 7 and array[] = {1, 2, 3, 6, 3, 6, 1}
// Output: 1, 3, 6

// Explanation: The numbers 1 , 3 and 6 appears more
// than once in the array.

// Input : n = 5 and array[] = {1, 2, 3, 4 ,3}
// Output: 3

// Solution 
const arr = [1, 2, 3, 6, 3, 6, 1]
const sol = []
const hash = {}

arr.forEach(el=>{
    if(hash[el] === undefined) hash[el] = 1
    else hash[el] += 1

})

Object.entries(hash).map(el=> {if(el[1] >1) sol.push(el[0])})
console.log(sol)


document.getElementById('answer').innerHTML = sol
document.getElementById('problem').innerHTML = arr


//everthing is good and alright good work Abdul Moiz