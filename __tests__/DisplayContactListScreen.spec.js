import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import DisplayContactListScreen from "../screens/DisplayContactListScreen";

describe("Display Contacts List Screen Renders Correctly", () => {
  it("renders correctly", () => {
    const tree = render(<DisplayContactListScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should flatlist render data correctly", () => {
    const { queryByText, getByTestId } = render(<DisplayContactListScreen />);
    const flat_list_data = getByTestId("flat_list");
    expect(flat_list_data).not.toBeNull();
  });
});
