// Given -- an arr range from 1 to n , return an arr of no which doesnot appear
// eg n=8 [4,3,2,7,8,2,3,1] ans = [5,6]
// [1,2,2,3,3,4,7,8]

const findDisapperedNumbers = (arr) => {
  let i=0
  while(i< arr.length){
    const correctIndex = arr[i] - 1
    if(arr[i]!==arr[correctIndex]){
      swap(arr,i,correctIndex)
    }
    else {
      i++
    }
  }
  // ans after sorting -- [1,2,3,4,3,2,7,8] 
  
  
  // find missing numbers..
   const missingNumbers = []
   for(let i=0; i<arr.length; i++){
  
     if(arr[i] <= arr.length && arr[i]!== i+1){
      missingNumbers.push(i+1)
      }
    
    
  }
  return missingNumbers
  
}
const swap = (arr,index1,index2) => {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

const ans = findDisapperedNumbers([4,3,2,7,8,2,3,1])
console.log(ans)