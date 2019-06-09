/*
Реализуйте и экспортируйте следующие функции:

    make
    get1
    get2
    get3

Пример

const triple = make(3, 5, 'I am element from triple');
get1(triple); // 3
get2(triple); // 5
get3(triple); // I am element from triple
*/
/* eslint default-case: 0, consistent-return: 0 */
// BEGIN (write your solution here)
export const make = (x, y, z) => f => f(x, y, z);

export const get1 = triple => triple((x, y, z) => x);
export const get2 = triple => triple((x, y, z) => y);
export const get3 = triple => triple((x, y, z) => z);
// END
