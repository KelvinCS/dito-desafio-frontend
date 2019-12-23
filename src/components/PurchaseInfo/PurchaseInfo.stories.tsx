import React from "react";
import PurchaseInfo from "./index";

export default { title: "PurchaseInfo" };

export const Event = () => (
  <PurchaseInfo
    timestamp="2016-09-22T13:57:32.2311892-03:00"
    location="BH Shopping"
    products={[
      { name: "Tênis azul", price: 120 },
      { name: "Calça rosa", price: 150 }
    ]}
  />
);
