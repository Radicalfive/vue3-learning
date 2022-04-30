<template>
  <div id="app">
    <div class="login">
      <label>
        <input
          type="text"
          v-model="nickname"
          id="nickname"
          placeholder="输入昵称"
        />
      </label>
      <button @click="open" class="animated-fill-button">加入连接</button>
    </div>
    <div class="login">
      <label>
        <input
          type="text"
          v-model="content"
          id="content"
          placeholder="输入内容"
        />
      </label>
      <button @click="sendMsg" class="animated-fill-button">发送消息</button>
    </div>
    <div>
      <h3>
        {{ message }}
      </h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {},

  data() {
    return {
      ws: null,
      content: "",
      message: "",
      nickname: "",
    };
  },

  sockets: {
    //查看socket是否连接成功
    connect() {
      console.log("socket.io链接成功");
      // 向服务端发消息
      // this.sockets.emit("ClientReceive", "socket.io连接成功后向后台发送消息");
    },
    disconnect() {
      console.log("socket.io断开链接");
    }, //检测socket断开链接
    reconnect() {
      console.log("socket.io重新链接");
    },
    //客户端接收后台传输的socket事件
    ClientReceive(data) {
      const messageData =
        data.message == "hello client" ? "" : JSON.parse(data);
      if (messageData) {
        this.$elementMessage(messageData.content);
        // 格式化消息时间戳
        messageData.createTime = this.$utils.formatDateAll(
          messageData.createTime
        );
        this.$store.dispatch("SOCKET_CONTENT_CHANGE", messageData);
      }
      console.log("--messageData", messageData); //接收的消息
    },
  },
};
</script>
    <style>
/* 黑色作为网页的背景色 */
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: url("https://ossstored.oss-cn-shanghai.aliyuncs.com/bg/8320021c7e6f4e199d246ede02722eb1.png");
  width: 100%;
  height: 100%;
}

::placeholder {
  color: #445760;
}

.animated-fill-button {
  padding: 10px 25px;
  border-radius: 4px;
  background: #676e83;
  color: #49aaf8;
  border: 1px solid #49aaf8;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  height: 40px;
  margin-left: 25px;
  margin-top: 9px;
}

.animated-fill-button:hover {
  background: #49aaf8;
  color: #fff;
}

.login {
  display: flex;
}

label {
  display: flex;
  font-size: 14px;
}

input {
  display: flex;
  height: 45px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}

#app {
  width: 400px;
  height: 300px;
  background-color: rgba(255, 255, 245, 0.1);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.09);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 40px;
}
</style>
