<template>
  <div class="typesList">
    <div>
      <add />
      <search />
      <list />
    </div>
    <paging />
  </div>
</template>

<script>
import list from "../components/platformAdministrator/insuranceProductManagement/ListInsuranceProductManagement.vue";
import add from "../components/platformAdministrator/insuranceProductManagement/AddInsuranceProductManagement";
import search from "../components/platformAdministrator/insuranceProductManagement/SearchInsuranceProductManagement";
import paging from "../components/platformAdministrator/insuranceProductManagement/PagingInsuranceProductManagement";
export default {
  components: {
    add,
    search,
    list,
    paging,
  },
};
</script>

<style>
.typesList {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>