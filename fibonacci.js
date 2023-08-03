// using recursive method
function fibonachiRecursive(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const fibSeq = fibonachiRecursive(n - 1);
  fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length -  2]);
  return fibSeq;
}

//  using iterative
function fibonachiIterative(n){
    if(n <= 0) return [];
    let seq = [0,1]
    for(let i=2; i<n; i++){
        seq.push(seq[i-1] + seq[i-2])
    }
    return seq;
}
console.log(fibonachiIterative(10))


JSON.stringify