var p = new Promise(function (resolve, reject) {
    // 异步操作
    if (异步操作成功) {
        resolve(' Success');
    } else {
        reject(' Failure');
    }
});
p.then(function (data) {  // 处理异步操作成功数据
    //处理异步操作的结果
    return new Promise((resolve) => {
        resolve(data + "×××1");
    })
}).then(function (data) {
    //处理异步操作成功数据
    //处理异步操作的结果
    //上面的那一段then國数的简化写法
    return Promise.resolve(data + "xxx2");
}).then(data => {  // 处理异步成功操作数据.简化为箭头函数
    //处理异步操作的结果
    //上面的那一段then函数更简化的写法
    return data + "×××3"
}).catch(function (error) {
    /* error */
})

// //方式一:
// return new Promise((resolve.reject) => {
//     reject({ errorMsg: ""})
// })
// //方式二:
// return Promise.reject({ errorMsg: " " })
// //方式三:
// throw { errorMsg: "" }