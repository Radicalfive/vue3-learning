<template>
  <div id="example">
    <button @click="show = !show" class="animated-fill-button">
      Toggle show
    </button>
    <transition name="bounce">
      <div v-if="show">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          facilisis enim libero, at lacinia diam fermentum id. Pellentesque
          habitant morbi tristique senectus et netus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          facilisis enim libero, at lacinia diam fermentum id. Pellentesque
          habitant morbi tristique senectus et netus.
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let show = ref(true);
    return {
      show,
    };
  },
};
</script>

<style lang="scss" scoped>
#example {
  background-color: #2194c5;
  width: 500px;
  height: 200px;
  margin: 10px auto;
  p {
    color: #fff;
  }
}

.animated-fill-button {
  padding: 10px 20px;
  border-radius: 4px;
  background: #333;
  color: #0cf0e8;
  border: 1px solid #0cf0e8;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
}

.animated-fill-button:hover {
  background: #fff;
  color: #0cf0e8;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>