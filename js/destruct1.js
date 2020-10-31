// Array Destruct Assignment
// 배열 해체 할당
const [a, b, c] = [1, 2];

// array할당은 순서대로 할당되어 a에 1, b에는 2가 할당되므로 log 출력 시 1 2 undefined가 출력된다
console.log(a, b, c);

// Object Destruct Assignment
// 객체 해체 할당
const {f, g} = {d:1, f:5};

// key에 맞추어 할당 되기 때문에, f라는 key에는 5라는 value, g라는 key에는 value가 없으므로 log 출력 시 5 undefined가 출력된다
console.log(f, g);