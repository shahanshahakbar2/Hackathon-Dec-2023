let arr = [1,1,2];
console.log(arr);
for(let i = 0;i<arr.length;i++){
  for(let j =0; j<arr.length;j++){
    let newarr = arr.pop(arr[i]) 
    console.log(newarr);

  }
}