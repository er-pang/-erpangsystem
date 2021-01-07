<template>
  <div class="typesList">
    <div>
      <search />
      <navList />
      <both />
    </div>
    <paging />
  </div>
</template>

<script>
import navList from "../components/platformAdministrator/insuranceOrderManagement/NavInsuranceOrderManagement";
import search from "../components/platformAdministrator/insuranceOrderManagement/SearchInsuranceOrderManagement";
import paging from "../components/platformAdministrator/insuranceOrderManagement/pagingInsuranceOrderManagement";
import both from "../components/platformAdministrator/insuranceOrderManagement/Both";
export default {
  components: {
    search,
    navList,
    paging,
    both,
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