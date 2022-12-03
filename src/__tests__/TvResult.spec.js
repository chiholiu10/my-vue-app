import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { mockData } from "../mockdata/mockdata.js";
import TvResult from "../components/TvResult.vue";

describe("TvResult", async () => {
  it("Test TvResult Heading", () => {
    let wrapper = mount(TvResult, {
      props: {
        headingTitle: "Test",
      },
      global: {
        stubs: ["router-link", "router-view"], // Stubs for router-link and router-view in case they're rendered in your template
      },
    });

    expect(wrapper.text()).toContain("Test");
  });

  it("Test TvResult Heading", () => {
    let wrapper = mount(TvResult, {
      props: {
        filteredList: mockData,
      },
      global: {
        stubs: ["router-link", "router-view"], // Stubs for router-link and router-view in case they're rendered in your template
      },
    });

    console.log(wrapper.props());

    expect(wrapper.props().filterList).toContain(mockData);
  });
});
