<template>
  <div class="app-methodology desktop">
    <div 
      v-for="(step, index) in steps" 
      :key="`step-${index}`"
    >
      <template v-if="index === 0">
        <div 
          ref="steps" 
          v-scroll-reveal 
          class="step"
        >
          {{ step }}
        </div>
      </template>
      <div 
        v-else 
        v-scroll-reveal
      >
        <div 
          ref="lines" 
          :style="connections[index - 1]" 
          class="line"
        />
        <div 
          ref="steps" 
          :class="{ last: index === steps.length - 1 }" 
          class="step"
        >
          {{ step }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        'Inmersión',
        'Aterrizaje e Intercambio',
        'Lab-creativo',
        'Materialización',
        'Seguimiento',
      ],
      connections: [],
    };
  },
  mounted() {
    for (let i = 0; i < this.$refs.steps.length - 1; i++) {
      this.connections.push(
        this.connect(this.$refs.steps[i], this.$refs.steps[i + 1])
      );
    }
  },
  methods: {
    connect(stepA, stepB) {
      const pA = stepA.getBoundingClientRect();
      const pB = stepB.getBoundingClientRect();

      const w = Math.abs(pB.x - pA.x);
      const h = Math.abs(pB.y - pA.y);

      const width = Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2));
      const rad = w === 0 ? Math.PI / 2 : Math.atan(h / w);

      return {
        top: `${pA.y + pA.height / 2}px`,
        left: `${pA.x + pA.width / 2}px`,
        width: `${width}px`,
        transform: `rotate(${rad}rad)`,
      };
    },
  },
};
</script>

<style lang="sass">
.app-methodology.desktop
  padding-top: 128px
  flex-direction: column
  min-height: 100vh

  +d-flex(center, center)

  h1
    width: 100%
    padding-left: 48px
    margin-bottom: 48px

  .step
    position: relative
    z-index: 1
    color: $c-white
    background-color: $c-primary
    margin-bottom: 100px // Temporal...
    font-size: 22pt
    font-weight: 700
    border-radius: 50%
    text-align: center

    +size(250px)
    +d-flex(center, center)
  
  .step.last
    margin-bottom: 0

  .line
    position: absolute
    height: 8px
    background-color: $c-primary
    transform-origin: 0% center
</style>
