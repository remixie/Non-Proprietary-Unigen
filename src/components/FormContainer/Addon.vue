<template>
  <div v-if="tabs.current == 1">Addon Placeholder</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["tabs"])
};
</script>
<style scoped>
</style>
