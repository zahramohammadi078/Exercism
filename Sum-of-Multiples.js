  export const sum = function(MNumArray, num) {
    let multiples = [];
  
   
    for (let factor of MNumArray) {
      if (factor === 0) continue;
      for (let i = factor; i < num; i += factor) {
        if (multiples.indexOf(i) === -1) {
          multiples.push(i);
        }
      }
    }
  
   
    return multiples.reduce(function(ac, val) {
      return ac + val;
    }, 0);
  };
  