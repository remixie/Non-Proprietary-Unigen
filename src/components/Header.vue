<template>
  <div>
    <div class="row">
      <div class="offset-1 col-md-10 col-sm-12 col-12 logo-div">
        <h2>UniGen</h2>
        <span id="motto">Non-proprietary</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data: function() {
    return {};
  }
};
</script>

<style scoped>
h2 {
  display: inline-block;
  color: white;
}

.logo-div {
  margin-top: 25px;
  text-align: left;
}

#motto {
  color: white;
  border-left: 3px dotted #ffffff80;
  padding: 4px 20px;
  margin-left: 25px;
  font-weight: 600;
  font-size: 15px;
}

@media only screen and (max-width: 486px) {
  #motto {
    display: none;
  }
}
</style>

