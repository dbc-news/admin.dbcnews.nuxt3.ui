<template>
  <div>
    <XAppDrawer :drawer="isOpen" @closeDrawer="isOpen = !isOpen" />
    <div
      class="relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200  lg:border-none"
    >
      <button
        type="button"
        class="px-4 text-gray-400 border-r border-gray-200  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
        @click="isOpen = true"
      >
        <span class="sr-only">Open sidebar</span>
        <MenuAlt1Icon class="w-6 h-6" aria-hidden="true" />
      </button>
      <XAppNavbar />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import { MenuAlt1Icon } from "@heroicons/vue/outline";

export default {
  components: {
    MenuAlt1Icon,
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen,
    };
  },
};
</script>

