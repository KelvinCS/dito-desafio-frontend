import styled from "styled-components";
import { ReactComponent as CalendarIcon } from "../../assets/img/calendar.svg";
import { ReactComponent as ClockIcon } from "../../assets/img/clock.svg";
import { ReactComponent as MoneyIcon } from "../../assets/img/money.svg";
import { ReactComponent as PlaceIcon } from "../../assets/img/place.svg";

const iconStyle = `
  width: 12px;
  height: 12px;
  margin-right: 4px
`;

export const Calendar = styled(CalendarIcon)`
  ${iconStyle}
`;
export const Money = styled(MoneyIcon)`
  ${iconStyle}
`;
export const Clock = styled(ClockIcon)`
  ${iconStyle}
`;
export const Place = styled(PlaceIcon)`
  ${iconStyle}
`;
