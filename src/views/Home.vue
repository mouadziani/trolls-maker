<template>
  <main class="w-full bg-gray-900">
    <div class="w-full flex justify-between">
      <div class="flex w-2/6 h-screen">
        <div class="flex flex-col">
          <button class="bg-white border p-3" @click="addRect()">add rect</button>
        <input type="text" v-model="newObject.fill" class="w-full bg-white p-3 border">
        </div>
      </div>
      <div class="flex w-4/6 h-screen p-12 bg-gray-300 items-center justify-center">
        <canvas ref="canvas" class="bg-white w-full h-full" width="600" height="400"></canvas>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      newObject: {
        width : 60,
        height : 70,
        fill : 'red',
        border: 'green'
      }
    }
  },
  methods: {
    addRect() {
      let rect = new fabric.Rect(this.newObject);
      this.canvas.add(rect);
    },
    initCanvas() {
      this.canvas = new fabric.Canvas(this.$refs.canvas);
    }
  },
  mounted() {
    this.initCanvas()
  }
}
</script>
