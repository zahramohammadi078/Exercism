//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color) => {

    let index = -1;
   COLORS.forEach((element, i) => {
     if (element === color) {
       index = i;
     }
   });
   return index;
 
   
 }
 export const COLORS =[
   'black',
   'brown',
   'red',
   'orange',
   'yellow',
   'green',
   'blue',
   'violet',
   'grey',
   'white',
 ];