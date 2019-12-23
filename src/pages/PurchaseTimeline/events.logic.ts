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

const addProduct = (products = [], { product_name, product_price }) => {
  if (!product_name) return products;

  return [...products, { name: product_name, price: product_price }];
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

            const { location, products } = currentState[transaction_id] || {};

            return {
              ...currentState,
              [transaction_id]: {
                location: store_name || location,
                products: addProduct(products, {
                  product_name,
                  product_price
                }),
                timestamp,
                name
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
