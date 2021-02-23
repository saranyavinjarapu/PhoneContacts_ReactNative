import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Header from "../components/Header/Header";

describe("Header Renders Correctly", () => {
  it("renders correctly", () => {
    const snap = render(<Header />).toJSON();
    expect(snap).toMatchSnapshot();
  });
  it("Header title Works", () => {
    const headerRender = render(<Header title="Hello Test!" />);
    expect(headerRender).toBeTruthy();
    const headerText = headerRender.getByTestId("header_text");
    expect(headerText.props.children).toEqual("Hello Test!");
  });
});
