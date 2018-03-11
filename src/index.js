module.exports = function count(s, pairs) {
  let splitedS = s.split('') , answer = 0,
  N = 1;

  for(let index = 0; index < pairs.length; index++){
    N *= pairs[index][0] ** pairs[index][1];
  }

  let greatestCommonDivisor = function(a, b) {
    if ( ! b) {
        return a;
    }
    return greatestCommonDivisor(b, a % b);
};

for(let index = 0 ; index < splitedS.length; index++){
  if(N > 1000000000) return answer;
  for(let k = 0 ; k <= N; k++)
    if(splitedS[index] === 1){
        if(greatestCommonDivisor(k+index,N) === 1) {
      answer++;    
  }
}
    else{
      if(splitedS[index] === 0){
        if(greatestCommonDivisor(k+index,N) !== 1){
        answer++;
      }
    }
    }
  return answer % 1000000007;
}
}