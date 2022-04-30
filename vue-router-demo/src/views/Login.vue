<template>
  <div class="main">
    <div class="background">
      <div class="shape"></div>
      <div class="shape"></div>
    </div>

    <form>
      <h3>玻璃拟态 | Glassmorphism</h3>

      <label for="username">UserName</label>
      <input
        type="text"
        name="u"
        placeholder="Email or Phone"
        id="username"
        v-model="username"
        required="required"
      />

      <label for="password">PassWord</label>
      <input
        type="password"
        placeholder="Password"
        id="password"
        v-model="password"
        required="required"
      />

      <button class="animated-border-button" @click="goHome">登录</button>
      <button class="animated-border-button">注册</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    goHome() {
      this.$router.push({ path: "/", query: { username: this.username } });
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

.background {
  width: 600px;
  height: 500px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  background: #333;
  border-radius: 10px;
}

.background .shape {
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
}

/* 使用渐变色 */
.shape:first-child {
  background: linear-gradient(#227093, #34ace0);
  left: -90px;
  top: -80px;
}

.shape:last-child {
  background: linear-gradient(to right, #218c74, #33d9b2);
  right: -90px;
  bottom: -80px;
}

form {
  width: 600px;
  height: 500px;
  background-color: rgba(255, 255, 245, 0.18);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}

form * {
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}

/* 文字大小，居中 */
form h3 {
  font-size: 24px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}

input {
  display: block;
  height: 45px;
  width: 100%;
  background-color: rgba(139, 131, 131, 0.07);
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}

::placeholder {
  color: #daf3ff;
}

button {
  margin-top: 50px;
  width: 45%;
  background-color: rgba(255, 255, 255, 0.27);
  color: #eaf0fb;
  text-align: center;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 20px;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.47);
}
.animated-border-button {
  /* background-color: #263059; */
  border: none;
  color: #fff;
  outline: none;
  padding: 12px 40px 10px;
  position: relative;
}

.animated-border-button:before,
.animated-border-button:after {
  border: 0 solid transparent;
  transition: all 0.3s;
  content: "";
  height: 0;
  position: absolute;
  width: 24px;
}

.animated-border-button:before {
  border-top: 2px solid rgba(255, 255, 255, 0.27);
  right: 0;
  top: -4px;
}

.animated-border-button:after {
  border-bottom: 2px solid rgba(255, 255, 255, 0.27);
  bottom: -4px;
  left: 0;
}

.animated-border-button:hover:before,
.animated-border-button:hover:after {
  width: 100%;
}
</style>
