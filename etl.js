export const transform = (oldFormat) => {
    const newFormat = {}; 
  
    for (const pointValue in oldFormat) {
      
      const lettersWithThisScore = oldFormat[pointValue];
  
      
      for (const uppercaseLetter of lettersWithThisScore) {
       
        const lowercaseLetter = uppercaseLetter.toLowerCase();
        newFormat[lowercaseLetter] = Number(pointValue); 
      }
    }
  
    return newFormat; 
  };
  