<template>
  <input
    type="checkbox"
    class="mx-2 rounded-md form-checkbox"
    :name="boxName"
    :id="boxId"
  />
</template>
<script>
export default {
  props: {
    boxName: {
      required: false,
      type: String,
      default: null,
    },
    boxId: {
      required: false,
      type: String,
      default: null,
    },
  },
};
</script>