<template>
  <div class="container">
    <h6>Recent Jobs</h6>
    <div class="mt-3">
      <div v-if="!loading" class="">
        <JobCard :job="job" v-for="job in jobs" :key="job.id" />
      </div>
      <div v-else>
        <JobSkeleton v-for="i in loadingDivs" :key="i" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import JobCard from "./JobCard.vue";
import JobSkeleton from "./JobSkeleton.vue";
export default {
  components: { JobCard, JobSkeleton },
  name: "JobsList",
  data() {
    return {
      loadingDivs: 10,
      loading: false,
      jobs: [
        {
          id: 1,
          title: "Business Analyst",
          slug: "business-analyst",
          location: "Nairobi Kenya",
          company: "Telkom Kenya",
          job_type: "FUll time",
          salary: "Ksh Confidential",
          link: "https://www.fuzu.com/kenya/jobs/business-analyst-telkom-kenya-45c20c60",
          post_date: "Apr 1, 2022",
          summary: "summary",
          full_text: "Job Requirements....",
          created_at: "",
        },
      ],
    };
  },
  methods: {
    async fetchJobs() {
      const jobsEndpoint = "https://it-jobs-ke.herokuapp.com/api/jobs";
      this.loading = true;
      try {
        const response = await axios.get(jobsEndpoint);
        this.jobs = response.data;
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
  },
  created() {
    this.fetchJobs();
  },
};
</script>