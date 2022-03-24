<template>
  <div class="container">
    <h6>Recent Jobs</h6>
    <div class="mt-3">
      <JobCard />
    </div>
  </div>
</template>
<script>
import JobCard from "./JobCard.vue";
export default {
  components: { JobCard },
  name: "JobsList",
};
</script>