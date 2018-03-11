module.exports = function count(s, pairs) {
let answer = 0, N = 1 , k = 1;

for(let index = 0; index < pairs.length; index++){
  N *= pairs[index][0] ** pairs[index][1];
  if(N > 100000000) return false;
}

let greatestCommonDivisor = function(a, b) {
  if ( !b) {
      return a;
  }
  return greatestCommonDivisor(b, a % b);
};

for(let index = 0 ; index < s.length; index++){
  if(+s[index] === 1){
    for( ; k <= N; k++){
      if(greatestCommonDivisor(k+index,N) === 1) answer++;    
    }
  }
  else{
    if(+s[index] === 0){
      for( ; k <= N; k++){
      if(greatestCommonDivisor(k+index,N) !== 1) answer++;
  }
  }
}
}
return answer % 1000000007;
}