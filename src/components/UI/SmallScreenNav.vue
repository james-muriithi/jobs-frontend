<template>
  <div>
    <div
      :class="`modal right fade ${open ? 'show' : ''}`"
      id="myModal2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel2"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content p-0">
          <div class="modal-body p-0">
            <div class="text-end p-3">
              <button class="btn" @click="closeNav">
                <svg
                  width="24px"
                  height="24px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7.72153 6.29537C7.3277 5.90154 6.68919 5.90154 6.29537 6.29537C5.90154 6.68919 5.90154 7.3277 6.29537 7.72153L10.5738 12L6.29537 16.2785C5.90154 16.6723 5.90154 17.3108 6.29537 17.7046C6.68919 18.0985 7.3277 18.0985 7.72153 17.7046L12 13.4262L16.2785 17.7046C16.6723 18.0985 17.3108 18.0985 17.7046 17.7046C18.0985 17.3108 18.0985 16.6723 17.7046 16.2785L13.4262 12L17.7046 7.72153C18.0985 7.3277 18.0985 6.68919 17.7046 6.29537C17.3108 5.90154 16.6723 5.90154 16.2785 6.29537L12 10.5738L7.72153 6.29537Z"
                    fill="#191F23"
                  ></path>
                </svg>
              </button>
            </div>

            <div class="px-3 pb-2 authentication row">
              <div class="col-6">
                <router-link to="#" class="btn btn-secondary w-100 text-white">
                  Login
                </router-link>
              </div>
              <div class="col-6">
                <router-link to="#" class="btn btn-outline-primary w-100">
                  Signup
                </router-link>
              </div>
            </div>

            <div class="dropdown-divider"></div>

            <div class="menu p-3">
              <div
                class="menu-item py-2"
                v-for="menu in menus"
                :key="menu.name"
              >
                <router-link :to="menu.url" class="nav-link">
                  {{ menu.name }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- modal-content -->
      </div>
      <!-- modal-dialog -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SmallScreenNav",
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["close"],
  data() {
    return {
      menus: [
        {
          name: "Lease",
          url: "/",
        },
        {
          name: "Sell/Purchase",
          url: "/",
        },
        {
          name: "Our Listings",
          url: "/",
        },
        {
          name: "Secure Investment",
          url: "/",
        },
        {
          name: "How it works",
          url: "/",
        },
        {
          name: "About Us",
          url: "/",
        },
      ],
    };
  },
  methods: {
    closeNav() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal.show {
  display: block !important;
  opacity: 1 !important;
  background-color: rgba(0, 0, 0, 0.5);
  .modal-dialog {
    left: 0px !important;
    top: 0;
  }
}
.modal.right .modal-dialog {
  position: fixed;
  margin: auto;
  width: 320px;
  height: 100%;
  box-shadow: 0px 24px 32px rgb(83 100 112 / 24%),
    0px 4px 10px rgb(83 100 112 / 40%);
}

.modal.right .modal-content {
  height: 100%;
  overflow-y: auto;
  border: none;
  border-radius: 0px;
}

.modal.right .modal-body {
  padding: 15px 15px 80px;
  overflow-x: hidden;
  .authentication {
    .btn {
      &:nth-of-type(1):hover {
        color: $white;
      }
    }
  }
  .menu {
    .menu-item {
      .nav-link {
        font-size: 17px;
        color: $nav-link-color;
      }
    }
  }
}
.modal.right.fade .modal-dialog {
  left: -320px;
  -webkit-transition: opacity 0.3s linear, left 0.3s ease-out;
  -moz-transition: opacity 0.3s linear, left 0.3s ease-out;
  -o-transition: opacity 0.3s linear, left 0.3s ease-out;
  transition: opacity 0.3s linear, left 0.3s ease-out;
}

.modal.right.fade.in .modal-dialog {
  left: 0;
}
</style>