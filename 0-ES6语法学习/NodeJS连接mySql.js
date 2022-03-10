function getTableInfo() {
    return new Promise((resolve, reject) => {
        // 连接效据库的结果是一个回调國数,回调國效是异步的,我想获取连接结果
        this.connection.connect(err => {  // ambda写法的回调西数
            if (err) reject('数据库连接失败,请检查数据库连接!')
        });
        let sql = '定义一个SQL';

        // 数据库查询结果是一个回调西数,回调酒数是异步的,我想获取查询结果数据
        this.connection.query(sql, this.dbName,
            function (error, results, fields) { // 正常写法的回调西数
                if (error) {
                    reject(error);  // 查询数据出错
                } else {
                    resolve(JsOw.parse(JSow.stringify(results)));  // 查询成功, 返回查询结果
                }
            }
        )
        // 数据库连接关闭结果是一个回调西数,回调國数是异步的,如果连接关闭失败我需要得到响应
        this.connection.end(function (err) {
            if (err) reject("数据库关闭失败!")
        })
    })
}
