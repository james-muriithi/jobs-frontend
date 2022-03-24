import TheNavBar from "@/components/UI/TheNavBar.vue";
import { shallowMount } from "@vue/test-utils";

describe("TheNavBar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TheNavBar);
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
