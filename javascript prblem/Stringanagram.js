console.log("hello world");


// Input:  str1 = "anagram" , str2 = "grammar" , k = 3
// Output:  Yes
// Explanation: We can update maximum 3 values and 
// it can be done in changing only 'r' to 'n' 
// and 'm' to 'a' in str2.

// Input:  str1 = "geeks", str2 = "eggkf", k = 1
// Output:  No
// Explanation: We can update or modify only 1 
// value but there is a need of modifying 2 characters. 
// i.e. g and f in str 2.


var arr=[1,2,3,4,5,7,8];


var first =-1;
var second=-1;

arr.forEach(element => {
    if(element>first){
        second=first;
        first=element;
        

    }

    else if(second<first && second<element){
        second=element;
    }
});
document.getElementById('main').innerHTML=second;

console.log(second);