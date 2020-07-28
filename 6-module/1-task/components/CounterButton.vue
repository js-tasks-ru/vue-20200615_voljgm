<template>
  <button type="button" @click="increment">{{ counter }}</button>
</template>

<script>
export default {
  name: "CounterButton",
    
  props: {
    count: {
      type: Number,
      default: 0
    },
  },

  data: function () {
    return {
      counter: this.count
    }
  },

  model: {
    prop: 'count',
    event: 'increment'
  },

  watch: {
    count: {
      handler: function(newValue) {
        if (newValue !== this.counter) {
          this.counter = newValue;
        }
      }
    }
  },

  methods: {
    increment() {
      this.counter += 1;
      this.$emit('update:count', this.counter);
      this.$emit('increment', this.counter);
    },
  },
}   
</script>


<style></style>
