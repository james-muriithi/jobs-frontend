<template>
  <div class="loading-skeleton">
    <div class="row bg-white rounded px-3 py-4 g-0 card-shadow mb-3">
      <div
        class="
          col-sm-2 col-lg-1
          d-flex
          justify-content-center justify-content-sm-start
          pt-2
          pb-4
          pt-sm-0
          py-sm-0
        "
      >
        <p class="h-60 w-60"></p>
      </div>
      <div class="col-sm-10 col-lg-11">
        <div class="row mb-3 mb-sm-0">
          <div class="col-9">
            <h5 class="h-20 w-100"></h5>
          </div>
          <div class="col-3 ms-auto text-end">
            <p class="small fw-bold w-60 h-20 ms-auto"> </p>
          </div>
        </div>
        <div class="row mt-2 col-lg-8 col-xl-6">
          <div class="col small">
            <h6 class="mb-1">Location</h6>
            <p class="">Nairobi</p>
          </div>
          <div class="col small">
            <h6 class="mb-1">Company</h6>
            <p class="">Microsoft</p>
          </div>
          <div class="col small">
            <h6 class="mb-1">Job Type</h6>
            <p class="">Fulltime</p>
          </div>
          <div class="col-sm small">
            <h6 class="mb-1">Posted on</h6>
            <p class="">22 may 2022</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <p class="summary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus debitis ad ipsa, tempora odio, quas id quidem nam
              similique quae, eveniet illo placeat! Ipsum nihil quis porro error
              obcaecati voluptatem.
            </p>
          </div>
          <div class="col-md-4 text-end">
            <button class="btn btn-primary px-3">
              View Listing
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobSkeleton",
};
</script>

<style lang="scss">
.summary {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-shadow {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
</style>