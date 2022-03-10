// 对象中的this指针
class Player {
    // 定义构造函数
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // toPrint() {
    //     window.setTimeout(function() {
    //         console.log(this.name + "---" + this.age);
    //     }, 1000);
    // }

    // 额外定义this指针的替身
    toPrint() {
        let _this = this;
        window.setTimeout(function() {
            console.log(_this.name + "---" + _this.age);
        }, 1000);
    }

    // 使⽤ bind(this)
    toPrint() {
        window.setTimeout(function() {
            console.log(this.name + "---" + this.age);
        }.bind(this), 1000);
    }

    // 最简单的⽅式：箭头函数
    toPrint() {
        window.setTimeout(() => {
            console.log(this.name + "---" + this.age);
        }, 1000);
    }
}

let player1 = new Player("james", 35);
player1.toPrint();