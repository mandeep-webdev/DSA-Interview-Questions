const findDuplicateNumber = (arr) => {
  let i = 0
  while(i < arr.length){
    if(arr[i] !== i+1){
      let correct = arr[i] - 1
      if(arr[i]!==arr[correct]){
        swap(arr,i,correct)
      }else{
        return arr[i]
      }
    }
    else{
      i++
    }
  }
  return -1
  
}

const swap = (arr,index1,index2) => {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}
const result = findDuplicateNumber([3,1,3,4,2])
console.log(result)