<template>
  <div class="flex bg-gray-800 text-gray-200">
    <ul class="flex flex-col h-full w-24 items-center overflow-y-scroll">
      <li class="w-full">
        <a
          @click="toggleSidbar('templates')"
          class="border-b cursor-pointer border-gray-700 flex flex-col items-center py-4 text-xs hover:bg-gray-600"
        >
          <svg
            class="w-6 h-6 mb-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            />
          </svg>
          <span>Template</span>
        </a>
      </li>
      <li class="w-full">
        <a
          @click="toggleSidbar('elements')"
          class="border-b cursor-pointer border-gray-600 w-full flex flex-col items-center py-4 text-xs hover:bg-gray-600"
        >
          <svg
            class="w-6 h-6 mb-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <span>Elements</span>
        </a>
      </li>
      <li class="w-full">
        <a
          @click="toggleSidbar('texts')"
          class="border-b cursor-pointer border-gray-600 w-full flex flex-col items-center py-4 text-xs hover:bg-gray-600"
        >
          <svg
            class="w-8 h-6 mb-1 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M16 6a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h5v11a1 1 0 0 0 2 0V7h5a1 1 0 0 0 1-1zm5 5h-6a1 1 0 0 0 0 2h2v5a1 1 0 0 0 2 0v-5h2a1 1 0 0 0 0-2z" />
          </svg>
          <span>Text</span>
        </a>
      </li>
      <li class="w-full">
        <a
          @click="toggleSidbar('images')"
          class="w-full cursor-pointer flex flex-col items-center py-4 text-xs hover:bg-gray-600"
        >
          <svg
            class="w-6 h-6 mb-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>Images</span>
        </a>
      </li>
    </ul>
    <div
      v-if="isOpned"
      class="w-96 h-full px-4 py-6 overflow-y-scroll"
    >
      <Templates v-if="selectedContent == 'templates'" />
      <Elements v-if="selectedContent == 'elements'" />
      <Texts v-if="selectedContent == 'texts'" />
      <Images v-if="selectedContent == 'images'" />
    </div>
  </div>
</template>

<script>
import Templates from "@/components/layout/sidebar/contents/Templates.vue";
import Elements from "@/components/layout/sidebar/contents/Elements.vue";
import Texts from "@/components/layout/sidebar/contents/Texts.vue";
import Images from "@/components/layout/sidebar/contents/Images.vue";

export default {
  components: {
    Templates,
    Elements,
    Texts,
    Images,
  },
  data() {
    return {
      selectedContent: "",
      isOpned: false,
    };
  },
  methods: {
    toggleSidbar(content) {
      if (this.selectedContent == content) {
        this.isOpned = !this.isOpned;
      } else {
        this.isOpned = true;
        this.selectedContent = content;
      }
    },
  },
};
</script>