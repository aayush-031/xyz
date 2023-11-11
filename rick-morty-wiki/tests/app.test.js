import { test } from "@playwright/test";
import searchEpisode from "./episodePage/seachEpisode.js";
import searchBox from "./homePage/searchBox.js";
import searchLocation from "./LocationPage/searchLocation.js";

test("Happy Flow", async ({ page }) => {
  await searchBox(page);
});

test("Happy Flow2", async ({ page }) => {
  await searchLocation(page);
})

test("Happy Flow3", async ({ page }) => {
  await searchEpisode(page);

})
