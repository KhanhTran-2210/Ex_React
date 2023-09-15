import { configureStore } from "@reduxjs/toolkit";
import busTicketReducer from "./redux/reducer/busTicketReducer";

const store = configureStore({
  reducer: {
    busTicket: busTicketReducer,
  },
});

export default store;
