import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const mockNoteSet = {
  noteSetName: "Test Set",
  noteSetFacts: [
    { sectionName: "Greek", sectionContent: ["Alpha beta", "Gamma delta"] },
  ],
};

// Firebase is mocked so the test runs offline without credentials.
jest.mock("../firebase", () => ({ auth: {}, db: {} }));
jest.mock("firebase/firestore", () => ({}));
jest.mock("../state/AuthContext", () => ({
  useAuth: () => ({ currentUser: { uid: "test-user" }, loading: false }),
}));
// Like the real hook, the note set arrives after the first render.
jest.mock("../state/useNoteSet", () => () => {
  const { useEffect, useState } = jest.requireActual("react");
  const [data, setData] = useState(null);
  useEffect(() => setData(mockNoteSet), []);
  return [data, setData];
});

import TypeNotes from "../pages/TypeNotes";

function renderTypeNotes() {
  const utils = render(
    <MemoryRouter initialEntries={["/type/test-set"]}>
      <Routes>
        <Route path="/type/:noteSetId" element={<TypeNotes />} />
      </Routes>
    </MemoryRouter>
  );
  const typingText = () =>
    utils.container.querySelector(".text-6xl").textContent;
  const repetition = () =>
    utils.container.querySelector(".text-blue-400").textContent;
  return { ...utils, typingText, repetition };
}

const press = (key, opts = {}) =>
  act(() => {
    fireEvent.keyDown(window, { key, ...opts });
  });

test("shows the first fact of the note set to type", async () => {
  const { typingText } = renderTypeNotes();
  expect(await screen.findByText("Greek")).toBeInTheDocument();
  expect(typingText()).toContain("Alpha");
  expect(typingText()).toContain("beta");
});

test("Ctrl+Enter skips to the next fact and wraps around after the last one", async () => {
  const { typingText } = renderTypeNotes();
  await screen.findByText("Greek");

  press("Enter", { ctrlKey: true });
  expect(typingText()).toContain("Gamma");

  // Moving past the last fact used to throw and blank the page
  press("Enter", { ctrlKey: true });
  expect(typingText()).toContain("Alpha");
});

test("Enter counts a repetition of the current fact", async () => {
  const { typingText, repetition } = renderTypeNotes();
  await screen.findByText("Greek");
  expect(repetition()).toBe("1");

  for (const key of "Alpha beta") press(key);
  press("Enter");
  expect(repetition()).toBe("2");
  expect(typingText()).toContain("Alpha");
});
