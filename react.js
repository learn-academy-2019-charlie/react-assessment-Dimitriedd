// React Assessments

// 1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...
console.log("1. Is commented out")
/*  import React , { Component } from "react";
  
  class IAm extends Component {
    render(){
      return(
          <p>I am a component</p>
        );
    }
  }
  
  export default IAm;*/
// 2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below. 
console.log("2.")

var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

/*stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})*/

// your for loop here, you can use the same stuffArray array
var indexFinder=(arr)=>{
  for(let i=0;i< arr.length;i++){
    console.log(`${arr[i]} is at index: ${i}`)
  }
}
indexFinder(stuffArray)

// 3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price
console.log("3.")

var prices = [2,6,25,6,7,2,8]
var steal = function(arr){
  // your logic here
  let newArr = arr.sort((a,b)=>{return a-b})
  return `The lowest price is $${newArr[0]}`  
}
console.log(steal(prices))
