module.exports = function count(s, pairs) {
  let answer = 0, N = 1 , isRight;

  for(let index = 0; index < pairs.length; index++){
    N *= pairs[index][0] ** pairs[index][1];
  }
  if(N > 100000000) return false;

  let greatestCommonDivisor = function(a, b) {
    if ( !b) {
        return a;
    }
    return greatestCommonDivisor(b, a % b);
  };

  let checkOne = function(a,b){
    return greatestCommonDivisor(a,b) === 1 ? true : false;
  }

  let checkZero = function(a,b){
    return greatestCommonDivisor(a,b) !== 1 ? true : false;
  }
 
  for (let k = 0; k < N; k++) {
    for (let j = 0; j < s.length; j++) {
        if (+s[j] === 1) {
            if (checkOne(k+j,N)) isRight = true;
              else {
                isRight = false;
                break;
              }
        } 
        if (+s[j] === 0) {
            if (checkZero(k+j,N)) isRight = true;
              else {
                isRight = false;
                break;
              }
        }
    }
    isRight === true ? answer++ : answer+=0;
}
  return answer % 1000000007;
}