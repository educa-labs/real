<template>
  <div 
    :style="{ 'grid-template-rows': `repeat(${4}, 1fr)`, 'grid-template-columns': `repeat(${4}, 1fr)` }" 
    class="app-sub-gallery"
  >
    <template v-for="i in rows.length - 1">
      <template v-for="j in columns[i - 1].length - 1">
        <div 
          :key="`${i}, ${j}`" 
          v-scroll-reveal="{
            easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
          }" 
          :style="{
            'grid-row': `${columns[i - 1][j - 1]}/${columns[i - 1][j]}`,
            'grid-column': `${rows[i - 1]}/${rows[i]}`,
            'background-image': `url(${images[random(0, images.length - 1)]})`,
          }"
        />
      </template>
    </template>
  </div>
</template>

<script>
const splits = [
  [1, 2, 3, 5,],
  [1, 2, 4, 5,],
  [1, 2, 4, 5,],
  [1, 3, 4, 5,],
  [1, 3, 5,],
];

const random = (i, j) => Math.floor(Math.random() * (j - i + 1)) + i;

const pickRandomSplit = () => {
  const i = random(0, splits.length - 1);

  return splits[i];
};

export default {
  data() {
    const rows = pickRandomSplit();

    return {
      rows,
      columns: [...Array(rows.length - 1).keys(),].map(() => pickRandomSplit()),
      images: [
        require('@images/home/portfolio_1.png'),
        require('@images/home/portfolio_2.png'),
        require('@images/home/portfolio_3.png'),
        require('@images/home/portfolio_4.png'),
        require('@images/home/portfolio_5.png'),
        require('@images/home/portfolio_6.png'),
        require('@images/home/portfolio_7.png'),
        require('@images/home/portfolio_8.png'),
        require('@images/home/portfolio_9.png'),
      ],
    };
  },
  methods: {
    random,
  },
};
</script>

<style lang="sass">
.app-sub-gallery
  display: grid
  grid-template-rows: repeat(3, 1fr)
  grid-template-columns: repeat(3, 1fr)
  grid-gap: 16px
  height: 100vh

  div
    visibility: hidden

    +background-image
  
.fade-in-enter
  opacity: 0
</style>
