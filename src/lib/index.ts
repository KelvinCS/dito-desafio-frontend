/**
 * Formats a number to the brazilian currency
 * @param value
 * @example
 * formatCurrency(14.30)
 * @returns "R$ 14,30"
 */
export const formatCurrency = (value: number): string => {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
};
