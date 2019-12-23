import { API_URL } from "../config/variables";

export default {
  getEvents() {
    return fetch(`${API_URL}/events.json`).then(res => res.json());
  }
};
