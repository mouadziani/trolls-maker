<template>
  <main class="w-full bg-gray-300">
    <navbar />
    <div class="w-full flex justify-between h-full-rest">
      <sidebar />
    </div>
  </main>
</template>

<script>
import Navbar from "@/components/layout/Navbar.vue";
import Sidebar from "@/components/layout/Sidebar.vue";

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
</style>
