/*
Рассмотрим задачу представления отрезков на прямой плоскости. Каждый отрезок представляется как пара точек: начало и конец. Он может быть описан, например, так: [(1, 3), (5, 4)]. Это означает, что наш отрезок начинается в точке (1, 3) и заканчивается в точке (5, 4) координатной плоскости.

В этом задании необходимо разработать абстракцию для работы с отрезками (англ. segment), которая позволяет строить их из точек, извлекать из отрезков составные части (начало или конец сегмента), а также получать текстовое представление сегмента.

Абстракция заключается в том, что конкретное представление сегмента определяется внутри функций, описывающих работу с отрезками и зависит от создателя библиотеки. С точки зрения клиента библиотеки (кода который ее вызывает), не важно как конкретно устроен сегмент, важно только то, что есть некоторый набор функций (абстракция), позволяющий работать с ним.
segments.js

Определите и экспортируйте следующие функции:

    Конструктор makeSegment, который принимает на вход две точки и возвращает сегмент. Первая точка это начало сегмента, вторая это конец.
    Селекторы startSegment и endSegment, которые извлекают из сегмента его начальную и конечную точку соответственно.
    Вспомогательную функцию segmentToString, которая возвращает текстовое представление сегмента: [(1, 2), (-4, -2)].
    Функцию midpointSegment, которая находит точку на середине отрезка по формулaм: x = (x1 + x2) / 2 и y = (y1 + y2) / 2.

Пример использования абстракции:

import { makePoint, getX, getY, toString as pointToString } from 'hexlet-points';

// не важно, чем является segment с точки зрения реализации, главное, что с ним можно
// работать используя функции для работы с сегментами
const segment = makeSegment(makePoint(1, 2), makePoint(-4, -2));
console.log(segmentToString(segment)); // [(1, 2), (-4, -2)]

const point1 = startSegment(segment);
console.log(pointToString(point1)); // (1, 2)

const point2 = endSegment(segment);
console.log(pointToString(point2)); // (-4, -2)

pointToString(startSegment(segment)) === pointToString(makePoint(1, 2)); // true

pointToString(midpointSegment(segment)); // (-1.5, 0)
*/
import {
  makePoint, getX, getY, toString as pointToString,
} from 'hexlet-points';
import { cons, car, cdr } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const makeSegment = (pointOne, pointTwo) => cons(pointOne, pointTwo);
export const startSegment = (segment) => getX(segment);
export const endSegment = (segment) => getY(segment);
export const segmentToString = segment => `[${pointToString(startSegment(segment))}, ${pointToString(endSegment(segment))}]`;
export const midpointSegment = (segment) => {
  const startPoint = startSegment(segment);
  const endPoint = endSegment(segment);
  const x = (getX(startPoint) + getX(endPoint)) / 2;
  const y = (getY(startPoint) + getY(endPoint)) / 2;

  return cons(x, y);
};
