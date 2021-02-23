import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import OpenContactsMainScreen from "../screens/OpenContactsMainScreen/OpenContactsMainScreen";

describe("Open Contacts Main Screen Renders Correctly", () => {
  it("renders correctly", () => {
    const snap = render(<OpenContactsMainScreen />).toJSON();
    expect(snap).toMatchSnapshot();
  });

  it("Open Contacts Button Works", () => {
    const { queryByText } = render(<OpenContactsMainScreen />);
    const sendHandler = jest.fn();
    const button = queryByText("OPEN PHONE CONTACTS");
    expect(button).toBeTruthy();
    fireEvent.press(button);
    expect(sendHandler).not.toBeNull();
  });
});
