<script setup>
import vue3StarRatings from "vue3-star-ratings";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const queryMovie = ref({});
const isLoading = ref(false);
const route = useRoute();

onMounted(async () => {
  const result = await fetch(`https://api.tvmaze.com/shows/${route.params.id}`);
  const response = result.json();
  queryMovie.value = await response;
  isLoading.value = true;
  console.log(queryMovie.value);
});
</script>

<template>
  <div class="detail-page-component" data-testid="detail-page-test">
    <h2 class="detail-page-heading">{{ queryMovie?.name }}</h2>
    <div class="two-columns-desktop">
      <div class="detail-page-image-block column-desktop">
        <img :src="queryMovie.image?.medium" />
        <p class="star-rating">
          {{ queryMovie.rating?.average }}
        </p>
      </div>
      <div class="detail-page-info column-desktop">
        <p>{{ queryMovie?.language }}</p>
        <div
          v-for="(item, index) in queryMovie.genres"
          :key="index"
          class="pills"
        >
          <span>{{ item }}</span>
        </div>
        <p>{{ queryMovie.schedule?.time }}</p>
        <p>{{ queryMovie.schedule?.days }}</p>

        <p>{{ queryMovie?.premiered }}</p>
        <p class="detail-page-article" v-html="queryMovie?.summary"></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pills {
  min-width: 100px;
  height: 30px;
  display: flex;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  max-width: 120px;
  display: inline-flex;
  border-radius: 50px;
  background-color: dodgerblue;
  margin: 0 10px;
  font-weight: 600;
}
.detail-page-image-block {
  position: relative;
  display: inline-block;
  width: auto;
  .star-rating {
    position: absolute;
    bottom: -20px;
    right: -10px;
  }
}
.star-rating {
  font-size: 30px;
  font-weight: 700;
  border-radius: 50%;
  background-color: yellow;
  width: 70px;
  color: black;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.detail-page-article {
  padding: 20px;
  line-height: 1.6;
  text-align: left;
  max-width: 600px;
}
.detail-page-heading {
  font-size: 30px;
  font-weight: 600;
  padding: 20px 0;
}
p {
  margin: 20px 0;
}
.two-columns-desktop {
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-flex;
    flex-direction: row;
  }
  .column-desktop {
    padding: 20px;
  }
}
</style>
