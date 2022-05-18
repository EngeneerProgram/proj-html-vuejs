<template>
  <header>
    <LogoComponent />
    <NavComponent/>
   
  </header>
</template>


<script>
import LogoComponent from "./LogoComponent.vue";
import NavComponent from "./NavComponent.vue";

export default {
  name: "HeaderComponent",
  components: { LogoComponent, NavComponent },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;

  .menu {
    height: 100%;
    display: Flex;
    align-items: center;

    li {
      padding: 20px;
      list-style: none;
      a {
        text-decoration: none;
        text-transform: uppercase;
        color: white;
      }
    }
  }
}
</style>