import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

/* save original URL */
const originalLocation = window.location;

/* Clear the window.location */
beforeAll(() => {
  delete window.location;
  window.location = { ...originalLocation, search: "" };
});

/* Restore the URL after tests */
afterAll(() => {
  window.location = originalLocation;
});

/* Define a test suite */
describe("Screen Component", () => {
  /* Tests for displaying UpdateRequiredScreen */
  test("displays UpdateRequiredScreen for outdated Windows version 1.4.9", () => {
    window.location.search = "?appversion=1.4.9&os=win";
    render(<App />);
    expect(screen.getByText("Update required")).toBeInTheDocument();
  });

  test("displays UpdateRequiredScreen for outdated Mac version 0.27.9", () => {
    window.location.search = "?appversion=0.27.9&os=mac";
    render(<App />);
    expect(screen.getByText("Update required")).toBeInTheDocument();
  });

  test("displays UpdateRequiredScreen for specific outdated Mac version 1.5.100", () => {
    window.location.search = "?appversion=1.5.100&os=mac";
    render(<App />);
    expect(screen.getByText("Update required")).toBeInTheDocument();
  });

  /* Tests for displaying WelcomeScreen */
  test("displays WelcomeScreen for up-to-date Windows version 1.5.0", () => {
    window.location.search = "?appversion=1.5.0&os=win";
    render(<App />);
    expect(screen.getByText("Getting started")).toBeInTheDocument();
  });

  test("displays WelcomeScreen for up-to-date Mac version 0.28.0", () => {
    window.location.search = "?appversion=0.28.0&os=mac";
    render(<App />);
    expect(screen.getByText("Getting started")).toBeInTheDocument();
  });

  test("displays WelcomeScreen for a version not in the specific outdated Mac version 1.5.124", () => {
    window.location.search = "?appversion=1.5.124&os=mac";
    render(<App />);
    expect(screen.getByText("Getting started")).toBeInTheDocument();
  });
});
