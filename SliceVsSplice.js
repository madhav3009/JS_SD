const arr = [1,2,3,4,5];
console.log(arr);

//Slice (Immutable)

console.log('Returns selected value from arr',arr.slice(0,2)) //(startIndex, numberOfItems)
console.log('No change in arr after Slice method',arr);

//Splice (Mutable)
console.log('Returns Deleted value from arr',arr.splice(0,2))
console.log('Updated arr after Splice method',arr);

//Splice can also be used to add element
console.log('Returns Deleted value from arr which is null here',arr.splice(0,0,6))
console.log('Updated array with inserted element 6 in the beginning', arr)