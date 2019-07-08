<template>
  <div v-show="tabs.current == 0" class="padding">
    <div class="row field-row">
      <div v-for="(d, q) in (sqlFieldInputs.length)" :key="`col-${q}`" class="col-md-4">
        <div class="form-group">
          <input
            v-model.lazy="getSQLFields[sqlFieldInputs[q].field_name]"
            :type="`${sqlFieldInputs[q].number ? 'number': 'text'}`"
            autocomplete="off"
            @input="editSQLField({field_name:sqlFieldInputs[q].field_name, data:$event.target.value})"
            class="form-control"
            :id="`input_${sqlFieldInputs[q].field_name}`"
          >
          <label class="form-control-placeholder" for="name">
            <font-awesome-icon :icon="`${sqlFieldInputs[q].icon}`"/>
            {{sqlFieldInputs[q].placeholder}}
          </label>
          <font-awesome-icon
            v-show="getSQLFields[sqlFieldInputs[q].field_name].trim() != ''"
            icon="times"
            @click="clearSQLField(sqlFieldInputs[q].field_name)"
          />
        </div>
      </div>
      <datalist id="client">
        <option v-for="(t,i) in getClientList" :key="`client-${i}`" :value="`${t}`"/>
      </datalist>
      <div class="col-md-12">
        <textarea class="text-input" :value="`${getSQLFormatted}`" rows="5" readonly/>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Awesomplete from "awesomplete";

import {
  faTimes,
  faPrint,
  faBriefcase,
  faUserTie,
  faCompactDisc,
  faHandPaper,
  faStream
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faTimes,
  faPrint,
  faBriefcase,
  faUserTie,
  faCompactDisc,
  faHandPaper,
  faStream
);

export default {
  name: "SQLInput",
  data: function() {
    return {};
  },
  mounted: function() {
    this.$nextTick(() => {
      new Awesomplete("#input_client_name", { list: "#client" });
    });
  },
  components: {
    FontAwesomeIcon
  },
  computed: {
    ...mapGetters([
      "tabs",
      "getSQLFields",
      "sqlFieldInputs",
      "getClientList",
      "getClientListContaining"
    ]),
    getSQLFormatted() {
      var formatted = this.$store.getters.getSQL;
      var get = this.$store.getters.getSQLFields;

      var arr = Object.keys(get).map(key => {
        return {
          key,
          val: get[key]
        };
      });

      arr.forEach(function(data, i) {
        var pattern = "#" + data.key;
        var text = "";
        //TODO: change these indexes with data.vals
        switch (i) {
          case 0: {
            text = data.val === "" ? "" : data.val + ".";
            break;
          }

          case 1: {
            text = data.val === "" ? "" : " AND t.JobID = " + data.val;
            break;
          }

          case 2: {
            text = data.val === "" ? "" : " AND t.Print_Id = " + data.val;
            break;
          }

          case 3: {
            text = data.val === "" ? "" : " AND t.id = " + data.val;
            break;
          }
          case 4: {
            text = data.val === "" ? "" : " LIMIT " + data.val;
            break;
          }
          case 5: {
            text = data.val === "" ? "" : " AND t.label = '" + data.val + "'";
            break;
          }

          default:
            break;
        }

        formatted = formatted.replace(RegExp(pattern, "g"), text);
      });

      return formatted;
    }
  },
  methods: mapActions(["editSQLField", "clearSQLField", "checkNum"])
};
</script>
<style scoped>
textarea.text-input {
  color: white;
  width: 100%;
  margin: 12px 0px 20px 0px;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

textarea.text-input::-webkit-scrollbar {
  /* WebKit */
  width: 0px;
  height: 0px;
}

.field-row {
  margin-top: 30px;
}
</style>