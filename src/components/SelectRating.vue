<script setup>
import vue3StarRatings from "vue3-star-ratings";
defineProps({
  ratings: {
    type: Array,
    default: [],
  },
  selectedRating: {
    type: Number,
    default: 2,
  },
  radio: {
    type: String,
  },
});
const emit = defineEmits(["update:selectedRating"]);
const updateValue = (value) => {
  emit("update:selectedRating", Number(value));
};
</script>

<template>
  <div class="star-rating-component">
    <div v-for="(option, index) in ratings" :key="index">
      <label :class="'label' + index">
        <input
          type="radio"
          name="radio + index"
          :value="option.ratingStars"
          :checked="index === 0"
          @input="updateValue($event.target.value)"
        />
        <vue3-star-ratings
          :numberOfStars="option.ratingStars"
          inactiveColor="#ff9800"
          :showControl="false"
          :disableClick="true"
          starSize="20"
        />
      </label>
    </div>
  </div>
</template>

<style scoped lang="scss">
label {
  display: inline-flex;
  padding: 20px 0;
  &:not(.label1) {
    margin: 0 20px;
  }

  .vue3-star-ratings__wrapper {
    padding: 0;
    margin: 0;
  }
}
.star-rating-component {
  display: flex;
  margin: 0 20px;
}
</style>
