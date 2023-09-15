import {
  SELECT_SEAT,
  REMOVE_SEAT,
  REMOVE_ALL_SEAT,
} from "../constant/busTicketContant";
export const selectSeat = (seat) => {
  return {
    type: SELECT_SEAT,
    payload: seat,
  };
};

export const removeSeat = (seatId) => {
  return {
    type: REMOVE_SEAT,
    payload: seatId,
  };
};
export const removeAllSeat = () => {
  return {
    type: REMOVE_ALL_SEAT,
  };
};
