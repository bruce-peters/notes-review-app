import { render, screen } from "@testing-library/react";

// Firebase and Gemini are mocked so the test runs offline without credentials.
jest.mock("../firebase", () => ({
  auth: {
    // Report "signed out" right away
    onAuthStateChanged: (callback) => {
      callback(null);
      return () => {};
    },
  },
  db: {},
  googleProvider: {},
}));
jest.mock("firebase/auth", () => ({ signOut: jest.fn() }));
jest.mock("firebase/firestore", () => ({}));
jest.mock("../api", () => ({ getFactsResponse: jest.fn() }));
jest.mock("../state/useNoteSets", () => () => []);

import App from "../App";

test("shows the sign-in prompt on Home when signed out", async () => {
  render(<App />);
  expect(
    await screen.findByText(/Please Sign in to view your notes/i)
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Sign In" })).toBeInTheDocument();
});
