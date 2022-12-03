<script setup>
import SearchInput from "./SearchInput.vue";
import GenreCheckboxes from "./GenreCheckboxes.vue";
import TvResult from "./TvResult.vue";
import SelectRating from "./SelectRating.vue";
import { ref, computed } from "vue";

const selectedGenres = ref([]);
const fullList = ref([]);
const selectedRating = ref(null);
const searchTitle = ref("");
const selectedLanguage = ref(null);

const ratings = [
  { id: 1, ratingStars: 1 },
  { id: 2, ratingStars: 2 },
  { id: 3, ratingStars: 3 },
  { id: 4, ratingStars: 4 },
];

fetch("https://api.tvmaze.com/shows")
  .then((response) => response.json())
  .then((response) => {
    fullList.value = response;
  });

const genres = computed(() => {
  const uniqueGenres = new Set();
  fullList.value.forEach((item) => {
    if (!item.genres) return;
    item.genres.forEach((genre) => uniqueGenres.add(genre));
  });
  return [...uniqueGenres];
});

const languages = computed(() => {
  const uniqueLanguages = new Set();
  fullList.value.forEach((item) => {
    if (!item.language) return;
    console.log(item.language);
    uniqueLanguages.add(item.language);
  });
  return [...uniqueLanguages];
});

const filteredList = computed(() => {
  if (
    !selectedGenres.value.length &&
    !selectedRating.value &&
    !searchTitle.value.length &&
    !selectedLanguage.length
  )
    return fullList.value;
  return fullList.value
    .filter((item) => {
      if (!selectedGenres.value.length) return true;
      let isInGenres = false;
      for (let genre of item.genres) {
        isInGenres = selectedGenres.value.includes(genre);
        if (isInGenres) {
          break;
        }
      }
      return isInGenres;
    })
    .filter((item) => {
      if (!selectedRating.value) return true;
      return item.rating.average >= selectedRating.value * 2;
    })
    .filter((item) => {
      if (!searchTitle.value) return true;

      return item.name.toLowerCase().includes(searchTitle.value.toLowerCase());
    });
});
</script>

<template>
  <div class="main-container">
    <GenreCheckboxes :genres="genres" v-model:selectedGenres="selectedGenres" />
    <SelectRating :ratings="ratings" v-model:selectedRating="selectedRating" />
    <SearchInput v-model:searchTitle="searchTitle" />
    <TvResult headingTitle="hello world" :filteredList="filteredList" />
  </div>
</template>

<style scoped lang="scss">
.main-container {
  width: 100%;
}
</style>
