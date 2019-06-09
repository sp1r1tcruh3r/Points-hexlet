/*
Реализуйте абстракцию (набор функций) для работы с прямоугольником, стороны которого всегда параллельны осям. Прямоугольник может располагаться в любом месте координатной плоскости.

При такой постановке задачи достаточно знать только три параметра для однозначного задания прямоугольника на плоскости: координаты левой-верхней точки, ширину и высоту. Зная их, мы всегда можем построить прямоугольник одним единственным способом.

      |
    4 |    точка   ширина
      |       *-------------
    3 |       |            |
      |       |            | высота
    2 |       |            |
      |       --------------
    1 |
      |
------|---------------------------
    0 |  1   2   3   4   5   6   7
      |
      |
      |

Основной интерфейс:

    makeRectangle (конструктор) - создаёт прямоугольник. Принимает параметры: левую-верхнюю точку, ширину и высоту.
    Селекторы getStartPoint, getWidth и getHeight

Вспомогательные функции для выполнения расчетов:

    square - возвращает площадь прямоугольника (a * b).
    perimeter - возвращает периметр прямоугольника (2 * (a + b)).
    containsTheOrigin - проверяет, принадлежит ли центр координат прямоугольнику (не лежит на границе прямоугольника, а находится внутри). Чтобы в этом убедиться, достаточно проверить, что все вершины прямоугольника лежат в разных квадрантах (их можно вычислить в момент проверки).

Так как это интерфейсные функции, то они должны быть экспортированы. Если этого не сделать, система модулей js не даст ими воспользоваться.

// Создание прямоугольника:
// p - левая верхняя точка
// 5 - ширина
// 4 - высота
//
// p    5
// -----------
// |         |
// |         | 4
// |         |
// -----------

const p = makePoint(0, 1);
const rectangle = makeRectangle(p, 5, 4);

// Вычисление площади прямоугольника
square(rectangle); // 20;

perimeter(rectangle); // 18
containsTheOrigin(rectangle); // false

const rectangle02 = makeRectangle(makePoint(-4, 3), 5, 4);
containsTheOrigin(rectangle02); // true

containsTheOrigin(makeRectangle(makePoint(-4, 4), 5, 2)); // false
containsTheOrigin(makeRectangle(makePoint(-4, 3), 2, 8)); // false
*/
import { makePoint, getX, getY, quadrant, toString as pointToString } from 'hexlet-points';
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const makeRectangle = (start, width, height) => {
  const wh = cons (width, height);
  return cons (start, wh);
};
export const getStartPoint = rect => getX(rect);
export const getWidth = rect => getX(getY(rect));
export const getHeight = rect => getY(getY(rect));
export const square = rect => getWidth(rect)*getHeight(rect);
export const perimeter = rect => 2*(getWidth(rect)+getHeight(rect));
export const containsTheOrigin = rect =>{
const point1 = getStartPoint(rect);
  const point2 = makePoint(getX(point1) + getWidth(rect), getY(point1) - getHeight(rect));
  return quadrant(point1) === 2 && quadrant(point2) === 4;
}
// END
