import React from "react";
import { Container, OverlayingIcon, ArrowLeft, Timeline } from "./styled";
import PurchaseInfo, { Props as PurchaseInfoProps } from "../PurchaseInfo";

const TimelineEvent = (props: PurchaseInfoProps) => {
  return (
    <Container>
      <Timeline />
      <OverlayingIcon />
      <ArrowLeft />
      <PurchaseInfo {...props} />
    </Container>
  );
};

export default TimelineEvent;
