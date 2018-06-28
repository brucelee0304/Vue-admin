<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import vHead from './Header.vue';
  import vSidebar from './Sidebar.vue';
  export default {
    components: {
      vHead,
      vSidebar
    }
  }

</script>
<style scoped>
  .wrapper {
    width: 100%;
  }

  .content {
    position: absolute;
    left: 250px;
    bottom: 0;
    top: 70px;
    right: 0;
    overflow-y: scroll;
  }

</style>
