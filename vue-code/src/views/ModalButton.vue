<template>
  <div>
    <button @click="modalOpen = true" class="animated-border-button">
      Open full screen modal!
    </button>
    <div v-if="modalOpen" class="modal">
      <div>
        I'm a modal!
        <button @click="modalOpen = false" class="animated-border-button">
          Close
        </button>
      </div>
    </div>
    <button @click="modalOpen = true" class="animated-border-button">
      Open full screen modal!
    </button>
    <teleport to="body" :disabled="true">
      <div v-if="modalOpen" class="modal">
        <div>
          I'm a teleported modal! (My parent is "body")
          <button @click="modalOpen = false" class="animated-border-button">
            Close
          </button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  name: "modalButton",
  data() {
    return {
      modalOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}
.animated-border-button {
  background-color: #5f78db;
  border: none;
  color: #fff;
  outline: none;
  padding: 12px 40px 10px;
  position: relative;
  margin-top: 20px;
  margin-right: 20px;
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
  border-top: 2px solid #5f78db;
  right: 0;
  top: -4px;
}

.animated-border-button:after {
  border-bottom: 2px solid #5f78db;
  bottom: -4px;
  left: 0;
}

.animated-border-button:hover:before,
.animated-border-button:hover:after {
  width: 100%;
}
</style>