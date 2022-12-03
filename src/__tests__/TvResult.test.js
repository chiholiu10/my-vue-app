import { render, screen } from "@testing-library/vue";
import { mount } from "@vue/test-utils";
import { it, expect } from "vitest";
import TvResult from "../components/TvResult.vue";
import { mockData } from "../mockdata/mockdata.js";

test("TvResult", async () => {
  let wrapper = render(TvResult, {
    props: {
      filteredList: mockData,
    },
    global: {
      stubs: ["router-link", "router-view"], // Stubs for router-link and router-view in case they're rendered in your template
    },
  });

  const test = screen.getByTestId("tv-list-test");
  console.log("chiho" + wrapper);
  expect(test).toBe(false);
});
