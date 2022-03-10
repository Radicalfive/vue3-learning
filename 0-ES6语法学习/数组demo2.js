let players = [
    { name: "james", age: 36 },
    { name: "curry", age: 31 },
    { name: "kobe", age: 39 }]
// every方法,判断是否数组每一个对象的年龄都大于30
let isGt30 = players.every(function (value, index, arr) {
    return value.age > 30;
})
console.log(isGt30);  // true
//some方法,判断是否数组中有至少一个对象的名字包含cu
let isContainCu = players.some(function (value, index, arr) {
    return value.name.includes("cu");
});
console.log(isContainCu);  // true

// let isGt30 = players.every((value) => value.age > 30);
// let isContaincu = players.some((value) => value.name.includes("cu"));

