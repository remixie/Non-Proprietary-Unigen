<template>
  <div>
    <b-tabs active-nav-item-class="current-tab" :value="tabs.current" justified>
      <b-tab
        v-for="(data,index) in tabs.titles"
        :key="`dyn-tab-${data}`"
        :title="`${data}`"
        @click="changeTab(index)"
      ></b-tab>
    </b-tabs>
    <FormContainer/>
  </div>
</template>
<script>
import FormContainer from "./FormContainer";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Tabs",
  components: {
    FormContainer
  },
  computed: mapGetters(["tabs"]),
  methods: mapActions(["changeTab"]),
  data: function() {
    return {};
  }
};
</script>

<style>
.nav-link {
  cursor: pointer;
  background-color: #007dc3;
  border-radius: 10px 10px 0px 0px !important;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  border: 0px solid white !important;
}

.nav-link.active {
  color: #c85a2d !important;
}

.nav-link:hover {
  color: white;
  border: 0px solid white !important;
}

.tab-content.mt-3 {
  background-color: white !important;
  margin-top: 0px !important;
  padding-top: 40px;
}
</style>