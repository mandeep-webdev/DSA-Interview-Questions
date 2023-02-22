// Given -- an Array containing numbers in the range of 0 to N
// eg nums=[3,1,0] N=3  and Ans = 2

const findMissing = (arr) => {
  let i=0
  while(i< arr.length){
    const correctIndex = arr[i]
    if(arr[i] < arr.length && arr[i]!==arr[correctIndex]){
      swap(arr,i,correctIndex)
    }
    else {
      i++
    }
  }
  // search for missing number
  for(let i=0; i<arr.length; i++){
    //case1 when arr contains N
    if(arr[i]!==i){
      return i
    }
    
  }
  
  // case2 when array doesnot contain N
  return arr.length
    
}

const swap = (arr,index1,index2) => {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

const ans = findMissing([0,2,3,4,5])// n=5
console.log(ans)