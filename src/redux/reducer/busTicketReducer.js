import {
  REMOVE_ALL_SEAT,
  REMOVE_SEAT,
  SELECT_SEAT,
} from "../constant/busTicketContant";

const initState = {
  selectedSeats: [],
  totalPrice: 0,
};
const busTicketReducer = (state = initState, action) => {
  switch (action.type) {
    case SELECT_SEAT: {
      const { isSelected, ...seat } = action.payload;
      if (isSelected) {
        const selectedSeats = [...state.selectedSeats, seat];
        const totalPrice = state.totalPrice + seat.gia;
        return { ...state, selectedSeats, totalPrice };
      }
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.soGhe !== seat.soGhe
      );
      const totalPrice = state.totalPrice - seat.gia;
      return { ...state, selectedSeats, totalPrice };
    }
    case REMOVE_SEAT: {
      const seatID = action.payload;
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.soGhe !== seatID
      );
      const totalPrice = selectedSeats.reduce(
        (result, item) => result + item.gia,
        0
      );
      return { ...state, selectedSeats, totalPrice };
    }
    case REMOVE_ALL_SEAT: {
      return { ...state, selectedSeats: [] };
    }
    default:
      return state;
  }
};

export default busTicketReducer;
