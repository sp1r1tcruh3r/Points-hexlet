/*
Реализуйте абстракцию для работы с рациональными числами, используя пары:

    Конструктор make(numer, denom).

    Селекторы numer (числитель) и denom (знаменатель).

    Функцию toString, возвращающую строковое представление рационального числа. Например для дроби 3/4 созданной так make(3, 4), строковым представлением будет 3 / 4.

    Предикат isEqual, проверяющую равенство двух рациональных чисел. Например isEqual(make(1, 2), make(2, 4)).

    Функцию add, выполняющую сложение дробей.

    Функцию sub, выполняющую вычитание дробей.

    Функцию mul, выполняющую умножение дробей.

    Функцию div, выполняющую деление дробей.

Экспортируйте созданные функции.

Обратите внимание, что результатом любой арифметической операции над рациональным числом будет рациональное число.
Примеры

const rat1 = make(2, 3);
const rat12 = make(4, 6);
const rat2 = make(7, 2);

toString(rat12); // '4 / 6'
isEqual(rat1, rat12); // true

add(rat1, rat2); // 25/6
sub(rat2, rat1); // 17/6
mul(rat1, rat2); // 14/6
div(rat1, rat2); // 4/21
*/
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const make = (numer, denom) => cons(numer, denom);
export const numer = rat => car(rat);
export const denom = rat => cdr(rat);
export const toString = rat => `${numer(rat)} / ${denom(rat)}`
export const isEqual = (ratOne, ratTwo) => numer(ratOne)*denom(ratTwo)===denom(ratOne)*numer(ratTwo)?true:false;
export const add = (ratOne, ratTwo) => {
  const a = numer(ratOne);
  const b = denom(ratOne);
  const c = numer(ratTwo);
  const d = denom(ratTwo);
  return make((a * d + b * c), (b * d));
};
export const sub = (ratOne, ratTwo) => {
  const a = numer(ratOne);
  const b = denom(ratOne);
  const c = numer(ratTwo);
  const d = denom(ratTwo);
  return make((a * d - b * c), (b * d));
};
export const mul = (ratOne, ratTwo) => {
  const a = numer(ratOne);
  const b = denom(ratOne);
  const c = numer(ratTwo);
  const d = denom(ratTwo);
  return make((a * c), (b * d));
};
export const div = (ratOne, ratTwo) => {
  const a = numer(ratOne);
  const b = denom(ratOne);
  const c = numer(ratTwo);
  const d = denom(ratTwo);
  return make((a * d), (b * c));
};

// END
