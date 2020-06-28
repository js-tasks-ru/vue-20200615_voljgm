<template>
  <div class="dropdown show">
    <button type="button" class="button dropdown__toggle" 
        @click="setSelectionState" :class="{ 'dropdown__toggle_icon': hasIcons }">
      <app-icon :icon="buttonIcon" v-if="buttonIcon" />
      {{ buttonTitle }}
    </button>

    <div class="dropdown__menu" :class="{ show: isSelection }">
      <button class="dropdown__item" type="button" v-for="item in options" :key="item.value" 
          @click="setValue(item.value)" :class="{ 'dropdown__item_icon': hasIcons }">
        <app-icon :icon="item.icon" v-if="item.icon"/>
        {{ item.text }}
      </button>
    </div>
  </div>
</template>

<script>
import AppIcon from './AppIcon';

export default {
  name: 'DropdownButton',

  components: { AppIcon },

  props: {
    title: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    value: {}
  },

  data: function () {
    return {
      isSelection: false
    }
  },
  
  model: {
    prop: 'value',
    event: 'change'
  },

  computed: {
    buttonTitle() {
      return this.title + (this.currentItem ? ` - ${this.currentItem.text}` : '');
    },

    buttonIcon() {
      return this.currentItem ? this.currentItem.icon : undefined;
    },

    currentItem() {
      return this.options.find(i => i.value === this.value);
    },

    hasIcons() {
      return this.options.some(i => i.icon);
    } 
  },

  methods: {
    setSelectionState() {
      this.isSelection = !this.isSelection;
    },
    setValue(val) {
      this.$emit('update:value', val);
      this.isSelection = false;
      this.$emit('change', val);
    }
  }

};
</script>

<style scoped>
  @import '/assets/styles/_button.css';
  @import '/assets/styles/_dropdown.css';
</style>
