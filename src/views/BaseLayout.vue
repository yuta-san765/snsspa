<template>
  <div class="timeline">
    <TheHeader :right="true">TIMELINE</TheHeader>
    <router-view></router-view>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
export default {
  data() {
    return {
    };
  },
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">

</style>
