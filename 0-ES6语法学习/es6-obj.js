// 定义对象
class Player{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //定义一个成员函数
    toPrint() {
        console.log(this.name + "______" + this.age);
    }
}

var player1 = new Player('radical', 32);
player1.toPrint();