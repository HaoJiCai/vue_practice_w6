<template>
  <frontEndNavBar/>
  <router-view/>
</template>

<script>
import frontEndNavBar from '@/components/Navbar_FrontEnd.vue'
export default {
  components: {
    frontEndNavBar
  }
}
</script>

<style lang="scss">
</style>
