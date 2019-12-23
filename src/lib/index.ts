import moment from "moment";

/**
 * Formats a number to the brazilian currency
 * @param value
 * @example
 * formatCurrency(14.30)
 * @returns "R$ 14,30"
 */
export const formatCurrency = (value: number): string =>
  `R$ ${value.toFixed(2).replace(".", ",")}`;

export const sortByTimestamp = (elementA, elementB) =>
  moment(elementA.timestamp).unix() - moment(elementB.timestamp).unix();
