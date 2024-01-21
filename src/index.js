import "./styles.css";
import { trackPageview, trackEvent } from "./analytics-api.js";
import { v4 as uuidv4 } from "uuid";

document.addEventListener("DOMContentLoaded", function () {
  // Validate correct setup of experiment
  const validateControlVariations = () => {
    const controlVariation = document.querySelectorAll("#control");
    if (!controlVariation) {
      console.warn("Incorrect setup: Control variation not found");
    } else if (controlVariation.length > 1) {
      console.warn(
        "Incorrect setup: Only one control variation per experiment allowed",
      );
    }
  };

  // Create unique Id for user
  if (!localStorage.getItem("userId")) {
    const uniqueId = uuidv4();
    localStorage.setItem("userId", uniqueId);
  }

  // Create NodeList of variation divs
  const variationDivs = document.querySelectorAll(".variation");

  // Retrieve Id of displayed variation from localStorage object
  const variationDisplayedId = localStorage.getItem("variationDisplayedId");

  // Set userId and call trackPageview API + send relevant data
  const callTrackPageview = () => {
    trackPageview({
      userId: localStorage.getItem("userId"),
    });

    return Promise.resolve();
  };

  // If localStorage object contains Id for random variation, display that variation; otherwise display random variation from variation NodeList
  const displayRandomVariation = (id) => {
    if (id) {
      variationDivs.forEach((div) => {
        // Display variation based on variation Id stored in localStorage
        if (div.getAttribute("data-variation-id") === id) {
          div.style.display = "block";
        }
      });
    } else {
      // Randomize variation to display
      const randomVariation =
        variationDivs[Math.floor(Math.random() * variationDivs.length)];

      // Display random variation
      randomVariation.style.display = "block";

      // Store Id in localStorage
      localStorage.setItem(
        "variationDisplayedId",
        randomVariation.getAttribute("data-variation-id"),
      );
    }
  };

  // Bind event listener to sign up link and call trackEvent API in case of click event being triggered
  const callTrackEvent = () => {
    const signUp = document.getElementById("signUp");

    signUp.addEventListener("click", () => {
      trackEvent({
        userId: localStorage.getItem("userId"),
        variationId: variationDisplayedId,
      });
    });
  };

  validateControlVariations();

  callTrackPageview()
    .then(() => displayRandomVariation(variationDisplayedId))
    .then(() => callTrackEvent());
});
