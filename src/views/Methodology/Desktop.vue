<template>
  <div class="app-methodology desktop">
    <template v-for="index in steps.length">
      <template v-if="index - 1 === 0">
        <div 
          :key="index" 
          v-scroll-reveal="{ delay: 250 }" 
          class="step-container" 
          :style="style.stepsContainers[index - 1]"
        >
          <div 
            ref="steps" 
            :style="style.steps[index - 1]" 
            class="step"
          >
            {{ steps[index - 1].name }}
          </div>

          <div class="step-content">
            <div class="description">
              {{ steps[index - 1].description }}
            </div>

            <ul class="concepts">
              <li 
                v-for="(concept, index) in steps[index - 1].concepts" 
                :key="`concept-${index}`"
              >
                {{ concept }}
              </li>
            </ul>
          </div>
        </div>
      </template>

      <div 
        v-else 
        :key="index" 
        v-scroll-reveal="{delay: 250}"
      >
        <div 
          ref="lines" 
          :style="style.connections[index - 2]" 
          class="line"
        />
        <div 
          :key="index" 
          class="step-container" 
          :class="{ last: index === steps.length }" 
          :style="style.stepsContainers[index - 1]"
        >
          <div 
            ref="steps" 
            :style="style.steps[index - 1]" 
            class="step"
          >
            {{ steps[index - 1].name }}
          </div>

          <div class="step-content">
            <div class="description">
              {{ steps[index - 1].description }}
            </div>

            <ul class="concepts">
              <li 
                v-for="(concept, index) in steps[index - 1].concepts" 
                :key="`concept-${index}`"
              >
                {{ concept }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          name: 'Inmersión',
          description:
            'Cras viverra, sem a tristique aliquam, arcu ex venenatis felis, ut facilisis turpis risus sed purus. Mauris vitae ultricies sapien. Pellentesque at nibh sed nisl aliquet imperdiet. Sed blandit arcu eros, quis luctus lorem ullamcorper quis. In a dolor condimentum dui dapibus tincidunt in quis nisl.',
          concepts: ['Levantamiento', 'Investigación', 'Estudio',],
        },
        {
          name: 'Aterrizaje e Intercambio',
          description:
            'Quisque egestas imperdiet accumsan. In odio lacus, finibus vitae risus eget, vulputate dignissim velit. Sed sollicitudin efficitur dui.',
          concepts: ['Conceptualización', 'Narrativa',],
        },
        {
          name: 'Lab-creativo',
          description:
            'Quisque accumsan sit amet odio nec sodales. Sed molestie in augue et facilisis. Curabitur luctus orci in dui facilisis, in tincidunt dui viverra.',
          concepts: [
            'Brainstorming',
            'Propuestas',
            'Visualizaciones',
            'Prototipos',
            'Testeo / Intercambio',
            'Rediseño',
          ],
        },
        {
          name: 'Materialización',
          description:
            'Nam sit amet pulvinar ligula. Fusce mollis tincidunt dictum. Duis eget dictum ligula.',
          concepts: [
            'Implementación',
            'Gestión general',
            'Vínculo con proveedores',
          ],
        },
        {
          name: 'Finalización',
          description:
            'Mauris varius, lectus eu euismod mattis, odio libero iaculis dolor, et lacinia augue lorem in lectus. Donec porttitor erat eget lobortis maximus. Cras viverra, sem a tristique aliquam.',
          concepts: ['Entrega proyecto',],
        },
        {
          name: 'Seguimiento',
          description:
            'Aliquam accumsan ipsum semper, convallis lectus nec, pellentesque erat. Donec rhoncus dui urna.',
          concepts: ['Evaluación', 'Contacto', 'Comunicación',],
        },
      ],
      style: {
        stepsContainers: [
          {
            justifyContent: 'flex-start',
            marginLeft: '15%',
          },
          {
            justifyContent: 'flex-end',
            marginRight: '15%',
          },
          {
            justifyContent: 'flex-start',
            marginLeft: '20%',
          },
          {
            justifyContent: 'flex-end',
            marginRight: '20%',
          },
          {
            justifyContent: 'flex-start',
            marginLeft: '15%',
          },
          {
            justifyContent: 'flex-end',
            marginRight: '15%',
          },
        ],
        steps: [
          {
            width: '250px',
            height: '250px',
          },
          {
            width: '250px',
            height: '250px',
          },
          {
            width: '350px',
            height: '350px',
          },
          {
            width: '300px',
            height: '300px',
          },
          {
            width: '250px',
            height: '250px',
          },
          {
            width: '250px',
            height: '250px',
          },
        ],
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
        this.connect(this.$refs.steps[index], this.$refs.steps[index + 1])
      );
    },
  },
};
</script>

<style lang="sass">
.app-methodology.desktop
  padding-top: 128px
  min-height: 100vh
  background-color: $c-primary

  h1
    width: 100%
    padding-left: 48px
    margin-bottom: 48px

  .step
    position: relative
    z-index: 1
    color: $c-primary
    background-color: $c-white
    font-size: 22pt
    font-weight: 700
    border-radius: 50%
    text-align: center

    +size(250px)
    +d-flex(center, center)
  
  .line
    position: absolute
    height: 8px
    background-color: $c-white
    transform-origin: 0% center

.app-methodology.desktop
  .step-container
    margin-bottom: 100px // Temporal...

    +d-flex(center)

  .step-container.last
    margin-bottom: 0

  .step-content
    $margin: 32px
    color: $c-white
    margin-left: $margin

    .description
      width: 300px
      margin-bottom: 16px
      font-size: $f-size-sm

    .concepts
      font-family: $f-family-secondary
      margin-left: 64px
</style>
