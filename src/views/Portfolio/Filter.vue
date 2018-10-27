<template>
  <div class="filter">
    <div 
      v-for="(filter, index) in filters" 
      :key="`filter-${index}`"
    >
      <h5 class="name">{{ filter.name }}</h5>

      <ul>
        <li 
          v-for="(item, index) in filter.items" 
          :key="`item-${index}`" 
          @click="toggleItem(item)"
        >
          <div
            :class="{ selected: item.selected }" 
          >
            {{ item.value }}
          </div> 
        </li>
      </ul>
    </div>

    <div>
      <h5 
        class="all name" 
        @click="clear"
      >
        {{ all }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        projectTypes: {
          name: 'Tipos de proyecto',
          items: [
            { value: 'Identidad', selected: false, },
            { value: 'Editorial', selected: false, },
            { value: 'Impreso', selected: false, },
            { value: 'Web', selected: false, },
            { value: 'Campañas', selected: false, },
          ],
        },
        areas: {
          name: 'Área de trabajo',
          items: [
            { value: 'Infantil', selected: false, },
            { value: 'Emprendimientos', selected: false, },
            { value: 'Educación', selected: false, },
            { value: 'Energía', selected: false, },
            { value: 'Emprendedores', selected: false, },
          ],
        },
      },
      all: 'Todos los trabajos',
    };
  },
  computed: {
    selectedItems() {
      const getSelectedItemsValues = items =>
        items.filter(item => item.selected).map(item => item.value);

      const selectedItems = {};
      for (let [key, { items, },] of Object.entries(this.filters)) {
        const selectedItemsValues = getSelectedItemsValues(items);

        if (selectedItemsValues.length > 0)
          selectedItems[key] = selectedItemsValues;
      }

      return selectedItems;
    },
  },
  methods: {
    emitSelectedItems() {
      this.$emit('change', this.selectedItems);
    },
    toggleItem(item) {
      item.selected = !item.selected;

      this.emitSelectedItems();
    },
    clear() {
      const clearItems = items => {
        for (const item of items) {
          item.selected = false;
        }
      };

      for (let { items, } of Object.values(this.filters)) clearItems(items);

      this.emitSelectedItems();
    },
  },
};
</script>

<style lang="sass">
.filter
  padding-top: 200px

  display: grid
  grid-template-columns: 1fr 1fr 1fr
  width: 600px

.filter > div
  display: flex
  flex-direction: column

  .name
    font-weight: 600

.filter .all
  cursor: pointer

.filter li > div
  cursor: pointer
  display: inline-block

  &.selected
    position: relative

    &::before
      $left: 40px

      content: ''
      position: absolute
      bottom: 50%
      left: -$left
      width: calc(100% + #{$left})
      border-bottom: 2px solid $c-primary
</style>
