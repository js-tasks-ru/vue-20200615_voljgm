<template>
    <button type="button" @click="increment">{{ count }}</button>
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

  methods: {
    increment() {
      this.count += 1;
      this.$emit('increment', this.count);
    },
  },
}   
</script>