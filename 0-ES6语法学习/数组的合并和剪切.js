// concat可以合并⼀项，也可以合并⼀个数组。所以可以⽤它向数组末尾添加项。
let players = ["curry", " james", "kobe "];
let players2 = players.concat(" jordan", ["拉里伯德", "魔术师"]);
console.log(players2);  // ["curry","james ","kobe", "jordan", "拉里伯德","魔术师"]

// slice可以剪切⼀个数组的元素成为⼀个新的数组
// 数组下标从0开始
// 从第2项开始剪切到最后，I”james“，”kobe“，”jordan”，“拉里伯德”，”魔术师”]
console.log(players2.slice(1));
// 从第2项开始剪切到第5项，不包含第5项。 ["james", "kobe", "jordan"]
console.log(players2.slice(1, 4));