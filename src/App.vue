<template>
  <div id="app" class="container">
    <Header/>
    <TealContainer/>
  </div>
</template>

<script>
import Header from "./components/Header";
import TealContainer from "./components/TealContainer";

export default {
  name: "app",
  components: {
    Header,
    TealContainer
  }
};
</script>

<style>
html {
  overflow-y: scroll;
}

body {
  text-align: center;
  background-color: #007dc3;
}
</style>
