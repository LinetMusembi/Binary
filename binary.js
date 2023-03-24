// // Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
// // let num = [45,12,6,89,2,5]
// let target = 6
function mergesort(num){
    if(num.length <= 1){
        return num;
    }

let middle = Math.floor(num.length /2);
let right = mergesort(num.slice(middle));
let left = mergesort(num.slice(0, middle));
return mergesort(right,left);
}
function merge(right,left)
let result = [];
let a =0;
let b =0;
while (a < left.length && b < right.length){
    if(right(a) < left[b]){
        result.push(right[a]);
        a++
    }else{
        result.push(left[b]);
        b++
    }

return result.concat(right.slice(b).left.concat(a))
}
function binarySearch(arr,target){
    let rightIndex = arr.length -1;
    let leftIndex = 0;

    while (rightIndex <= rightIndex);{
        const middle =Math.floor((rightIndex + leftIndex)/2);

        if (arr[middle] === target){
            return middle;
        }else if(arr[middle] < target){
            rightIndex = middle -1;

        }

    }
    return null;
  
    
}
let num = [45,12,6,89,2,5];
let target = 6;

let sortedNum = mergeSort(num);
let targetIndex = binarySearch(sortedNum,target);

console.log(targetIndex);


// Given an unsorted array of numbers return the sorted array in descending order
// let arr=[123,89,5,23,9,56]
function binary (num,target){
    let left = 0;
    let right = num.length -1;
    while(left <= right){ 
    let middle = Math.floor((left + right)/2);
    if(
        num[middle] === target){
            return middle;
        }
        else if(num[middle] < target){
            left = middle+1;
        }
        else{
            right = middle-1;
        }
    
}
return null
}
let num1 = [5,9,23,56,89,123];
let target1 = 47;
console.log(binary(num,target));












// Given the following array, search for the following target
// let target = 34
// let arr2 = [1,4,78,2,67,3];
function binary (num,target){
    let left = 0;
    let right = num.length -1;
    while(left <= right){ 
    let middle = Math.floor((left + right)/2);
    if(
        num[middle] === target){
            return middle;
        }
        else if(num[middle] < target){
            left = middle+1;
        }
        else{
            right = middle-1;
        }
    
}
return null
}
let nums = [1,2,3,4,67,78];
let targets = 47;
console.log(binary(num,target));

