<template>
  <div class="home">
    <JobsList class="mt-5 pt-5" />
  </div>
</template>

<script>
import JobsList from "../components/jobs/JobsList.vue";

export default {
  name: "Home",
  components: {
    JobsList,
  },
};
</script>
