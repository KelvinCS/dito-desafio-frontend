import styled from "styled-components";
import { ReactComponent as CheckIcon } from "../../assets/img/check.svg";

export const OverlayingIcon = styled(CheckIcon)`
  margin-top: 6px;
  margin-left: -13px;
  margin-right: 8px;
  height: 24px;
  width: 24px;
`;

export const Container = styled.div`
  display: flex;
`;

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
  min-height: 100%;
  width: 2px;
  background-color: ${({ theme }) => theme.colors.gray};
`;
