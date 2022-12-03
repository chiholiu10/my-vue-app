<script setup>
defineProps({
  filteredList: {
    type: Array,
    default: [],
  },
  headingTitle: {
    type: String,
  },
});
</script>

<template>
  <div class="scrolling-wrapper">
    <h2>{{ headingTitle }}</h2>
    <ul>
      <li v-for="tv in filteredList" :key="tv.id">
        <router-link :to="`/show/${tv.id}`" className="tv-list-anchor">
          <img :src="tv.image?.medium" />

          <div>
            <h2>{{ tv.name }}</h2>
          </div>
          <vue3-star-ratings
            :numberOfStars="Math.floor(tv.rating.average / 2)"
            inactiveColor="#ff9800"
            :showControl="false"
            :disableClick="true"
            starSize="20"
          />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.scrolling-wrapper {
  box-sizing: border-box;
  padding: 20px;
  width: 100vw;
}
ul {
  list-style-type: none;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  li {
    display: inline-block;
    flex-direction: column;
    min-width: 200px;
    margin: 0 20px;
    position: relative;
    img {
      max-width: 180px;
      width: 100%;
    }
  }
}
li {
  h2 {
    font-size: 18px;
    word-break: break-word;
  }
  .tv-list-anchor {
    background-color: black;
    color: white;
    /* width: 200px; */
    display: block;
    /* padding: 20px; */
    &:hover {
      color: white;
    }
  }
}
</style>
