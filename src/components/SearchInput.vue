<script setup>
defineProps({
  searchTitle: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["update:searchTitle"]);
const updateValue = (value) => emit("update:searchTitle", value);
</script>

<template>
  <input
    type="text"
    placeholder="Name"
    :value="searchTitle"
    v-on:input="updateValue($event.target.value)"
  />
</template>

<style scoped lang="scss">
input {
  border: 1px solid lightgrey;
  padding: 10px;
  &:focus-visible {
    outline: none;
    border: 1px solid dodgerblue;
  }
}
</style>
