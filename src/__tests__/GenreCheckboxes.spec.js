import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
// import { mockData } from "../mockdata/mockdata.js";
import GenreCheckboxes from "../components/GenreCheckboxes.vue";

describe("TvResult", async () => {
  it("Test GenreCheckboxes heading", () => {
    let wrapper = mount(GenreCheckboxes, {
      props: {
        headingTitle: "Genres",
      },
    });
    expect(wrapper.text()).toContain("Genres");
  });

  it("Test GenreCheckboxes props", () => {
    let wrapper = mount(GenreCheckboxes, {
      props: {
        headingTitle: "Genres",
      },
    });
    expect(wrapper.text()).toContain("Genres");
  });
});
