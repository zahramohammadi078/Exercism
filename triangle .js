//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (count) => {

  const Triangle = [];
    
    for (let i = 0; i < count; i++) {
        const result = [];
        
        for (let j = 0; j <=i; j++) {
            if (j === 0 || j === i) {
                result.push(1);
            } else {
                result.push(Triangle[i - 1][j - 1] + Triangle[i - 1][j]);
            }
        }
        
        Triangle.push(result);
    }
    
    return Triangle;
 
  
 
 



};
