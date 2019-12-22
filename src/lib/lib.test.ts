import { formatCurrency } from "./index";

test("format currency to brazilian reals", () => {
  expect(formatCurrency(14.3)).toBe("R$ 14,30");
});
