<script>
import BaseButton from './BaseButton.vue';
export default {
  name: 'PrimaryButton',
  extends: BaseButton,
  components:  { BaseButton },
  render: function (createElement) {
    return createElement(
      'base-button',   // имя тега
      {
        class: 'button_primary',
        props: this.$props,
        on: this.$listeners,
      },
      this.$slots.default
    )
  }
};
</script>

<style scoped>
.button_primary {
  background-color: var(--blue);
  border-color: var(--blue);
  color: var(--white);
}

.button_primary:hover {
  background-color: var(--blue-light);
  border-color: var(--blue-light);
}
</style>
