import styled from "styled-components";
import { ReactComponent as Check } from "../../assets/img/check.svg";

export const CheckIcon = styled(Check)`
  margin-top: 6px;
  margin-left: -13px;
  margin-right: 8px;
  height: 24px;
  width: 24px;
`;

export const Container = styled.main`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  padding: 16px;
`;

export const TimelineEvent = styled.div`
  display: flex;
`;

export const EventList = styled.div``;

export const ArrowLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 10px solid ${({ theme }) => theme.colors.white};
  z-index: 1;
  margin-top: 10px;
`;

export const Timeline = styled.div`
  height: 80vh;
  background-color: ${({ theme }) => theme.colors.gray};
  width: 2px;
`;
