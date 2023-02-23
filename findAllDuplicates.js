const findAllDuplicates = (arr) => {
  debugger
  let i = 0
  while(i < arr.length){
    const correct = arr[i] - 1
    if(arr[i] !== arr[correct]){
      swap(arr,i,correct)
    }
    else{
      i++
    }
  }
  //check of duplicates
  
  // [1,2,3,4,3,2,7,8]
  const duplicates = []
  for(let i=0; i<arr.length ; i++){
    
    if(arr[i]!==i+1){
     duplicates.push(arr[i])
      }
   
  }
   return duplicates
  
}
const swap = (arr,index1,index2) => {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

const ans = findAllDuplicates([4,3,2,7,8,2,3,1])
console.log(ans)