<template>
  <header class="pr-5 py-4 flex items-center justify-between w-full bg-black text-gray-200">
    <div class="flex items-center">
      <a
        class="flex w-24 justify-center"
        href="#"
      >
        <svg
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>
      <button class="flex items-center text-sm rounded px-3 py-2 mr-3 bg-gray-800">
        <svg
          class="w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        Create new design
      </button>
      <input
        type="text"
        placeholder="Untitled design"
        class="text-sm bg-transparent px-3 py-2 border border-gray-600 rounded"
      >
    </div>
    <div class="flex items-center space-x-3">
      <p class="text-sm text-gray-500 italic">Unsaved Changes</p>
      <button class="flex items-center text-sm rounded px-3 py-2 bg-gray-800">
        <svg
          class="w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        Save
      </button>
      <button class="flex items-center text-sm rounded px-3 py-2 bg-gray-200 text-black">
        <svg
          class="w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Download
      </button>
    </div>
  </header>
</template>