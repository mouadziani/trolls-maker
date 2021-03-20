<template>
  <main class="w-full bg-png-pattern">
    <navbar />
    <div class="w-full flex justify-between h-full-rest">
      <sidebar />
      <div class="flex flex-col flex-1 h-full">
        <div class="w-full bg-white shadow-lg px-4 p-3">selected item options here ...</div>
        <div class="flex items-center justify-center w-full overflow-y-scroll py-10">
          <canvas class="canvas bg-white"></canvas>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from "@/components/layout/Navbar.vue";
import Sidebar from "@/components/layout/sidebar/Sidebar.vue";

export default {
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<style scoped>
.h-full-rest {
  height: calc(100vh - 70px);
}
.bg-png-pattern {
  background-color: #fff !important;
  background-image: url(/img/bg.svg);
}
.canvas {
  width: 350px;
  height: 480px;
  box-shadow: 0 0 5px #a5a5a5;
}
</style>