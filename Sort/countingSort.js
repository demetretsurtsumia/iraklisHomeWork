//COUNTING SORT

function countingSort(arr) {
    const max = Math.max(...arr)
    let fillerArr = new Array(max+1).fill(0)
   
   for (let i = 0; i < arr.length; i++) {
    fillerArr[arr[i]]++
   }
   var p = 0
   for (let j = 0; j < fillerArr.length; j++) {
    
    while (fillerArr[j]>0) {
        arr[p] = j
        fillerArr[j]--
        p++
    }
   }

   return arr
}


console.log(countingSort([4,52,32,12,60]))
console.log(countingSort([23,42,55,21,3]))
