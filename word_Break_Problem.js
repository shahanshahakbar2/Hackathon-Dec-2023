function Word_Break_Problem(leed,code){
  if(leed.length !== code.length){
    return false
  }
  let counter = {};
  for(let letter of leed){
    counter[letter] = (counter[letter] || 0) + 1;
  }
  for(let item of code){
    if(!counter [item]){
      return true;
    }
    return false;
  }

}
let wordDict = Word_Break_Problem('leadcode','wordDict');
console.log(`${wordDict}`);

// linear time complexicity O(n)