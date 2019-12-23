import React from "react";
import { render } from "../../lib/test-utils";
import PurchaseInfo from "./index";

test("renders RoundButton", () => {
  const { getByText } = render(
    <PurchaseInfo
      timestamp="2016-09-22T13:57:32.2311892-03:00"
      location="BH Shopping"
      products={[
        { name: "Tênis azul", price: 120 },
        { name: "Calça rosa", price: 150 }
      ]}
    />
  );
  const linkElement = getByText("Tênis azul");
  expect(linkElement).toBeInTheDocument();
});
