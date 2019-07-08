<template>
  <div class="row">
    <div class="col-md-12" id="wrapper-border">
      <Tabs/>
    </div>
  </div>
</template>
<script>
import Tabs from "./Tabs";

export default {
  name: "TealContainer",
  data: function() {
    return {};
  },
  components: {
    Tabs
  }
};
</script>

<style scoped>
#legal {
  color: white;
  font-weight: 600;
  display: block;
  margin-top: 11px;
}

#wrapper-border {
  margin-top: 40px;
  background-color: #91c4e7;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 10px;
  position: relative;
  padding: 15px 15px 15px 15px;
}

@media only screen and (max-width: 486px) {
  #wrapper-border {
    margin-top: 20px;
  }
}
</style>