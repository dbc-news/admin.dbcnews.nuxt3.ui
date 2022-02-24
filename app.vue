<template>
  <div class="antialiased font-solaimanlipi">
    <div id="app">
      <tiptap />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
<script>
import Tiptap from "@/components/Tiptap.vue";

export default {
  name: "App",
  components: {
    Tiptap,
  },
};
</script>