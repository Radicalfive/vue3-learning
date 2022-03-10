function Player(name, age) {
    this.name = name;
    this.age = age;
}

// 定义对象的成员函数 toPrint

Player.prototype.toPrint = function () {
    console.log(this.name + "______" + this.age);
}

var player1 = new Player("tom", 30);
var player2 = new Player("jack", 20);

player1.toPrint();
player2.toPrint();