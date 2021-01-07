<template>
  <div id="ordersearch">
    <input type="text" v-model="text" />
    <el-button type="primary" icon="el-icon-search" @click="seatchBoth(text)"
      >搜索</el-button
    >
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("order");
export default {
  data() {
    return {
      text: "",
    };
  },
  watch: {
    text(val) {
      this.text = val;
    },
  },
  computed: {
    ...mapState(["currentPage", "pageSize", "value"]),
  },
  methods: {
    ...mapActions(["getSafeorders"]),
    ...mapMutations(["changeValue"]),
    seatchBoth(text) {
      this.changeValue(text);
      this.getSafeorders({
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        value: this.value,
      });
    },
  },
};
</script>

<style>
#ordersearch input {
  width: 270px;
  height: 36px;
  border-color: teal;
  outline: none;
  text-indent: 10px;
  border-radius: 5px;
  margin-right: 5px;
}
</style>