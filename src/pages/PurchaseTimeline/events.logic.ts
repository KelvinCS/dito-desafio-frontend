import { kea } from "kea";
import { put } from "redux-saga/effects";
import PurchaseService from "../../services/Purchase";
import { sortByTimestamp } from "../../lib";

const normalizeEvent = event => {
  const { custom_data } = event;

  return custom_data.reduce(
    (current, { key, value }) => ({ ...current, [key]: value }),
    { name: event.event, timestamp: event.timestamp }
  );
};

const events = kea({
  actions: () => ({
    fetchEvents: () => ({}),
    saveEvents: events => ({ events })
  }),

  reducers: ({ actions }) => ({
    eventsMap: [
      {},
      {
        [actions.saveEvents]: (state, { events }) =>
          events.reduce((currentState, event) => {
            const {
              transaction_id,
              store_name,
              product_price,
              product_name,
              timestamp,
              name
            } = normalizeEvent(event);

            const eventInfo = currentState[transaction_id] || { products: [] };

            const products = product_name
              ? [
                  ...eventInfo.products,
                  { name: product_name, price: product_price }
                ]
              : eventInfo.products;

            return {
              ...currentState,
              [transaction_id]: {
                location: store_name || eventInfo.location,
                timestamp,
                name,
                products
              }
            };
          }, state)
      }
    ]
  }),

  selectors: ({ selectors }) => ({
    events: [
      () => [selectors.eventsMap],
      eventsMap => Object.values(eventsMap).sort(sortByTimestamp),
      []
    ]
  }),

  takeLatest: ({ actions, workers }) => ({
    [actions.fetchEvents]: workers.fetchEvents
  }),

  workers: {
    *fetchEvents() {
      const { saveEvents } = this.actions;

      const { events } = yield PurchaseService.getEvents();

      yield put(saveEvents(events));
    }
  }
});

export default events;
