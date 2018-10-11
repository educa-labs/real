<template>
  <div class="app-skills">
    <div v-for="(skill, index) in skills" :key="`skill-${index}`">
      <h1>{{ skill.title }}</h1>
      <ul>
        <li v-for="(item, index) in skill.items" :key="`item-${index}`">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          title: 'Estrategia',
          items: [
            'Arquitectura de la Información',
            'Experiencias de Usuarios',
            'Desarrollo Conceptual',
            'Desarrollo / Estrategia de Marca',
            'Marketing Digital',
            'Análisis de Usabilidad',
          ]
        },
        {
          title: 'Identidad',
          items: [
            'Naming',
            'Sistema de identidad de Marca',
            'Aplicaciones de Marca',
            'Dirección de Arte',
            'Dirección Creativa',
          ]
        },
        {
          title: 'Estrategia',
          items: [
            'Editorial Impresos, Publicidad',
            'Web, Servicios, Señalética,',
            'Museografía, Productos,',
            'Packaging, Redes Sociales',
            'Infografías',
          ]
        },
      ]
    }
  }
}
</script>

<style lang="sass">
.app-skills
  display: grid
  grid-template-columns: repeat(3, 1fr)
  justify-items: center
</style>
