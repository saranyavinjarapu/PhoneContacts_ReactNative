import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SelectedContactItem from "../components/SelectedContactItem";

describe("Selected Contact Item Renders Correctly", () => {
  it("renders correctly", () => {
    const snap = render(<SelectedContactItem />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
