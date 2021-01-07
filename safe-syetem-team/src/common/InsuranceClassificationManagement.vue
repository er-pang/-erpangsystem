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
import list from "../components/platformAdministrator/insuranceClassificationManagement/ListInsuranceClassificationManagement";
import add from "../components/platformAdministrator/insuranceClassificationManagement/AddInsuranceClassificationManagement";
import search from "../components/platformAdministrator/insuranceClassificationManagement/SearchInsuranceClassificationManagement";
import paging from "../components/platformAdministrator/insuranceClassificationManagement/PagingInsuranceClassificationManagement";
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