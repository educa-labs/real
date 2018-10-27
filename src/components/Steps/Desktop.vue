<template>
  <div class="app-steps desktop">
    <template v-for="index in steps.length">
      <template v-if="index - 1 === 0">
        <app-step 
          ref="steps" 
          :key="`step-${index}`" 
          :inner-text="`0${index}`" 
          :outer-text="steps[index - 1].name"
        />
      </template>

      <template v-else>
        <div 
          ref="lines" 
          :key="`line-${index}`" 
          :style="style.connections[index - 2]" 
          class="line"
        />

        <app-step 
          ref="steps" 
          :key="`step-${index}`" 
          :inner-text="`0${index}`" 
          :outer-text="steps[index - 1].name"
        />
      </template>
    </template>
  </div>
</template>

<script>
import Step from './Step';

export default {
  components: {
    'app-step': Step,
  },
  data() {
    return {
      steps: [
        {
          name: 'Inmersión',
          isActive: false,
        },
        {
          name: 'Aterrizaje e Intercambio',
          isActive: false,
        },
        {
          name: 'Lab-creativo',
          isActive: false,
        },
        {
          name: 'Materialización',
          isActive: false,
        },
        {
          name: 'Finalización',
          isActive: false,
        },
        {
          name: 'Seguimiento',
          isActive: false,
        },
      ],
      style: {
        stepsContainers: [{}, {}, {}, {}, {}, {},],
        steps: [{}, {}, {}, {}, {}, {},],
        connections: [],
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.updateConnections();

      window.addEventListener('resize', this.updateConnections);
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateConnections);
  },
  methods: {
    connect(stepA, stepB) {
      const pA = stepA.getBoundingClientRect();
      const pB = stepB.getBoundingClientRect();

      pA.x += window.scrollX;
      pA.y += window.scrollY;

      pB.x += window.scrollX;
      pB.y += window.scrollY;

      const w = pB.x - pA.x;
      const h = pB.y - pA.y;

      const width = Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2));
      const rad = Math.atan2(pB.y - pA.y, pB.x - pA.x);

      return {
        top: `${pA.y + pA.height / 2}px`,
        left: `${pA.x + pA.width / 2}px`,
        width: `${width}px`,
        transform: `rotate(${rad}rad)`,
      };
    },
    updateConnections() {
      this.style.connections = [
        ...Array(this.$refs.steps.length - 1).keys(),
      ].map(index =>
        this.connect(this.$refs.steps[index].$el, this.$refs.steps[index + 1].$el)
      );
    },
    hover() {},
  },
};
</script>

<style lang="sass">
.app-steps.desktop
  +d-flex(center, space-between)

  .step
    position: relative
    z-index: 1
    font-size: 22pt
    font-weight: 700
    text-align: center
    color: $c-white
    background-color: $c-primary
    border-radius: 50%

    +size(75px)
    +d-flex(center, center)

  .line
    position: absolute
    height: 4px
    background-color: $c-primary
    transform-origin: 0% center
</style>
