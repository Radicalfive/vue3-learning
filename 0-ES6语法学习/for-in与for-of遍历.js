// for-in与for-of遍历数组
let players = ["curry", "james", "kobe"];
for (index in players) {
    console.log(index + ":" + players[index])
    for (player in players) {
        console.log(player);
    }
}
