<template>
  <div class="black">
    {{ blackDots }}<span class="white">{{ whiteDots }}</span>
  </div>
</template>

<script>
export default {
  name: 'DotsComponent',
  props: {
    number: {
      type: Number,
      default: 5, // Valeur par défaut pour 'number'
    },
    note: {
      type: Number,
      required: true, // 'note' est requis
    },
  },
  computed: {
    blackDots() {
      return '●'.repeat(Math.min(this.note, this.number));
    },
    whiteDots() {
      return '●'.repeat(Math.max(this.number - this.note, 0));
    },
  },
};
</script>

<style scoped>
.black{
  color: White
}
.white {
  color: black;
}
</style>