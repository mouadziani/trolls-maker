<template>
  <main class="w-full bg-png-pattern">
    <navbar />
    <div class="w-full flex justify-between h-full-rest">
      <sidebar />
      <div class="flex flex-col flex-1 h-full">
        <div class="w-full bg-white shadow-lg px-4 p-3">selected item options here ...</div>
        <div class="flex items-center justify-center w-full overflow-y-scroll py-10">
          <main-canvas />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from "@/components/layout/Navbar.vue";
import Sidebar from "@/components/layout/sidebar/Sidebar.vue";
import MainCanvas from "@/components/MainCanvas.vue";

export default {
  components: {
    Navbar,
    Sidebar,
    MainCanvas,
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
</style>