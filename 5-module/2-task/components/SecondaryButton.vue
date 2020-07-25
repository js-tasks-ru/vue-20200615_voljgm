<script>
import BaseButton from './BaseButton.vue';
export default {
  name: 'SecondaryButton',
  extends: BaseButton,
  components:  { BaseButton },
  render: function (createElement) {
    return createElement(
      'base-button',   // имя тега
      {
        class: 'button_secondary',
        props: this.$props,
        on: this.$listeners,
      },
      this.$slots.default
    )
  }
};
</script>

<style scoped>
.button_secondary {
  background-color: var(--white);
  border-color: var(--blue);
  color: var(--blue);
}

.button_secondary:hover {
  border-color: var(--blue-light);
}
</style>
