import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import DisplayContactSelectedScreen from "../screens/DisplayContactSelectedScreen";

describe("Display Contact Selected Screen Renders Correctly", () => {
  it("renders correctly", () => {
    const snap = render(<DisplayContactSelectedScreen />).toJSON();
    expect(snap).toMatchSnapshot();
  });
  it("Back to Home Page Button Works", () => {
    const { queryByText } = render(<DisplayContactSelectedScreen />);
    const sendHandler = jest.fn();
    const button = queryByText("BACK TO HOME PAGE");
    expect(button).toBeTruthy();
  });
});
