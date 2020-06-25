export const CounterButton = {
  // Шаблон потребуется отредактировать
  template: '<button type="button" @click="increment">{{ count }}</button>',

  props: {
    count: {
      type: Number,
      required: true,
      default: 0
    },
  },

  model: {
    prop: 'count',
    event: 'click',
  },    

  methods: {
    increment() {
      this.count += 1;
      this.$emit('increment', this.count);
    },
  },
};
