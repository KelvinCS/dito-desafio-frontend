import React, { useEffect } from "react";
import {
  Container,
  ArrowLeft,
  TimelineEvent,
  Timeline,
  CheckIcon
} from "./styled";
import PurchaseInfo from "../../components/PurchaseInfo";
import { useActions, useValues } from "kea";
import eventsLogic from "./events.logic";

const EventTimeline = () => {
  const { fetchEvents } = useActions(eventsLogic);
  const { events } = useValues(eventsLogic);

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <Container>
      <Timeline />
      <div>
        {events.map((props, index) => (
          <TimelineEvent key={index}>
            <CheckIcon />
            <ArrowLeft />
            <PurchaseInfo {...props} />
          </TimelineEvent>
        ))}
      </div>
    </Container>
  );
};

export default EventTimeline;
