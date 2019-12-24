import React, { useEffect } from "react";
import { Container } from "./styled";
import { useActions, useValues } from "kea";
import eventsLogic from "./events.logic";
import TimelineEvent from "../../components/TimelineEvent";

const PurchaseTimeline = () => {
  const { fetchEvents } = useActions(eventsLogic);
  const { events } = useValues(eventsLogic);

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <Container>
      {events.map((props, index) => (
        <TimelineEvent key={index} {...props} />
      ))}
    </Container>
  );
};

export default PurchaseTimeline;
