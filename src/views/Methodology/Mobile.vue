<template>
  <div class="app-methodology mobile">
    <div v-for="(step, index) in steps" :key="`step-${index}`">
      <template v-if="index === 0">
        <div class="step" v-scroll-reveal ref="steps">
          {{ step }}
        </div>
      </template>
      <div v-else v-scroll-reveal>
        <div :style="lines[index - 1]" class="line" ref="lines"/>
        <div class="step" ref="steps">
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
      lines: [],
    }
  },
  methods: {
    line(stepA, stepB) {
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
      }
    }
  },
  mounted() {
    for (let i = 0; i < this.$refs.steps.length - 1; i++) {
      this.lines.push(this.line(this.$refs.steps[i], this.$refs.steps[i + 1]));
    }
  } 
}
</script>

<style lang="sass">
.app-methodology.mobile
  padding-top: 128px
  flex-direction: column
  min-height: 100vh

  +d-flex(center, center)

  .step
    position: relative
    z-index: 1
    color: $c-white
    background-color: $c-primary
    margin-bottom: 500px // Temporal...
    font-size: 22pt
    font-weight: 700
    border-radius: 50%
    text-align: center

    +size(250px)
    +d-flex(center, center)

  .line
    position: absolute
    height: 8px
    background-color: $c-primary
    transform-origin: 0% center
</style>
