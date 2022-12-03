import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { mockData } from "../mockdata/mockdata.js";
import TvResult from "../components/TvResult.vue";

describe("TvResult", async () => {
  it("Test TvResult heading", () => {
    let wrapper = mount(TvResult, {
      props: {
        headingTitle: "Test",
      },
      global: {
        stubs: ["router-link", "router-view", "vue3-star-ratings"], // Stubs for router-link and router-view in case they're rendered in your template
      },
    });
    expect(wrapper.text()).toContain("Test");
  });

  it("Test if filteredList array props exists", () => {
    let wrapper = mount(TvResult, {
      props: {
        filteredList: mockData,
      },
      global: {
        stubs: ["router-link", "router-view", "vue3-star-ratings"],
      },
    });

    expect(wrapper.find("li").exists()).toBeTruthy();
  });
});
