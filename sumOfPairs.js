import { cons, car, cdr, toString } from 'hexlet-pairs'; // eslint-disable-line

// BEGIN (write your solution here)
const sumOfPairs = (pairOne, pairTwo) =>{
  const a = car(pairOne)+car(pairTwo);
  const b = cdr(pairOne)+cdr(pairTwo);
  return cons (a, b);
}
// END
export default sumOfPairs;
//суммирует пары короче ))
