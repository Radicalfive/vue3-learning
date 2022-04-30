<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todoList">todoList</router-link> |
      <router-link to="/MarkRaw">MarkRaw</router-link> |
      <router-link to="/Counter">Counter</router-link> |
      <router-link to="/parent">slots</router-link> |
      <router-link to="/slotName">soltName</router-link> |
      <router-link to="/slotScopes">slotScopes</router-link> |
      <router-link to="/dynamicArguments">DynamicArguments</router-link> |
      <router-link to="/globalApi">globalApi</router-link> |
      <router-link to="/transition">transition</router-link> |
      <router-link to="/tele">tele</router-link> |
      <router-link to="/TestAsync">Async</router-link> |
      <router-link to="/TestAsync1">Async1</router-link> |
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  // padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
